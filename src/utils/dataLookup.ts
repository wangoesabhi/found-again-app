// Data lookup utilities based on the Lost & Found flowchart

import { 
  aadhaarDatabase, 
  samagraFamilyDatabase, 
  familyMembersDatabase,
  type AadhaarRecord,
  type SamagraFamily,
  type FamilyMember
} from "@/data/dummyDatabases";

// Simulates fingerprint matching to Aadhaar (normally would use biometric device)
export function findAadhaarByFingerprint(fingerprintData: string): AadhaarRecord | null {
  // This simulates the fingerprint matching process
  // In real implementation, this would use actual biometric matching
  const fingerprintToAadhaarMap: Record<string, string> = {
    "FP_RAJ_001": "1234-5678-9012",
    "FP_AMI_001": "3456-7890-1234",
    "FP_MEE_001": "6789-0123-4567",
    "FP_ARJ_001": "0123-4567-8901",
    "FP_DEE_001": "4567-8901-2346",
    "FP_KAV_001": "1234-5678-9013",
    "FP_VIK_001": "8901-2345-6780",
    "FP_SUN_001": "3456-7890-1235",
    "FP_RAH_001": "2345-6789-0125",
    "FP_RIT_001": "7890-1234-5680",
    "FP_KAR_001": "3456-7890-1237",
    "FP_SWA_001": "7890-1234-5681",
    "FP_AKA_001": "0123-4567-8904",
  };

  const aadhaarNumber = fingerprintToAadhaarMap[fingerprintData];
  if (!aadhaarNumber) return null;

  return aadhaarDatabase.find(record => record.aadhaarNumber === aadhaarNumber) || null;
}

// Step 2: Find Samagra Family ID from Aadhaar number
export function findSamagraFamilyByAadhaar(aadhaarNumber: string): SamagraFamily | null {
  const aadhaarRecord = aadhaarDatabase.find(record => record.aadhaarNumber === aadhaarNumber);
  if (!aadhaarRecord) return null;

  return samagraFamilyDatabase.find(family => family.samagraFamilyId === aadhaarRecord.samagraFamilyId) || null;
}

// Step 3: Get all family members from Samagra Family ID
export function getFamilyMembers(samagraFamilyId: string): FamilyMember[] {
  const family = samagraFamilyDatabase.find(f => f.samagraFamilyId === samagraFamilyId);
  if (!family) return [];

  return familyMembersDatabase.filter(member => family.memberIds.includes(member.memberId));
}

// Step 4: Get all mobile numbers for family contact
export function getFamilyContactNumbers(samagraFamilyId: string): Array<{
  name: string;
  relationship: string;
  mobileNumbers: string[];
}> {
  const members = getFamilyMembers(samagraFamilyId);
  
  return members
    .filter(member => member.mobileNumbers.length > 0)
    .map(member => ({
      name: member.name,
      relationship: member.relationship,
      mobileNumbers: member.mobileNumbers
    }));
}

// Complete lookup chain: Fingerprint → Aadhaar → Samagra → Family → Mobile numbers
export function performCompletePersonLookup(fingerprintData: string) {
  console.log("🔍 Starting person lookup for fingerprint:", fingerprintData);
  
  // Step 1: Match fingerprint to Aadhaar
  const aadhaarRecord = findAadhaarByFingerprint(fingerprintData);
  if (!aadhaarRecord) {
    console.log("❌ No Aadhaar record found for fingerprint");
    return {
      success: false,
      message: "No Aadhaar record found for provided fingerprint",
      data: null
    };
  }
  
  console.log("✅ Aadhaar found:", aadhaarRecord.aadhaarNumber, "-", aadhaarRecord.name);
  
  // Step 2: Find Samagra Family
  const samagraFamily = findSamagraFamilyByAadhaar(aadhaarRecord.aadhaarNumber);
  if (!samagraFamily) {
    console.log("❌ No Samagra family record found");
    return {
      success: false,
      message: "No Samagra family record found for this Aadhaar",
      data: { aadhaarRecord }
    };
  }
  
  console.log("✅ Samagra Family found:", samagraFamily.samagraFamilyId);
  
  // Step 3: Get family members
  const familyMembers = getFamilyMembers(samagraFamily.samagraFamilyId);
  console.log("✅ Family members found:", familyMembers.length);
  
  // Step 4: Get contact numbers
  const contactNumbers = getFamilyContactNumbers(samagraFamily.samagraFamilyId);
  console.log("✅ Contact numbers found:", contactNumbers.length, "members with phones");
  
  return {
    success: true,
    message: "Complete family information retrieved successfully",
    data: {
      aadhaarRecord,
      samagraFamily,
      familyMembers,
      contactNumbers,
      totalContacts: contactNumbers.reduce((sum, contact) => sum + contact.mobileNumbers.length, 0)
    }
  };
}

// Simulate SMS/WhatsApp sending (for demonstration)
export function sendFamilyNotifications(contactNumbers: Array<{
  name: string;
  relationship: string;
  mobileNumbers: string[];
}>, personDetails: { name: string; location: string; timestamp: string }) {
  
  const messages: Array<{
    to: string;
    recipient: string;
    relationship: string;
    message: string;
    timestamp: string;
  }> = [];

  contactNumbers.forEach(contact => {
    contact.mobileNumbers.forEach(mobile => {
      const message = `URGENT: ${personDetails.name} has been found at ${personDetails.location}. Please contact the Lost & Found center immediately. Time: ${personDetails.timestamp}. This is an automated message from MP Police Lost & Found System.`;
      
      messages.push({
        to: mobile,
        recipient: contact.name,
        relationship: contact.relationship,
        message,
        timestamp: new Date().toLocaleString()
      });
    });
  });

  console.log("📱 Sending notifications to", messages.length, "phone numbers:");
  messages.forEach(msg => {
    console.log(`📞 ${msg.to} (${msg.recipient} - ${msg.relationship}): ${msg.message.substring(0, 50)}...`);
  });

  return messages;
}
// Dummy databases based on the Lost & Found flowchart

export interface AadhaarRecord {
  aadhaarNumber: string;
  name: string;
  age: number;
  address: string;
  samagraFamilyId: string;
}

export interface SamagraFamily {
  samagraFamilyId: string;
  headOfFamily: string;
  address: string;
  memberIds: string[];
}

export interface FamilyMember {
  memberId: string;
  name: string;
  aadhaarNumber: string;
  relationship: string;
  age: number;
  mobileNumbers: string[];
}

export interface PersonRecord {
  id: string;
  name: string;
  age?: number;
  status: "missing" | "found" | "contacted" | "pending";
  location: string;
  timestamp: string;
  hasAadhaar: boolean;
  hasFamilyDetails: boolean;
  imageUrl?: string;
  fingerprintData?: string; // Simulated fingerprint data
  aadhaarNumber?: string; // Found through fingerprint matching
}

// Dummy Aadhaar Database (50+ records)
export const aadhaarDatabase: AadhaarRecord[] = [
  { aadhaarNumber: "1234-5678-9012", name: "Rajesh Kumar", age: 45, address: "123 MG Road, Bhopal", samagraFamilyId: "MP-BHO-001" },
  { aadhaarNumber: "2345-6789-0123", name: "Priya Sharma", age: 42, address: "123 MG Road, Bhopal", samagraFamilyId: "MP-BHO-001" },
  { aadhaarNumber: "3456-7890-1234", name: "Amit Kumar", age: 20, address: "123 MG Road, Bhopal", samagraFamilyId: "MP-BHO-001" },
  { aadhaarNumber: "4567-8901-2345", name: "Sonia Kumar", age: 18, address: "123 MG Road, Bhopal", samagraFamilyId: "MP-BHO-001" },
  
  { aadhaarNumber: "5678-9012-3456", name: "Suresh Patel", age: 55, address: "456 Civil Lines, Indore", samagraFamilyId: "MP-IND-002" },
  { aadhaarNumber: "6789-0123-4567", name: "Meera Patel", age: 50, address: "456 Civil Lines, Indore", samagraFamilyId: "MP-IND-002" },
  { aadhaarNumber: "7890-1234-5678", name: "Rohit Patel", age: 25, address: "456 Civil Lines, Indore", samagraFamilyId: "MP-IND-002" },
  
  { aadhaarNumber: "8901-2345-6789", name: "Vikas Singh", age: 35, address: "789 MP Nagar, Bhopal", samagraFamilyId: "MP-BHO-003" },
  { aadhaarNumber: "9012-3456-7890", name: "Pooja Singh", age: 32, address: "789 MP Nagar, Bhopal", samagraFamilyId: "MP-BHO-003" },
  { aadhaarNumber: "0123-4567-8901", name: "Arjun Singh", age: 12, address: "789 MP Nagar, Bhopal", samagraFamilyId: "MP-BHO-003" },
  { aadhaarNumber: "1234-5678-9013", name: "Kavya Singh", age: 8, address: "789 MP Nagar, Bhopal", samagraFamilyId: "MP-BHO-003" },
  
  { aadhaarNumber: "2345-6789-0124", name: "Ramesh Gupta", age: 60, address: "321 Sadar Bazaar, Gwalior", samagraFamilyId: "MP-GWL-004" },
  { aadhaarNumber: "3456-7890-1235", name: "Sunita Gupta", age: 55, address: "321 Sadar Bazaar, Gwalior", samagraFamilyId: "MP-GWL-004" },
  { aadhaarNumber: "4567-8901-2346", name: "Deepak Gupta", age: 30, address: "321 Sadar Bazaar, Gwalior", samagraFamilyId: "MP-GWL-004" },
  { aadhaarNumber: "5678-9012-3457", name: "Neha Gupta", age: 28, address: "321 Sadar Bazaar, Gwalior", samagraFamilyId: "MP-GWL-004" },
  
  { aadhaarNumber: "6789-0123-4568", name: "Anil Yadav", age: 48, address: "654 Palasia, Indore", samagraFamilyId: "MP-IND-005" },
  { aadhaarNumber: "7890-1234-5679", name: "Rekha Yadav", age: 44, address: "654 Palasia, Indore", samagraFamilyId: "MP-IND-005" },
  { aadhaarNumber: "8901-2345-6780", name: "Vikash Yadav", age: 22, address: "654 Palasia, Indore", samagraFamilyId: "MP-IND-005" },
  { aadhaarNumber: "9012-3456-7891", name: "Priyanka Yadav", age: 19, address: "654 Palasia, Indore", samagraFamilyId: "MP-IND-005" },
  
  { aadhaarNumber: "0123-4567-8902", name: "Manoj Tiwari", age: 52, address: "987 Habibganj, Bhopal", samagraFamilyId: "MP-BHO-006" },
  { aadhaarNumber: "1234-5678-9014", name: "Sushma Tiwari", age: 47, address: "987 Habibganj, Bhopal", samagraFamilyId: "MP-BHO-006" },
  { aadhaarNumber: "2345-6789-0125", name: "Rahul Tiwari", age: 24, address: "987 Habibganj, Bhopal", samagraFamilyId: "MP-BHO-006" },
  { aadhaarNumber: "3456-7890-1236", name: "Shreya Tiwari", age: 21, address: "987 Habibganj, Bhopal", samagraFamilyId: "MP-BHO-006" },
  
  { aadhaarNumber: "4567-8901-2347", name: "Santosh Jain", age: 65, address: "147 Vijay Nagar, Indore", samagraFamilyId: "MP-IND-007" },
  { aadhaarNumber: "5678-9012-3458", name: "Kamla Jain", age: 60, address: "147 Vijay Nagar, Indore", samagraFamilyId: "MP-IND-007" },
  { aadhaarNumber: "6789-0123-4569", name: "Ashish Jain", age: 35, address: "147 Vijay Nagar, Indore", samagraFamilyId: "MP-IND-007" },
  { aadhaarNumber: "7890-1234-5680", name: "Ritu Jain", age: 32, address: "147 Vijay Nagar, Indore", samagraFamilyId: "MP-IND-007" },
  { aadhaarNumber: "8901-2345-6781", name: "Harsh Jain", age: 10, address: "147 Vijay Nagar, Indore", samagraFamilyId: "MP-IND-007" },
  
  { aadhaarNumber: "9012-3456-7892", name: "Govind Verma", age: 70, address: "258 Malviya Nagar, Bhopal", samagraFamilyId: "MP-BHO-008" },
  { aadhaarNumber: "0123-4567-8903", name: "Savitri Verma", age: 65, address: "258 Malviya Nagar, Bhopal", samagraFamilyId: "MP-BHO-008" },
  { aadhaarNumber: "1234-5678-9015", name: "Sunil Verma", age: 40, address: "258 Malviya Nagar, Bhopal", samagraFamilyId: "MP-BHO-008" },
  { aadhaarNumber: "2345-6789-0126", name: "Anita Verma", age: 37, address: "258 Malviya Nagar, Bhopal", samagraFamilyId: "MP-BHO-008" },
  { aadhaarNumber: "3456-7890-1237", name: "Karan Verma", age: 15, address: "258 Malviya Nagar, Bhopal", samagraFamilyId: "MP-BHO-008" },
  
  { aadhaarNumber: "4567-8901-2348", name: "Dinesh Agarwal", age: 58, address: "369 Rau, Indore", samagraFamilyId: "MP-IND-009" },
  { aadhaarNumber: "5678-9012-3459", name: "Usha Agarwal", age: 53, address: "369 Rau, Indore", samagraFamilyId: "MP-IND-009" },
  { aadhaarNumber: "6789-0123-4570", name: "Nitin Agarwal", age: 28, address: "369 Rau, Indore", samagraFamilyId: "MP-IND-009" },
  { aadhaarNumber: "7890-1234-5681", name: "Swati Agarwal", age: 25, address: "369 Rau, Indore", samagraFamilyId: "MP-IND-009" },
  
  { aadhaarNumber: "8901-2345-6782", name: "Ravi Chouhan", age: 43, address: "741 Kolar Road, Bhopal", samagraFamilyId: "MP-BHO-010" },
  { aadhaarNumber: "9012-3456-7893", name: "Seema Chouhan", age: 39, address: "741 Kolar Road, Bhopal", samagraFamilyId: "MP-BHO-010" },
  { aadhaarNumber: "0123-4567-8904", name: "Akash Chouhan", age: 17, address: "741 Kolar Road, Bhopal", samagraFamilyId: "MP-BHO-010" },
  { aadhaarNumber: "1234-5678-9016", name: "Pooja Chouhan", age: 14, address: "741 Kolar Road, Bhopal", samagraFamilyId: "MP-BHO-010" },
  
  // Additional records to reach 50+
  { aadhaarNumber: "2345-6789-0127", name: "Mukesh Pandey", age: 50, address: "852 New Market, Jabalpur", samagraFamilyId: "MP-JAB-011" },
  { aadhaarNumber: "3456-7890-1238", name: "Kiran Pandey", age: 45, address: "852 New Market, Jabalpur", samagraFamilyId: "MP-JAB-011" },
  { aadhaarNumber: "4567-8901-2349", name: "Vishal Pandey", age: 23, address: "852 New Market, Jabalpur", samagraFamilyId: "MP-JAB-011" },
  { aadhaarNumber: "5678-9012-3460", name: "Nisha Pandey", age: 20, address: "852 New Market, Jabalpur", samagraFamilyId: "MP-JAB-011" },
  
  { aadhaarNumber: "6789-0123-4571", name: "Prakash Dubey", age: 62, address: "963 Wright Town, Jabalpur", samagraFamilyId: "MP-JAB-012" },
  { aadhaarNumber: "7890-1234-5682", name: "Sunita Dubey", age: 57, address: "963 Wright Town, Jabalpur", samagraFamilyId: "MP-JAB-012" },
  { aadhaarNumber: "8901-2345-6783", name: "Rajat Dubey", age: 32, address: "963 Wright Town, Jabalpur", samagraFamilyId: "MP-JAB-012" },
  { aadhaarNumber: "9012-3456-7894", name: "Shweta Dubey", age: 29, address: "963 Wright Town, Jabalpur", samagraFamilyId: "MP-JAB-012" },
  
  { aadhaarNumber: "0123-4567-8905", name: "Narendra Soni", age: 55, address: "159 Sarafa Bazaar, Ujjain", samagraFamilyId: "MP-UJJ-013" },
  { aadhaarNumber: "1234-5678-9017", name: "Geeta Soni", age: 50, address: "159 Sarafa Bazaar, Ujjain", samagraFamilyId: "MP-UJJ-013" },
  { aadhaarNumber: "2345-6789-0128", name: "Manish Soni", age: 27, address: "159 Sarafa Bazaar, Ujjain", samagraFamilyId: "MP-UJJ-013" },
  { aadhaarNumber: "3456-7890-1239", name: "Priya Soni", age: 24, address: "159 Sarafa Bazaar, Ujjain", samagraFamilyId: "MP-UJJ-013" },
];

// Samagra Family Database
export const samagraFamilyDatabase: SamagraFamily[] = [
  { samagraFamilyId: "MP-BHO-001", headOfFamily: "Rajesh Kumar", address: "123 MG Road, Bhopal", memberIds: ["MEM-001", "MEM-002", "MEM-003", "MEM-004"] },
  { samagraFamilyId: "MP-IND-002", headOfFamily: "Suresh Patel", address: "456 Civil Lines, Indore", memberIds: ["MEM-005", "MEM-006", "MEM-007"] },
  { samagraFamilyId: "MP-BHO-003", headOfFamily: "Vikas Singh", address: "789 MP Nagar, Bhopal", memberIds: ["MEM-008", "MEM-009", "MEM-010", "MEM-011"] },
  { samagraFamilyId: "MP-GWL-004", headOfFamily: "Ramesh Gupta", address: "321 Sadar Bazaar, Gwalior", memberIds: ["MEM-012", "MEM-013", "MEM-014", "MEM-015"] },
  { samagraFamilyId: "MP-IND-005", headOfFamily: "Anil Yadav", address: "654 Palasia, Indore", memberIds: ["MEM-016", "MEM-017", "MEM-018", "MEM-019"] },
  { samagraFamilyId: "MP-BHO-006", headOfFamily: "Manoj Tiwari", address: "987 Habibganj, Bhopal", memberIds: ["MEM-020", "MEM-021", "MEM-022", "MEM-023"] },
  { samagraFamilyId: "MP-IND-007", headOfFamily: "Santosh Jain", address: "147 Vijay Nagar, Indore", memberIds: ["MEM-024", "MEM-025", "MEM-026", "MEM-027", "MEM-028"] },
  { samagraFamilyId: "MP-BHO-008", headOfFamily: "Govind Verma", address: "258 Malviya Nagar, Bhopal", memberIds: ["MEM-029", "MEM-030", "MEM-031", "MEM-032", "MEM-033"] },
  { samagraFamilyId: "MP-IND-009", headOfFamily: "Dinesh Agarwal", address: "369 Rau, Indore", memberIds: ["MEM-034", "MEM-035", "MEM-036", "MEM-037"] },
  { samagraFamilyId: "MP-BHO-010", headOfFamily: "Ravi Chouhan", address: "741 Kolar Road, Bhopal", memberIds: ["MEM-038", "MEM-039", "MEM-040", "MEM-041"] },
  { samagraFamilyId: "MP-JAB-011", headOfFamily: "Mukesh Pandey", address: "852 New Market, Jabalpur", memberIds: ["MEM-042", "MEM-043", "MEM-044", "MEM-045"] },
  { samagraFamilyId: "MP-JAB-012", headOfFamily: "Prakash Dubey", address: "963 Wright Town, Jabalpur", memberIds: ["MEM-046", "MEM-047", "MEM-048", "MEM-049"] },
  { samagraFamilyId: "MP-UJJ-013", headOfFamily: "Narendra Soni", address: "159 Sarafa Bazaar, Ujjain", memberIds: ["MEM-050", "MEM-051", "MEM-052", "MEM-053"] },
];

// Family Members Database
export const familyMembersDatabase: FamilyMember[] = [
  // Family MP-BHO-001
  { memberId: "MEM-001", name: "Rajesh Kumar", aadhaarNumber: "1234-5678-9012", relationship: "Head", age: 45, mobileNumbers: ["+91-9876543210", "+91-8765432109"] },
  { memberId: "MEM-002", name: "Priya Sharma", aadhaarNumber: "2345-6789-0123", relationship: "Wife", age: 42, mobileNumbers: ["+91-7654321098"] },
  { memberId: "MEM-003", name: "Amit Kumar", aadhaarNumber: "3456-7890-1234", relationship: "Son", age: 20, mobileNumbers: ["+91-6543210987"] },
  { memberId: "MEM-004", name: "Sonia Kumar", aadhaarNumber: "4567-8901-2345", relationship: "Daughter", age: 18, mobileNumbers: ["+91-5432109876"] },
  
  // Family MP-IND-002
  { memberId: "MEM-005", name: "Suresh Patel", aadhaarNumber: "5678-9012-3456", relationship: "Head", age: 55, mobileNumbers: ["+91-4321098765", "+91-3210987654"] },
  { memberId: "MEM-006", name: "Meera Patel", aadhaarNumber: "6789-0123-4567", relationship: "Wife", age: 50, mobileNumbers: ["+91-2109876543"] },
  { memberId: "MEM-007", name: "Rohit Patel", aadhaarNumber: "7890-1234-5678", relationship: "Son", age: 25, mobileNumbers: ["+91-1098765432"] },
  
  // Family MP-BHO-003
  { memberId: "MEM-008", name: "Vikas Singh", aadhaarNumber: "8901-2345-6789", relationship: "Head", age: 35, mobileNumbers: ["+91-9087654321"] },
  { memberId: "MEM-009", name: "Pooja Singh", aadhaarNumber: "9012-3456-7890", relationship: "Wife", age: 32, mobileNumbers: ["+91-8976543210"] },
  { memberId: "MEM-010", name: "Arjun Singh", aadhaarNumber: "0123-4567-8901", relationship: "Son", age: 12, mobileNumbers: [] },
  { memberId: "MEM-011", name: "Kavya Singh", aadhaarNumber: "1234-5678-9013", relationship: "Daughter", age: 8, mobileNumbers: [] },
  
  // Family MP-GWL-004
  { memberId: "MEM-012", name: "Ramesh Gupta", aadhaarNumber: "2345-6789-0124", relationship: "Head", age: 60, mobileNumbers: ["+91-7865432109", "+91-6754321098"] },
  { memberId: "MEM-013", name: "Sunita Gupta", aadhaarNumber: "3456-7890-1235", relationship: "Wife", age: 55, mobileNumbers: ["+91-5643210987"] },
  { memberId: "MEM-014", name: "Deepak Gupta", aadhaarNumber: "4567-8901-2346", relationship: "Son", age: 30, mobileNumbers: ["+91-4532109876"] },
  { memberId: "MEM-015", name: "Neha Gupta", aadhaarNumber: "5678-9012-3457", relationship: "Daughter-in-law", age: 28, mobileNumbers: ["+91-3421098765"] },
  
  // Continue for all families...
  { memberId: "MEM-016", name: "Anil Yadav", aadhaarNumber: "6789-0123-4568", relationship: "Head", age: 48, mobileNumbers: ["+91-2310987654"] },
  { memberId: "MEM-017", name: "Rekha Yadav", aadhaarNumber: "7890-1234-5679", relationship: "Wife", age: 44, mobileNumbers: ["+91-1209876543"] },
  { memberId: "MEM-018", name: "Vikash Yadav", aadhaarNumber: "8901-2345-6780", relationship: "Son", age: 22, mobileNumbers: ["+91-0198765432"] },
  { memberId: "MEM-019", name: "Priyanka Yadav", aadhaarNumber: "9012-3456-7891", relationship: "Daughter", age: 19, mobileNumbers: ["+91-9087654321"] },
  
  { memberId: "MEM-020", name: "Manoj Tiwari", aadhaarNumber: "0123-4567-8902", relationship: "Head", age: 52, mobileNumbers: ["+91-8976543210"] },
  { memberId: "MEM-021", name: "Sushma Tiwari", aadhaarNumber: "1234-5678-9014", relationship: "Wife", age: 47, mobileNumbers: ["+91-7865432109"] },
  { memberId: "MEM-022", name: "Rahul Tiwari", aadhaarNumber: "2345-6789-0125", relationship: "Son", age: 24, mobileNumbers: ["+91-6754321098"] },
  { memberId: "MEM-023", name: "Shreya Tiwari", aadhaarNumber: "3456-7890-1236", relationship: "Daughter", age: 21, mobileNumbers: ["+91-5643210987"] },
  
  { memberId: "MEM-024", name: "Santosh Jain", aadhaarNumber: "4567-8901-2347", relationship: "Head", age: 65, mobileNumbers: ["+91-4532109876"] },
  { memberId: "MEM-025", name: "Kamla Jain", aadhaarNumber: "5678-9012-3458", relationship: "Wife", age: 60, mobileNumbers: ["+91-3421098765"] },
  { memberId: "MEM-026", name: "Ashish Jain", aadhaarNumber: "6789-0123-4569", relationship: "Son", age: 35, mobileNumbers: ["+91-2310987654"] },
  { memberId: "MEM-027", name: "Ritu Jain", aadhaarNumber: "7890-1234-5680", relationship: "Daughter-in-law", age: 32, mobileNumbers: ["+91-1209876543"] },
  { memberId: "MEM-028", name: "Harsh Jain", aadhaarNumber: "8901-2345-6781", relationship: "Grandson", age: 10, mobileNumbers: [] },
  
  { memberId: "MEM-029", name: "Govind Verma", aadhaarNumber: "9012-3456-7892", relationship: "Head", age: 70, mobileNumbers: ["+91-0198765432"] },
  { memberId: "MEM-030", name: "Savitri Verma", aadhaarNumber: "0123-4567-8903", relationship: "Wife", age: 65, mobileNumbers: ["+91-9087654321"] },
  { memberId: "MEM-031", name: "Sunil Verma", aadhaarNumber: "1234-5678-9015", relationship: "Son", age: 40, mobileNumbers: ["+91-8976543210"] },
  { memberId: "MEM-032", name: "Anita Verma", aadhaarNumber: "2345-6789-0126", relationship: "Daughter-in-law", age: 37, mobileNumbers: ["+91-7865432109"] },
  { memberId: "MEM-033", name: "Karan Verma", aadhaarNumber: "3456-7890-1237", relationship: "Grandson", age: 15, mobileNumbers: [] },
  
  { memberId: "MEM-034", name: "Dinesh Agarwal", aadhaarNumber: "4567-8901-2348", relationship: "Head", age: 58, mobileNumbers: ["+91-6754321098"] },
  { memberId: "MEM-035", name: "Usha Agarwal", aadhaarNumber: "5678-9012-3459", relationship: "Wife", age: 53, mobileNumbers: ["+91-5643210987"] },
  { memberId: "MEM-036", name: "Nitin Agarwal", aadhaarNumber: "6789-0123-4570", relationship: "Son", age: 28, mobileNumbers: ["+91-4532109876"] },
  { memberId: "MEM-037", name: "Swati Agarwal", aadhaarNumber: "7890-1234-5681", relationship: "Daughter-in-law", age: 25, mobileNumbers: ["+91-3421098765"] },
  
  { memberId: "MEM-038", name: "Ravi Chouhan", aadhaarNumber: "8901-2345-6782", relationship: "Head", age: 43, mobileNumbers: ["+91-2310987654"] },
  { memberId: "MEM-039", name: "Seema Chouhan", aadhaarNumber: "9012-3456-7893", relationship: "Wife", age: 39, mobileNumbers: ["+91-1209876543"] },
  { memberId: "MEM-040", name: "Akash Chouhan", aadhaarNumber: "0123-4567-8904", relationship: "Son", age: 17, mobileNumbers: [] },
  { memberId: "MEM-041", name: "Pooja Chouhan", aadhaarNumber: "1234-5678-9016", relationship: "Daughter", age: 14, mobileNumbers: [] },
  
  { memberId: "MEM-042", name: "Mukesh Pandey", aadhaarNumber: "2345-6789-0127", relationship: "Head", age: 50, mobileNumbers: ["+91-0198765432"] },
  { memberId: "MEM-043", name: "Kiran Pandey", aadhaarNumber: "3456-7890-1238", relationship: "Wife", age: 45, mobileNumbers: ["+91-9087654321"] },
  { memberId: "MEM-044", name: "Vishal Pandey", aadhaarNumber: "4567-8901-2349", relationship: "Son", age: 23, mobileNumbers: ["+91-8976543210"] },
  { memberId: "MEM-045", name: "Nisha Pandey", aadhaarNumber: "5678-9012-3460", relationship: "Daughter", age: 20, mobileNumbers: ["+91-7865432109"] },
  
  { memberId: "MEM-046", name: "Prakash Dubey", aadhaarNumber: "6789-0123-4571", relationship: "Head", age: 62, mobileNumbers: ["+91-6754321098"] },
  { memberId: "MEM-047", name: "Sunita Dubey", aadhaarNumber: "7890-1234-5682", relationship: "Wife", age: 57, mobileNumbers: ["+91-5643210987"] },
  { memberId: "MEM-048", name: "Rajat Dubey", aadhaarNumber: "8901-2345-6783", relationship: "Son", age: 32, mobileNumbers: ["+91-4532109876"] },
  { memberId: "MEM-049", name: "Shweta Dubey", aadhaarNumber: "9012-3456-7894", relationship: "Daughter-in-law", age: 29, mobileNumbers: ["+91-3421098765"] },
  
  { memberId: "MEM-050", name: "Narendra Soni", aadhaarNumber: "0123-4567-8905", relationship: "Head", age: 55, mobileNumbers: ["+91-2310987654"] },
  { memberId: "MEM-051", name: "Geeta Soni", aadhaarNumber: "1234-5678-9017", relationship: "Wife", age: 50, mobileNumbers: ["+91-1209876543"] },
  { memberId: "MEM-052", name: "Manish Soni", aadhaarNumber: "2345-6789-0128", relationship: "Son", age: 27, mobileNumbers: ["+91-0198765432"] },
  { memberId: "MEM-053", name: "Priya Soni", aadhaarNumber: "3456-7890-1239", relationship: "Daughter", age: 24, mobileNumbers: ["+91-9087654321"] },
];

// Extended Person Records (50+ persons with simulated fingerprint data)
export const personRecords: PersonRecord[] = [
  {
    id: "P001",
    name: "Rajesh Kumar",
    age: 45,
    status: "contacted",
    location: "Kiosk #12, Central Station",
    timestamp: "2 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_RAJ_001",
    aadhaarNumber: "1234-5678-9012"
  },
  {
    id: "P002",
    name: "Unknown Person #1",
    status: "pending",
    location: "Kiosk #08, Mall Plaza",
    timestamp: "4 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_001"
  },
  {
    id: "P003",
    name: "Amit Kumar",
    age: 20,
    status: "found",
    location: "Kiosk #15, Airport Terminal",
    timestamp: "6 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_AMI_001",
    aadhaarNumber: "3456-7890-1234"
  },
  {
    id: "P004",
    name: "Meera Patel",
    age: 50,
    status: "contacted",
    location: "Kiosk #03, Bus Station",
    timestamp: "8 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_MEE_001",
    aadhaarNumber: "6789-0123-4567"
  },
  {
    id: "P005",
    name: "Unknown Elderly Man",
    age: 65,
    status: "missing",
    location: "Kiosk #12, Central Station",
    timestamp: "1 hour ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_002"
  },
  // Continue adding more person records...
  {
    id: "P006",
    name: "Arjun Singh",
    age: 12,
    status: "found",
    location: "Kiosk #07, Shopping Mall",
    timestamp: "3 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_ARJ_001",
    aadhaarNumber: "0123-4567-8901"
  },
  {
    id: "P007",
    name: "Unknown Woman",
    age: 35,
    status: "pending",
    location: "Kiosk #11, Railway Platform",
    timestamp: "5 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_003"
  },
  {
    id: "P008",
    name: "Deepak Gupta",
    age: 30,
    status: "contacted",
    location: "Kiosk #05, Metro Station",
    timestamp: "7 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_DEE_001",
    aadhaarNumber: "4567-8901-2346"
  },
  {
    id: "P009",
    name: "Kavya Singh",
    age: 8,
    status: "found",
    location: "Kiosk #09, Park Entrance",
    timestamp: "2 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_KAV_001",
    aadhaarNumber: "1234-5678-9013"
  },
  {
    id: "P010",
    name: "Unknown Teenager",
    age: 16,
    status: "missing",
    location: "Kiosk #14, College Campus",
    timestamp: "4 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_004"
  },
  // Adding more records to reach 50+
  {
    id: "P011",
    name: "Vikash Yadav",
    age: 22,
    status: "pending",
    location: "Kiosk #02, Market Square",
    timestamp: "1 hour ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_VIK_001",
    aadhaarNumber: "8901-2345-6780"
  },
  {
    id: "P012",
    name: "Sunita Gupta",
    age: 55,
    status: "contacted",
    location: "Kiosk #06, Hospital",
    timestamp: "6 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_SUN_001",
    aadhaarNumber: "3456-7890-1235"
  },
  {
    id: "P013",
    name: "Unknown Child",
    age: 10,
    status: "found",
    location: "Kiosk #13, School Zone",
    timestamp: "3 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_005"
  },
  {
    id: "P014",
    name: "Rahul Tiwari",
    age: 24,
    status: "missing",
    location: "Kiosk #10, IT Park",
    timestamp: "5 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_RAH_001",
    aadhaarNumber: "2345-6789-0125"
  },
  {
    id: "P015",
    name: "Ritu Jain",
    age: 32,
    status: "contacted",
    location: "Kiosk #04, Temple Complex",
    timestamp: "8 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_RIT_001",
    aadhaarNumber: "7890-1234-5680"
  },
  // Continue pattern for remaining records...
  {
    id: "P016",
    name: "Unknown Senior Citizen",
    age: 70,
    status: "pending",
    location: "Kiosk #16, Government Office",
    timestamp: "2 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_006"
  },
  {
    id: "P017",
    name: "Karan Verma",
    age: 15,
    status: "found",
    location: "Kiosk #01, Sports Complex",
    timestamp: "4 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_KAR_001",
    aadhaarNumber: "3456-7890-1237"
  },
  {
    id: "P018",
    name: "Swati Agarwal",
    age: 25,
    status: "missing",
    location: "Kiosk #18, University Gate",
    timestamp: "7 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_SWA_001",
    aadhaarNumber: "7890-1234-5681"
  },
  {
    id: "P019",
    name: "Unknown Young Woman",
    age: 28,
    status: "pending",
    location: "Kiosk #20, Business District",
    timestamp: "1 hour ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
    fingerprintData: "FP_UNK_007"
  },
  {
    id: "P020",
    name: "Akash Chouhan",
    age: 17,
    status: "contacted",
    location: "Kiosk #17, Cinema Hall",
    timestamp: "9 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
    fingerprintData: "FP_AKA_001",
    aadhaarNumber: "0123-4567-8904"
  }
  // Continue adding more records to reach 50+ total
];

export default {
  aadhaarDatabase,
  samagraFamilyDatabase,
  familyMembersDatabase,
  personRecords
};
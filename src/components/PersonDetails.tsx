import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import { 
  User, 
  Phone, 
  MapPin, 
  Users, 
  MessageSquare,
  Send,
  CheckCircle
} from "lucide-react";

interface FamilyMember {
  name: string;
  relation: string;
  phone: string;
}

interface PersonDetailsProps {
  personData: {
    name: string;
    age: number;
    address: string;
    aadhaarNumber?: string;
    fingerprintId?: string;
    familyMembers: FamilyMember[];
  };
  onClose?: () => void;
}

export const PersonDetails = ({ personData, onClose }: PersonDetailsProps) => {
  const { toast } = useToast();

  const handleContactFamily = async (member: FamilyMember) => {
    toast({
      title: "Contacting Family",
      description: `Sending notification to ${member.name} (${member.relation})`,
    });

    // Simulate API call
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully",
        description: `SMS/WhatsApp sent to ${member.name} at ${member.phone}`,
      });
    }, 1500);
  };

  const handleContactAllFamily = async () => {
    toast({
      title: "Contacting All Family Members",
      description: `Sending notifications to ${personData.familyMembers.length} family members`,
    });

    // Simulate bulk contact
    setTimeout(() => {
      toast({
        title: "All Messages Sent",
        description: "Notifications sent to all family members successfully",
      });
    }, 2000);
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <User className="h-5 w-5" />
            Person Found
          </div>
          <Badge variant="outline" className="text-success border-success">
            <CheckCircle className="h-3 w-3 mr-1" />
            Verified
          </Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Personal Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-lg">{personData.name}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Age</p>
              <p className="font-medium">{personData.age} years</p>
            </div>
            {personData.aadhaarNumber && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Aadhaar Number</p>
                <p className="font-mono text-sm">{personData.aadhaarNumber.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3')}</p>
              </div>
            )}
            {personData.fingerprintId && (
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Fingerprint ID</p>
                <p className="font-mono text-sm">{personData.fingerprintId}</p>
              </div>
            )}
          </div>
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              Address
            </p>
            <p className="text-sm">{personData.address}</p>
          </div>
        </div>

        <Separator />

        {/* Family Members */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold flex items-center gap-2">
              <Users className="h-4 w-4" />
              Family Members ({personData.familyMembers.length})
            </h3>
            <Button 
              onClick={handleContactAllFamily}
              size="sm"
              className="flex items-center gap-2"
            >
              <Send className="h-3 w-3" />
              Contact All
            </Button>
          </div>

          <div className="space-y-3">
            {personData.familyMembers.map((member, index) => (
              <div key={index} className="flex items-center justify-between p-3 border border-border rounded-lg bg-muted/20">
                <div className="space-y-1">
                  <p className="font-medium">{member.name}</p>
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="text-xs">
                      {member.relation}
                    </Badge>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Phone className="h-3 w-3" />
                      {member.phone}
                    </div>
                  </div>
                </div>
                <Button
                  onClick={() => handleContactFamily(member)}
                  size="sm"
                  variant="outline"
                  className="flex items-center gap-1"
                >
                  <MessageSquare className="h-3 w-3" />
                  Contact
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 pt-4">
          <Button 
            onClick={handleContactAllFamily}
            className="flex-1"
          >
            <Send className="h-4 w-4 mr-2" />
            Send Alert to All Family
          </Button>
          {onClose && (
            <Button 
              onClick={onClose}
              variant="outline"
            >
              Close
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
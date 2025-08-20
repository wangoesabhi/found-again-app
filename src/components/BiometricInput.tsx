import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { 
  Fingerprint, 
  CreditCard, 
  User, 
  CheckCircle, 
  AlertCircle,
  Search,
  Users,
  Phone
} from "lucide-react";

interface BiometricInputProps {
  onPersonFound?: (personData: any) => void;
}

export const BiometricInput = ({ onPersonFound }: BiometricInputProps) => {
  const [activeTab, setActiveTab] = useState("fingerprint");
  const [aadhaarNumber, setAadhaarNumber] = useState("");
  const [isScanning, setIsScanning] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const validateAadhaarNumber = (aadhaar: string) => {
    // Basic Aadhaar validation - 12 digits
    const aadhaarRegex = /^\d{12}$/;
    return aadhaarRegex.test(aadhaar.replace(/\s/g, ''));
  };

  const formatAadhaarNumber = (value: string) => {
    // Remove all non-digits
    const numbers = value.replace(/\D/g, '');
    // Add spaces every 4 digits
    return numbers.replace(/(\d{4})(\d{4})(\d{4})/, '$1 $2 $3');
  };

  const handleAadhaarSubmit = async () => {
    const cleanAadhaar = aadhaarNumber.replace(/\s/g, '');
    
    if (!validateAadhaarNumber(cleanAadhaar)) {
      toast({
        title: "Invalid Aadhaar Number",
        description: "Please enter a valid 12-digit Aadhaar number",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    try {
      // Simulate API call for Aadhaar lookup
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock person data - replace with actual database lookup
      const mockPersonData = {
        aadhaarNumber: cleanAadhaar,
        name: "Ram Kumar",
        age: 34,
        address: "123 Main Street, Delhi",
        familyMembers: [
          { name: "Sita Kumar", relation: "Wife", phone: "+91 9876543210" },
          { name: "Lakshman Kumar", relation: "Son", phone: "+91 9876543211" }
        ]
      };

      toast({
        title: "Person Found!",
        description: `Found ${mockPersonData.name} in Aadhaar database`,
      });

      onPersonFound?.(mockPersonData);
      
    } catch (error) {
      toast({
        title: "Lookup Failed",
        description: "Person not found in Aadhaar database",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const handleFingerprintScan = async () => {
    setIsScanning(true);
    
    try {
      // Simulate biometric scanning
      await new Promise(resolve => setTimeout(resolve, 3000));
      
      // Mock success - replace with actual biometric device integration
      const mockPersonData = {
        fingerprintId: "FP123456",
        name: "Priya Sharma",
        age: 28,
        address: "456 Garden Road, Mumbai",
        familyMembers: [
          { name: "Raj Sharma", relation: "Husband", phone: "+91 9876543212" },
          { name: "Anil Sharma", relation: "Father-in-law", phone: "+91 9876543213" }
        ]
      };

      toast({
        title: "Fingerprint Matched!",
        description: `Found ${mockPersonData.name} via biometric scan`,
      });

      onPersonFound?.(mockPersonData);
      
    } catch (error) {
      toast({
        title: "Scan Failed",
        description: "No matching fingerprint found in database",
        variant: "destructive",
      });
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Search className="h-5 w-5" />
          Person Identification
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="fingerprint" className="flex items-center gap-2">
              <Fingerprint className="h-4 w-4" />
              Biometric Scan
            </TabsTrigger>
            <TabsTrigger value="aadhaar" className="flex items-center gap-2">
              <CreditCard className="h-4 w-4" />
              Aadhaar Number
            </TabsTrigger>
          </TabsList>

          <TabsContent value="fingerprint" className="space-y-6">
            <div className="text-center space-y-4">
              <div className="relative mx-auto w-32 h-32 bg-gradient-to-br from-primary/20 to-info/20 rounded-full flex items-center justify-center border-2 border-dashed border-primary/40">
                <Fingerprint 
                  className={`h-16 w-16 ${isScanning ? 'text-primary animate-pulse' : 'text-muted-foreground'}`} 
                />
                {isScanning && (
                  <div className="absolute inset-0 rounded-full border-2 border-primary animate-ping"></div>
                )}
              </div>
              
              <div className="space-y-2">
                <h3 className="font-semibold text-lg">Place finger on scanner</h3>
                <p className="text-muted-foreground text-sm">
                  {isScanning ? "Scanning in progress..." : "Press the button below to start scanning"}
                </p>
              </div>

              <div className="flex items-center justify-center space-x-4">
                <Badge variant={isScanning ? "default" : "secondary"}>
                  {isScanning ? "Scanning..." : "Ready"}
                </Badge>
                <Badge variant="outline">Device Connected</Badge>
              </div>

              <Button 
                onClick={handleFingerprintScan}
                disabled={isScanning}
                className="w-full max-w-xs"
                size="lg"
              >
                {isScanning ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Scanning...
                  </>
                ) : (
                  <>
                    <Fingerprint className="h-4 w-4 mr-2" />
                    Start Scan
                  </>
                )}
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="aadhaar" className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="aadhaar">Aadhaar Number</Label>
                <div className="relative">
                  <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="aadhaar"
                    type="text"
                    placeholder="XXXX XXXX XXXX"
                    value={aadhaarNumber}
                    onChange={(e) => {
                      const formatted = formatAadhaarNumber(e.target.value);
                      if (formatted.replace(/\s/g, '').length <= 12) {
                        setAadhaarNumber(formatted);
                      }
                    }}
                    className="pl-10 text-lg font-mono tracking-wider"
                    maxLength={14}
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Enter the 12-digit Aadhaar number
                </p>
              </div>

              <div className="flex items-center space-x-2">
                {validateAadhaarNumber(aadhaarNumber.replace(/\s/g, '')) ? (
                  <CheckCircle className="h-4 w-4 text-success" />
                ) : (
                  <AlertCircle className="h-4 w-4 text-muted-foreground" />
                )}
                <span className="text-sm text-muted-foreground">
                  {validateAadhaarNumber(aadhaarNumber.replace(/\s/g, '')) 
                    ? "Valid Aadhaar format" 
                    : "Enter 12 digits"
                  }
                </span>
              </div>

              <Button 
                onClick={handleAadhaarSubmit}
                disabled={!validateAadhaarNumber(aadhaarNumber.replace(/\s/g, '')) || isProcessing}
                className="w-full"
                size="lg"
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Searching Database...
                  </>
                ) : (
                  <>
                    <User className="h-4 w-4 mr-2" />
                    Find Person
                  </>
                )}
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        {/* Status indicators */}
        <div className="mt-6 pt-4 border-t border-border">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground">Database Online</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground">Aadhaar Service</p>
            </div>
            <div className="space-y-1">
              <div className="flex items-center justify-center">
                <div className="w-2 h-2 bg-success rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground">Family DB</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
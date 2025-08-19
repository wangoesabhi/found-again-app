import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { User, MapPin, Clock, Phone, Eye } from "lucide-react";

interface Person {
  id: string;
  name: string;
  age?: number;
  status: "missing" | "found" | "contacted" | "pending";
  location: string;
  timestamp: string;
  hasAadhaar: boolean;
  hasFamilyDetails: boolean;
  imageUrl?: string;
}

interface PersonCardProps {
  person: Person;
  onViewDetails: (id: string) => void;
  onContact: (id: string) => void;
}

export function PersonCard({ person, onViewDetails, onContact }: PersonCardProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case "missing":
        return "bg-missing text-missing-foreground";
      case "found":
        return "bg-found text-found-foreground";
      case "contacted":
        return "bg-contacted text-contacted-foreground";
      case "pending":
        return "bg-pending text-pending-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "missing":
        return "Missing";
      case "found":
        return "Found";
      case "contacted":
        return "Family Contacted";
      case "pending":
        return "Pending Contact";
      default:
        return "Unknown";
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow duration-200">
      <CardContent className="p-4">
        <div className="flex items-start justify-between mb-3">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
              {person.imageUrl ? (
                <img src={person.imageUrl} alt={person.name} className="w-12 h-12 rounded-full object-cover" />
              ) : (
                <User className="h-6 w-6 text-muted-foreground" />
              )}
            </div>
            <div>
              <h3 className="font-semibold text-foreground">{person.name}</h3>
              {person.age && (
                <p className="text-sm text-muted-foreground">Age: {person.age}</p>
              )}
            </div>
          </div>
          <Badge className={getStatusColor(person.status)}>
            {getStatusText(person.status)}
          </Badge>
        </div>

        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="h-4 w-4 mr-2" />
            {person.location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Clock className="h-4 w-4 mr-2" />
            {person.timestamp}
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <Badge variant={person.hasAadhaar ? "default" : "secondary"} className="text-xs">
              {person.hasAadhaar ? "Aadhaar Found" : "No Aadhaar"}
            </Badge>
            <Badge variant={person.hasFamilyDetails ? "default" : "secondary"} className="text-xs">
              {person.hasFamilyDetails ? "Family Details" : "No Family Info"}
            </Badge>
          </div>
        </div>

        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(person.id)}
            className="flex-1"
          >
            <Eye className="h-4 w-4 mr-2" />
            View Details
          </Button>
          {person.status === "pending" && (
            <Button
              size="sm"
              onClick={() => onContact(person.id)}
              className="flex-1"
            >
              <Phone className="h-4 w-4 mr-2" />
              Contact Family
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
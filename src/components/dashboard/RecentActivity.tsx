import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, Users, Phone, MessageSquare, AlertTriangle } from "lucide-react";

interface ActivityItem {
  id: string;
  type: "missing" | "found" | "contacted" | "alert";
  message: string;
  timestamp: string;
  location?: string;
}

const activities: ActivityItem[] = [
  {
    id: "1",
    type: "missing",
    message: "New missing person reported - John Doe",
    timestamp: "2 minutes ago",
    location: "Kiosk #12, Central Station"
  },
  {
    id: "2",
    type: "contacted",
    message: "Family successfully contacted for Sarah Wilson",
    timestamp: "15 minutes ago",
    location: "Kiosk #08, Mall Plaza"
  },
  {
    id: "3",
    type: "found",
    message: "Missing person located - Michael Brown",
    timestamp: "32 minutes ago",
    location: "Kiosk #15, Airport Terminal"
  },
  {
    id: "4",
    type: "alert",
    message: "Failed to contact family - Police notified",
    timestamp: "1 hour ago",
    location: "Kiosk #03, Bus Station"
  },
  {
    id: "5",
    type: "contacted",
    message: "AI called family members for Emma Davis",
    timestamp: "2 hours ago",
    location: "Kiosk #07, Shopping Center"
  }
];

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "missing":
        return <Users className="h-4 w-4" />;
      case "found":
        return <Users className="h-4 w-4" />;
      case "contacted":
        return <Phone className="h-4 w-4" />;
      case "alert":
        return <AlertTriangle className="h-4 w-4" />;
      default:
        return <MessageSquare className="h-4 w-4" />;
    }
  };

  const getActivityVariant = (type: string) => {
    switch (type) {
      case "missing":
        return "secondary";
      case "found":
        return "default";
      case "contacted":
        return "default";
      case "alert":
        return "destructive";
      default:
        return "secondary";
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5" />
          Recent Activity
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start space-x-3 pb-3 border-b border-border last:border-0 last:pb-0">
              <div className="flex-shrink-0 mt-1">
                <Badge variant={getActivityVariant(activity.type)} className="flex items-center gap-1">
                  {getActivityIcon(activity.type)}
                </Badge>
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground">{activity.message}</p>
                {activity.location && (
                  <p className="text-xs text-muted-foreground mt-1">{activity.location}</p>
                )}
                <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "@/components/dashboard/StatsCard";
import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { PersonCard } from "@/components/dashboard/PersonCard";
import { 
  Users, 
  UserCheck, 
  Phone, 
  AlertTriangle, 
  Search, 
  Filter,
  MapPin,
  Activity,
  Brain,
  Shield
} from "lucide-react";

// Mock data for demonstration
const mockPersons = [
  {
    id: "1",
    name: "John Doe",
    age: 45,
    status: "missing" as const,
    location: "Kiosk #12, Central Station",
    timestamp: "2 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
  },
  {
    id: "2",
    name: "Sarah Wilson",
    age: 32,
    status: "contacted" as const,
    location: "Kiosk #08, Mall Plaza",
    timestamp: "4 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
  },
  {
    id: "3",
    name: "Unknown Person #1",
    status: "pending" as const,
    location: "Kiosk #15, Airport Terminal",
    timestamp: "6 hours ago",
    hasAadhaar: false,
    hasFamilyDetails: false,
  },
  {
    id: "4",
    name: "Michael Brown",
    age: 28,
    status: "found" as const,
    location: "Kiosk #03, Bus Station",
    timestamp: "8 hours ago",
    hasAadhaar: true,
    hasFamilyDetails: true,
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<string>("all");

  const filteredPersons = mockPersons.filter(person => {
    const matchesSearch = person.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || person.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleViewDetails = (id: string) => {
    console.log("View details for person:", id);
  };

  const handleContact = (id: string) => {
    console.log("Contact family for person:", id);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-primary" />
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-info bg-clip-text text-transparent">
                  Lost & Found Management System
                </h1>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="flex items-center gap-2">
                <Activity className="h-4 w-4" />
                System Active
              </Badge>
              <Badge variant="outline" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                AI Monitoring
              </Badge>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-6 py-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <StatsCard
            title="Missing Persons"
            value="24"
            icon={Users}
            variant="missing"
            trend={{ value: "+3 today", isPositive: false }}
          />
          <StatsCard
            title="Successfully Found"
            value="156"
            icon={UserCheck}
            variant="found"
            trend={{ value: "+12 this week", isPositive: true }}
          />
          <StatsCard
            title="Family Contacted"
            value="189"
            icon={Phone}
            variant="contacted"
            trend={{ value: "+8 today", isPositive: true }}
          />
          <StatsCard
            title="Pending Cases"
            value="7"
            icon={AlertTriangle}
            variant="pending"
            trend={{ value: "-2 today", isPositive: true }}
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search and Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Active Cases
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4 mb-6">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        placeholder="Search by name or ID..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant={statusFilter === "all" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter("all")}
                    >
                      All
                    </Button>
                    <Button
                      variant={statusFilter === "missing" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter("missing")}
                    >
                      Missing
                    </Button>
                    <Button
                      variant={statusFilter === "found" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter("found")}
                    >
                      Found
                    </Button>
                    <Button
                      variant={statusFilter === "pending" ? "default" : "outline"}
                      size="sm"
                      onClick={() => setStatusFilter("pending")}
                    >
                      Pending
                    </Button>
                  </div>
                </div>

                {/* Person Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredPersons.map((person) => (
                    <PersonCard
                      key={person.id}
                      person={person}
                      onViewDetails={handleViewDetails}
                      onContact={handleContact}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Kiosk Network Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    { id: "K001", name: "Central Station", status: "online", count: 3 },
                    { id: "K002", name: "Mall Plaza", status: "online", count: 1 },
                    { id: "K003", name: "Airport Terminal", status: "online", count: 2 },
                    { id: "K004", name: "Bus Station", status: "maintenance", count: 0 },
                  ].map((kiosk) => (
                    <div key={kiosk.id} className="p-3 border border-border rounded-lg">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">{kiosk.id}</span>
                        <Badge
                          variant={kiosk.status === "online" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {kiosk.status}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground mb-1">{kiosk.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {kiosk.count} active cases
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <RecentActivity />

            {/* AI Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Brain className="h-5 w-5" />
                  AI System Status
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Facial Recognition</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Voice Analysis</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Family Contact AI</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">SMS/WhatsApp Service</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">Police Integration</span>
                    <Badge variant="default">Active</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Add Manual Entry
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Phone className="h-4 w-4 mr-2" />
                    Bulk Contact Families
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <AlertTriangle className="h-4 w-4 mr-2" />
                    Generate Report
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
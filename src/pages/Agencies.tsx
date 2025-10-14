import Navbar from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Building2, MapPin, Users, Phone, Mail, Search, Plus } from "lucide-react";

const Agencies = () => {
  const agencies = [
    {
      name: "State Welfare Department - UP",
      type: "State Agency",
      location: "Lucknow, Uttar Pradesh",
      projects: 8,
      status: "Active",
      contact: "+91 522 1234567",
      email: "welfare.up@gov.in"
    },
    {
      name: "Central Social Justice Ministry",
      type: "Central Agency",
      location: "New Delhi",
      projects: 24,
      status: "Active",
      contact: "+91 11 2341234",
      email: "socialjustice@nic.in"
    },
    {
      name: "Bihar Tribal Development Corp",
      type: "Executing Agency",
      location: "Patna, Bihar",
      projects: 5,
      status: "Active",
      contact: "+91 612 9876543",
      email: "tribal.bihar@gov.in"
    },
    {
      name: "MP Education Infrastructure Ltd",
      type: "Executing Agency",
      location: "Bhopal, Madhya Pradesh",
      projects: 6,
      status: "Under Review",
      contact: "+91 755 4567890",
      email: "edu.infra@mp.gov.in"
    },
    {
      name: "Rajasthan Development Authority",
      type: "State Agency",
      location: "Jaipur, Rajasthan",
      projects: 7,
      status: "Active",
      contact: "+91 141 3456789",
      email: "dev.raj@gov.in"
    },
    {
      name: "Maharashtra Housing Board",
      type: "Executing Agency",
      location: "Mumbai, Maharashtra",
      projects: 4,
      status: "Active",
      contact: "+91 22 87654321",
      email: "housing.mh@gov.in"
    }
  ];

  const statusColors: Record<string, string> = {
    "Active": "bg-secondary text-white",
    "Under Review": "bg-accent text-foreground"
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-foreground mb-2">Agencies</h1>
            <p className="text-muted-foreground">Manage executing and coordinating agencies</p>
          </div>
          <Button className="gradient-primary text-white border-0">
            <Plus className="h-4 w-4 mr-2" />
            Add Agency
          </Button>
        </div>

        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input 
            placeholder="Search agencies..." 
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {agencies.map((agency, index) => (
            <Card key={index} className="hover:shadow-lg transition-all border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building2 className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-lg mb-2">{agency.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{agency.type}</p>
                    </div>
                  </div>
                  <Badge className={statusColors[agency.status]}>{agency.status}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 flex-shrink-0" />
                  <span>{agency.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users className="h-4 w-4 flex-shrink-0" />
                  <span>{agency.projects} Active Projects</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>{agency.contact}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span className="truncate">{agency.email}</span>
                </div>
                <div className="pt-2">
                  <Button variant="outline" className="w-full">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Agencies;

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { CalendarDays, MapPin, Users } from "lucide-react";

interface ProjectCardProps {
  name: string;
  type: string;
  location: string;
  progress: number;
  status: "On Track" | "At Risk" | "Delayed";
  team: number;
  deadline: string;
}

const ProjectCard = ({ name, type, location, progress, status, team, deadline }: ProjectCardProps) => {
  const statusColors = {
    "On Track": "bg-secondary text-white",
    "At Risk": "bg-accent text-foreground",
    "Delayed": "bg-destructive text-white"
  };

  return (
    <Card className="hover:shadow-lg transition-all border-border">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg mb-2">{name}</CardTitle>
            <p className="text-sm text-muted-foreground">{type}</p>
          </div>
          <Badge className={statusColors[status]}>{status}</Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold text-foreground">{progress}%</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="h-4 w-4" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Users className="h-4 w-4" />
            <span>{team} Team Members</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <CalendarDays className="h-4 w-4" />
            <span>Due: {deadline}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;

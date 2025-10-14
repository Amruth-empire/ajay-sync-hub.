import { LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  trendUp?: boolean;
}

const StatCard = ({ title, value, icon: Icon, trend, trendUp }: StatCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all border-border">
      <CardContent className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="p-3 gradient-primary rounded-lg">
            <Icon className="h-6 w-6 text-white" />
          </div>
          {trend && (
            <span className={`text-sm font-medium ${trendUp ? 'text-secondary' : 'text-destructive'}`}>
              {trend}
            </span>
          )}
        </div>
        <h3 className="text-2xl font-bold text-foreground mb-1">{value}</h3>
        <p className="text-muted-foreground text-sm">{title}</p>
      </CardContent>
    </Card>
  );
};

export default StatCard;

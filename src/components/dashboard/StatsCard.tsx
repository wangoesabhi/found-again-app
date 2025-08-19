import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: {
    value: string;
    isPositive: boolean;
  };
  variant?: "default" | "missing" | "found" | "pending" | "contacted";
}

export function StatsCard({ title, value, icon: Icon, trend, variant = "default" }: StatsCardProps) {
  const getVariantStyles = () => {
    switch (variant) {
      case "missing":
        return "border-missing/20 bg-gradient-to-br from-missing/5 to-missing/10";
      case "found":
        return "border-found/20 bg-gradient-to-br from-found/5 to-found/10";
      case "pending":
        return "border-pending/20 bg-gradient-to-br from-pending/5 to-pending/10";
      case "contacted":
        return "border-contacted/20 bg-gradient-to-br from-contacted/5 to-contacted/10";
      default:
        return "border-border bg-card";
    }
  };

  const getIconStyles = () => {
    switch (variant) {
      case "missing":
        return "text-missing";
      case "found":
        return "text-found";
      case "pending":
        return "text-pending";
      case "contacted":
        return "text-contacted";
      default:
        return "text-primary";
    }
  };

  return (
    <Card className={`transition-all duration-200 hover:shadow-lg ${getVariantStyles()}`}>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">{title}</CardTitle>
        <Icon className={`h-4 w-4 ${getIconStyles()}`} />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className={`text-xs ${trend.isPositive ? 'text-found' : 'text-missing'}`}>
            {trend.isPositive ? '↗' : '↘'} {trend.value}
          </p>
        )}
      </CardContent>
    </Card>
  );
}
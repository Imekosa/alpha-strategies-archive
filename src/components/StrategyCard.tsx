import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Strategy } from "@/data/strategies";
import { TrendingUp, TrendingDown, Minus, Shield } from "lucide-react";

interface StrategyCardProps {
  strategy: Strategy;
  onClick: () => void;
}

export const StrategyCard = ({ strategy, onClick }: StrategyCardProps) => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'bullish':
        return <TrendingUp className="h-4 w-4 text-chart-positive" />;
      case 'bearish':
        return <TrendingDown className="h-4 w-4 text-chart-negative" />;
      case 'neutral':
        return <Minus className="h-4 w-4 text-muted-foreground" />;
      case 'hedging':
        return <Shield className="h-4 w-4 text-primary" />;
      default:
        return <TrendingUp className="h-4 w-4 text-primary" />;
    }
  };

  const getRiskColor = (risk: string) => {
    switch (risk) {
      case 'low':
        return 'bg-chart-positive/10 text-chart-positive border-chart-positive/20';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'high':
        return 'bg-chart-negative/10 text-chart-negative border-chart-negative/20';
      default:
        return 'bg-muted text-muted-foreground';
    }
  };

  return (
    <Card 
      className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:border-primary/20 group"
      onClick={onClick}
    >
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center space-y-4">
          {/* Strategy Icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
            <svg className="w-10 h-10 text-primary" viewBox="0 0 100 100" fill="none">
              <path 
                d="M20 60 Q35 40 50 60 T80 40" 
                stroke="currentColor" 
                strokeWidth="3" 
                fill="none"
                strokeLinecap="round"
              />
              <circle cx="20" cy="60" r="3" fill="currentColor" />
              <circle cx="50" cy="60" r="3" fill="currentColor" />
              <circle cx="80" cy="40" r="3" fill="currentColor" />
            </svg>
          </div>
          
          {/* Strategy Name */}
          <div>
            <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
              {strategy.name}
            </h3>
          </div>
          
          {/* Category and Risk Badges */}
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <Badge variant="outline" className="text-xs">
              {getCategoryIcon(strategy.category)}
              <span className="ml-1 capitalize">{strategy.category}</span>
            </Badge>
            <Badge variant="outline" className={`text-xs ${getRiskColor(strategy.riskLevel)}`}>
              {strategy.riskLevel} risk
            </Badge>
          </div>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
            {strategy.description}
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
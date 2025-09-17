import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { StrategyCard } from "./StrategyCard";
import { strategies, getStrategiesByCategory } from "@/data/strategies";
import { useNavigate } from "react-router-dom";
import { TrendingUp, TrendingDown, Minus, Shield } from "lucide-react";

export const StrategyTabs = () => {
  const navigate = useNavigate();
  
  const handleStrategyClick = (strategySlug: string) => {
    navigate(`/strategies/${strategySlug}`);
  };

  const getTabIcon = (category: string) => {
    switch (category) {
      case 'bullish':
        return <TrendingUp className="h-4 w-4" />;
      case 'bearish':
        return <TrendingDown className="h-4 w-4" />;
      case 'neutral':
        return <Minus className="h-4 w-4" />;
      case 'hedging':
        return <Shield className="h-4 w-4" />;
      default:
        return null;
    }
  };

  return (
    <Tabs defaultValue="bullish" className="w-full">
      <div className="flex justify-center mb-8">
        <TabsList className="grid w-full max-w-lg grid-cols-4 bg-muted/50">
          <TabsTrigger value="bullish" className="flex items-center gap-2 text-xs">
            {getTabIcon('bullish')}
            <span className="hidden sm:inline">Bullish</span>
          </TabsTrigger>
          <TabsTrigger value="bearish" className="flex items-center gap-2 text-xs">
            {getTabIcon('bearish')}
            <span className="hidden sm:inline">Bearish</span>
          </TabsTrigger>
          <TabsTrigger value="neutral" className="flex items-center gap-2 text-xs">
            {getTabIcon('neutral')}
            <span className="hidden sm:inline">Neutral</span>
          </TabsTrigger>
          <TabsTrigger value="hedging" className="flex items-center gap-2 text-xs">
            {getTabIcon('hedging')}
            <span className="hidden sm:inline">Hedging</span>
          </TabsTrigger>
        </TabsList>
      </div>

      <TabsContent value="bullish">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getStrategiesByCategory('bullish').map((strategy) => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
              onClick={() => handleStrategyClick(strategy.slug)}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="bearish">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getStrategiesByCategory('bearish').map((strategy) => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
              onClick={() => handleStrategyClick(strategy.slug)}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="neutral">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getStrategiesByCategory('neutral').map((strategy) => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
              onClick={() => handleStrategyClick(strategy.slug)}
            />
          ))}
        </div>
      </TabsContent>

      <TabsContent value="hedging">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {getStrategiesByCategory('hedging').map((strategy) => (
            <StrategyCard
              key={strategy.id}
              strategy={strategy}
              onClick={() => handleStrategyClick(strategy.slug)}
            />
          ))}
        </div>
      </TabsContent>
    </Tabs>
  );
};
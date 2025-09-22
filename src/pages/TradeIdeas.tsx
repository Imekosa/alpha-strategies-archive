import { useState } from "react";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { TrendingUp, TrendingDown, Minus, Shield, Search, Filter, Star, Clock, DollarSign, Target, AlertTriangle } from "lucide-react";

interface TradeIdea {
  id: string;
  symbol: string;
  strategy: string;
  category: 'bullish' | 'bearish' | 'neutral' | 'hedging';
  riskLevel: 'low' | 'medium' | 'high';
  premium: number;
  maxProfit: number;
  maxLoss: number;
  probability: number;
  daysToExpiration: number;
  impliedVolatility: number;
  delta: number;
  theta: number;
  vega: number;
  gamma: number;
  breakeven: number;
  currentPrice: number;
  targetPrice: number;
  stopLoss: number;
  entryDate: string;
  expirationDate: string;
  description: string;
  tags: string[];
  isFavorite: boolean;
  isActive: boolean;
}

const mockTradeIdeas: TradeIdea[] = [
  {
    id: "1",
    symbol: "AAPL",
    strategy: "Iron Condor",
    category: "neutral",
    riskLevel: "medium",
    premium: 250,
    maxProfit: 250,
    maxLoss: 750,
    probability: 68,
    daysToExpiration: 21,
    impliedVolatility: 28.5,
    delta: 0.05,
    theta: -2.1,
    vega: 15.2,
    gamma: 0.02,
    breakeven: 185.5,
    currentPrice: 187.25,
    targetPrice: 185,
    stopLoss: 175,
    entryDate: "2024-01-15",
    expirationDate: "2024-02-16",
    description: "Neutral strategy expecting AAPL to trade sideways between $180-$190",
    tags: ["high-probability", "earnings-play", "tech"],
    isFavorite: false,
    isActive: true
  },
  {
    id: "2",
    symbol: "SPY",
    strategy: "Bull Put Spread",
    category: "bullish",
    riskLevel: "low",
    premium: 150,
    maxProfit: 150,
    maxLoss: 350,
    probability: 75,
    daysToExpiration: 14,
    impliedVolatility: 22.1,
    delta: 0.25,
    theta: -1.8,
    vega: 12.5,
    gamma: 0.03,
    breakeven: 465,
    currentPrice: 470.50,
    targetPrice: 475,
    stopLoss: 460,
    entryDate: "2024-01-18",
    expirationDate: "2024-02-02",
    description: "Bullish strategy on SPY with strong support at $465",
    tags: ["index-play", "support-level", "high-probability"],
    isFavorite: true,
    isActive: true
  },
  {
    id: "3",
    symbol: "TSLA",
    strategy: "Long Call",
    category: "bullish",
    riskLevel: "high",
    premium: 850,
    maxProfit: 999999,
    maxLoss: 850,
    probability: 45,
    daysToExpiration: 35,
    impliedVolatility: 65.2,
    delta: 0.65,
    theta: -3.2,
    vega: 28.5,
    gamma: 0.08,
    breakeven: 258.50,
    currentPrice: 250.75,
    targetPrice: 275,
    stopLoss: 240,
    entryDate: "2024-01-12",
    expirationDate: "2024-02-23",
    description: "Bullish bet on TSLA ahead of earnings announcement",
    tags: ["earnings-play", "high-volatility", "momentum"],
    isFavorite: false,
    isActive: true
  },
  {
    id: "4",
    symbol: "QQQ",
    strategy: "Iron Butterfly",
    category: "neutral",
    riskLevel: "medium",
    premium: 180,
    maxProfit: 180,
    maxLoss: 320,
    probability: 62,
    daysToExpiration: 28,
    impliedVolatility: 25.8,
    delta: 0.02,
    theta: -1.5,
    vega: 18.2,
    gamma: 0.01,
    breakeven: 385,
    currentPrice: 385.20,
    targetPrice: 385,
    stopLoss: 380,
    entryDate: "2024-01-10",
    expirationDate: "2024-02-09",
    description: "Neutral strategy expecting QQQ to stay near current levels",
    tags: ["tech-index", "range-bound", "theta-play"],
    isFavorite: true,
    isActive: true
  },
  {
    id: "5",
    symbol: "NVDA",
    strategy: "Short Put",
    category: "bullish",
    riskLevel: "high",
    premium: 420,
    maxProfit: 420,
    maxLoss: 999999,
    probability: 70,
    daysToExpiration: 21,
    impliedVolatility: 58.3,
    delta: -0.35,
    theta: 2.8,
    vega: -22.1,
    gamma: -0.05,
    breakeven: 575.80,
    currentPrice: 580.25,
    targetPrice: 590,
    stopLoss: 570,
    entryDate: "2024-01-16",
    expirationDate: "2024-02-16",
    description: "Bullish strategy on NVDA with strong technical support",
    tags: ["ai-play", "tech-leader", "support-level"],
    isFavorite: false,
    isActive: true
  },
  {
    id: "6",
    symbol: "IWM",
    strategy: "Bear Call Spread",
    category: "bearish",
    riskLevel: "medium",
    premium: 125,
    maxProfit: 125,
    maxLoss: 375,
    probability: 65,
    daysToExpiration: 18,
    impliedVolatility: 31.2,
    delta: -0.20,
    theta: 1.2,
    vega: -14.8,
    gamma: -0.04,
    breakeven: 201.25,
    currentPrice: 198.50,
    targetPrice: 195,
    stopLoss: 205,
    entryDate: "2024-01-14",
    expirationDate: "2024-02-02",
    description: "Bearish strategy on small caps expecting weakness",
    tags: ["small-cap", "resistance-level", "macro-play"],
    isFavorite: false,
    isActive: true
  }
];

export const TradeIdeas = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedRisk, setSelectedRisk] = useState<string>("all");
  const [selectedStrategy, setSelectedStrategy] = useState<string>("all");
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [showActiveOnly, setShowActiveOnly] = useState(true);

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

  const filteredIdeas = mockTradeIdeas.filter(idea => {
    const matchesSearch = idea.symbol.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.strategy.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || idea.category === selectedCategory;
    const matchesRisk = selectedRisk === "all" || idea.riskLevel === selectedRisk;
    const matchesStrategy = selectedStrategy === "all" || idea.strategy === selectedStrategy;
    const matchesFavorites = !showFavoritesOnly || idea.isFavorite;
    const matchesActive = !showActiveOnly || idea.isActive;

    return matchesSearch && matchesCategory && matchesRisk && matchesStrategy && matchesFavorites && matchesActive;
  });

  const formatCurrency = (amount: number) => {
    if (amount >= 999999) return "Unlimited";
    return `$${amount.toLocaleString()}`;
  };

  const formatPercentage = (value: number) => `${value}%`;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm">
            📣 Our 1st LIVE event is scheduled! Friday, October 3rd, in New York City! 👉{" "}
            <a href="#" className="underline hover:no-underline">Learn more</a>
          </span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">Home</a>
            <span>›</span>
            <span className="text-foreground">Trade Ideas</span>
          </div>
        </nav>

        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Trade Ideas</h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-3xl">
            Discover curated options trading opportunities with detailed analysis, risk metrics, and probability assessments.
          </p>
        </div>

        {/* Filters Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filters
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-6 gap-4 mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search symbols, strategies..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  <SelectItem value="bullish">Bullish</SelectItem>
                  <SelectItem value="bearish">Bearish</SelectItem>
                  <SelectItem value="neutral">Neutral</SelectItem>
                  <SelectItem value="hedging">Hedging</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedRisk} onValueChange={setSelectedRisk}>
                <SelectTrigger>
                  <SelectValue placeholder="Risk Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Risk Levels</SelectItem>
                  <SelectItem value="low">Low Risk</SelectItem>
                  <SelectItem value="medium">Medium Risk</SelectItem>
                  <SelectItem value="high">High Risk</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedStrategy} onValueChange={setSelectedStrategy}>
                <SelectTrigger>
                  <SelectValue placeholder="Strategy" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Strategies</SelectItem>
                  <SelectItem value="Iron Condor">Iron Condor</SelectItem>
                  <SelectItem value="Bull Put Spread">Bull Put Spread</SelectItem>
                  <SelectItem value="Long Call">Long Call</SelectItem>
                  <SelectItem value="Iron Butterfly">Iron Butterfly</SelectItem>
                  <SelectItem value="Short Put">Short Put</SelectItem>
                  <SelectItem value="Bear Call Spread">Bear Call Spread</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="favorites"
                  checked={showFavoritesOnly}
                  onCheckedChange={setShowFavoritesOnly}
                />
                <label htmlFor="favorites" className="text-sm font-medium">
                  Favorites only
                </label>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="active"
                  checked={showActiveOnly}
                  onCheckedChange={setShowActiveOnly}
                />
                <label htmlFor="active" className="text-sm font-medium">
                  Active only
                </label>
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              Showing {filteredIdeas.length} of {mockTradeIdeas.length} trade ideas
            </div>
          </CardContent>
        </Card>

        {/* Trade Ideas Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredIdeas.map((idea) => (
            <Card key={idea.id} className="hover:shadow-lg transition-all duration-200 hover:border-primary/20">
              <CardHeader className="pb-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-xl font-bold">{idea.symbol}</h3>
                      <Badge variant="outline" className="text-xs">
                        {getCategoryIcon(idea.category)}
                        <span className="ml-1 capitalize">{idea.category}</span>
                      </Badge>
                      {idea.isFavorite && <Star className="h-4 w-4 text-yellow-500 fill-current" />}
                    </div>
                    <p className="text-lg font-semibold text-primary">{idea.strategy}</p>
                    <p className="text-sm text-muted-foreground">{idea.description}</p>
                  </div>
                  <Badge variant="outline" className={`text-xs ${getRiskColor(idea.riskLevel)}`}>
                    {idea.riskLevel} risk
                  </Badge>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold text-chart-positive">
                      {formatCurrency(idea.maxProfit)}
                    </div>
                    <div className="text-xs text-muted-foreground">Max Profit</div>
                  </div>
                  <div className="text-center p-3 bg-muted/20 rounded-lg">
                    <div className="text-lg font-bold text-chart-negative">
                      {formatCurrency(idea.maxLoss)}
                    </div>
                    <div className="text-xs text-muted-foreground">Max Loss</div>
                  </div>
                </div>

                {/* Probability and Premium */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-primary" />
                    <div>
                      <div className="font-semibold">{formatPercentage(idea.probability)}</div>
                      <div className="text-xs text-muted-foreground">Probability</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-chart-positive" />
                    <div>
                      <div className="font-semibold">{formatCurrency(idea.premium)}</div>
                      <div className="text-xs text-muted-foreground">Premium</div>
                    </div>
                  </div>
                </div>

                {/* Time and Price Info */}
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{idea.daysToExpiration}d</div>
                      <div className="text-xs text-muted-foreground">DTE</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    <div>
                      <div className="font-medium">{formatPercentage(idea.impliedVolatility)}</div>
                      <div className="text-xs text-muted-foreground">IV</div>
                    </div>
                  </div>
                </div>

                {/* Current vs Target Price */}
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Current:</span>
                    <span className="font-medium">${idea.currentPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Target:</span>
                    <span className="font-medium">${idea.targetPrice}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Breakeven:</span>
                    <span className="font-medium">${idea.breakeven}</span>
                  </div>
                </div>

                {/* Greeks */}
                <div className="grid grid-cols-4 gap-2 text-xs">
                  <div className="text-center">
                    <div className="font-medium">{idea.delta.toFixed(2)}</div>
                    <div className="text-muted-foreground">Δ</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{idea.theta.toFixed(1)}</div>
                    <div className="text-muted-foreground">Θ</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{idea.vega.toFixed(1)}</div>
                    <div className="text-muted-foreground">ν</div>
                  </div>
                  <div className="text-center">
                    <div className="font-medium">{idea.gamma.toFixed(2)}</div>
                    <div className="text-muted-foreground">Γ</div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1">
                  {idea.tags.map((tag, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 pt-2">
                  <Button className="flex-1" size="sm">
                    View Details
                  </Button>
                  <Button variant="outline" size="sm">
                    Add to Watchlist
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredIdeas.length === 0 && (
          <Card className="text-center py-12">
            <CardContent>
              <div className="text-muted-foreground mb-4">
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <h3 className="text-lg font-semibold mb-2">No trade ideas found</h3>
                <p>Try adjusting your filters or search terms to find more trade ideas.</p>
              </div>
              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedRisk("all");
                setSelectedStrategy("all");
                setShowFavoritesOnly(false);
              }}>
                Clear Filters
              </Button>
            </CardContent>
          </Card>
        )}
      </main>
    </div>
  );
};
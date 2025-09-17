import { useParams, Navigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { getStrategyBySlug } from "@/data/strategies";
import { Share2, Twitter, Facebook, Linkedin, TrendingUp, TrendingDown, Minus, Shield, CheckCircle } from "lucide-react";

export const StrategyDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug) {
    return <Navigate to="/options-strategies" replace />;
  }

  const strategy = getStrategyBySlug(slug);
  
  if (!strategy) {
    return <Navigate to="/options-strategies" replace />;
  }

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
            <a href="/education" className="hover:text-foreground">Education</a>
            <span>›</span>
            <a href="/options-strategies" className="hover:text-foreground">Options Strategies</a>
            <span>›</span>
            <span className="text-foreground">{strategy.name}</span>
          </div>
        </nav>

        {/* Header Section */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <h1 className="text-4xl md:text-5xl font-bold">{strategy.name}</h1>
            <Badge variant="outline" className="bg-success/10 text-success border-success/20">
              <CheckCircle className="h-3 w-3 mr-1" />
              Approved for autotrading
            </Badge>
          </div>
          
          <p className="text-xl text-muted-foreground mb-6 max-w-4xl">
            {strategy.description}
          </p>

          {/* Strategy Info */}
          <div className="flex items-center gap-4 mb-6">
            <Badge variant="outline" className="text-sm">
              {getCategoryIcon(strategy.category)}
              <span className="ml-1 capitalize">{strategy.category}</span>
            </Badge>
            <Badge variant="outline" className={`text-sm ${getRiskColor(strategy.riskLevel)}`}>
              {strategy.riskLevel} risk
            </Badge>
            <Badge variant="outline" className="text-sm">
              {strategy.complexity}
            </Badge>
          </div>
          
          {/* Action Buttons */}
          <div className="flex items-center gap-4">
            <Button variant="outline" size="sm">
              <a href="#" className="text-sm">View risk disclosures</a>
            </Button>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="sm">
                <Share2 className="h-4 w-4 mr-1" />
                Share
              </Button>
              <Button variant="ghost" size="sm">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Linkedin className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Strategy Content Tabs */}
        <Tabs defaultValue="learn" className="w-full">
          <TabsList className="grid w-full max-w-md grid-cols-3 mb-8">
            <TabsTrigger value="learn">Learn</TabsTrigger>
            <TabsTrigger value="stats">Stats</TabsTrigger>
            <TabsTrigger value="templates">Templates</TabsTrigger>
          </TabsList>

          <TabsContent value="learn">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{strategy.name}</CardTitle>
                    <h3 className="text-lg font-semibold text-muted-foreground">Overview</h3>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground mb-6">
                      {strategy.description}
                    </p>
                    
                    <h4 className="text-lg font-semibold mb-4">How it works</h4>
                    <p className="text-muted-foreground mb-6">
                      This strategy involves specific option positions that align with your market outlook. 
                      The risk and reward characteristics make it suitable for traders who have a {strategy.category} 
                      market view and {strategy.riskLevel} risk tolerance.
                    </p>

                    <h4 className="text-lg font-semibold mb-4">Market Outlook</h4>
                    <p className="text-muted-foreground mb-6">
                      This strategy performs best when the underlying asset moves in alignment with your {strategy.category} bias. 
                      It's important to consider the time decay and volatility impacts on the position.
                    </p>

                    <h4 className="text-lg font-semibold mb-4">Risk Management</h4>
                    <p className="text-muted-foreground mb-6">
                      As a {strategy.riskLevel} risk strategy, proper position sizing and exit planning are crucial. 
                      Consider your overall portfolio allocation and risk tolerance when implementing this strategy.
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Payoff Diagram */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Payoff Diagram</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="w-full h-48 bg-muted/20 rounded-lg flex items-center justify-center mb-4">
                      <svg className="w-full h-full p-4" viewBox="0 0 300 200">
                        {/* Grid lines */}
                        <defs>
                          <pattern id="grid" width="30" height="20" patternUnits="userSpaceOnUse">
                            <path d="M 30 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>
                          </pattern>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#grid)" />
                        
                        {/* Axes */}
                        <line x1="20" y1="180" x2="280" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                        <line x1="150" y1="20" x2="150" y2="180" stroke="currentColor" strokeWidth="2" opacity="0.6"/>
                        
                        {/* Strategy line - example curve */}
                        <path 
                          d="M20 160 Q80 140 150 100 T280 60" 
                          fill="none" 
                          stroke="hsl(var(--chart-positive))" 
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        
                        {/* Profit/Loss areas */}
                        <text x="30" y="40" fontSize="12" fill="hsl(var(--chart-positive))">Profit</text>
                        <text x="30" y="170" fontSize="12" fill="hsl(var(--chart-negative))">Loss</text>
                        
                        {/* Labels */}
                        <text x="250" y="195" fontSize="10" fill="currentColor" opacity="0.7">Stock Price</text>
                        <text x="5" y="30" fontSize="10" fill="currentColor" opacity="0.7">P/L</text>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      This diagram shows the potential profit and loss at expiration based on different stock prices.
                    </p>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Risk Level:</span>
                      <Badge variant="outline" className={`text-xs ${getRiskColor(strategy.riskLevel)}`}>
                        {strategy.riskLevel}
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Complexity:</span>
                      <span className="text-sm font-medium capitalize">{strategy.complexity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-muted-foreground">Category:</span>
                      <span className="text-sm font-medium capitalize">{strategy.category}</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="stats">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">68%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">$125</div>
                    <div className="text-sm text-muted-foreground">Avg Profit</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-chart-negative">$85</div>
                    <div className="text-sm text-muted-foreground">Avg Loss</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">1.47</div>
                    <div className="text-sm text-muted-foreground">Profit Factor</div>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mt-6">
                  * Statistics based on historical backtesting data and may not represent future performance.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="templates">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Conservative Template</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      A conservative approach with lower risk parameters suitable for beginners.
                    </p>
                    <Button variant="outline" size="sm">Use Template</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Aggressive Template</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      An aggressive approach with higher profit potential and increased risk.
                    </p>
                    <Button variant="outline" size="sm">Use Template</Button>
                  </div>
                  <div className="p-4 border rounded-lg">
                    <h4 className="font-semibold mb-2">Balanced Template</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      A balanced approach that offers moderate risk and reward characteristics.
                    </p>
                    <Button variant="outline" size="sm">Use Template</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};
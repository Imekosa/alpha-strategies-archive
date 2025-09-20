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
              <div className="lg:col-span-2 space-y-8">
                {/* Overview */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl">{strategy.name}</CardTitle>
                    <h3 className="text-lg font-semibold text-muted-foreground">Overview</h3>
                  </CardHeader>
                  <CardContent className="prose prose-lg max-w-none">
                    <p className="text-muted-foreground mb-6">
                      {strategy.overview || strategy.description}
                    </p>
                  </CardContent>
                </Card>

                {/* Market Outlook */}
                {strategy.marketOutlook && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{strategy.name} market outlook</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.marketOutlook}</p>
                    </CardContent>
                  </Card>
                )}

                {/* How to Set Up */}
                {strategy.howToSetup && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">How to set up a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.howToSetup}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Payoff Diagram Details */}
                {strategy.payoffDiagram && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">{strategy.name} payoff diagram</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{strategy.payoffDiagram.description}</p>
                      {strategy.payoffDiagram.example && (
                        <p className="text-muted-foreground">{strategy.payoffDiagram.example}</p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Entering */}
                {strategy.entering && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Entering a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.entering}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Exiting */}
                {strategy.exiting && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Exiting a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.exiting}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Time Decay */}
                {strategy.timeDecay && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Time decay impact on a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.timeDecay}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Implied Volatility */}
                {strategy.impliedVolatility && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Implied volatility impact on a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.impliedVolatility}</p>
                    </CardContent>
                  </Card>
                )}

                {/* Adjusting */}
                {strategy.adjusting && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Adjusting a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{strategy.adjusting.description}</p>
                      <p className="text-muted-foreground">{strategy.adjusting.method}</p>
                      {strategy.adjusting.example && (
                        <p className="text-muted-foreground">{strategy.adjusting.example}</p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Rolling */}
                {strategy.rolling && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Rolling a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{strategy.rolling.description}</p>
                      {strategy.rolling.example && (
                        <p className="text-muted-foreground">{strategy.rolling.example}</p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Hedging */}
                {strategy.hedging && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Hedging a {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <p className="text-muted-foreground">{strategy.hedging.description}</p>
                      <p className="text-muted-foreground">{strategy.hedging.method}</p>
                      {strategy.hedging.example && (
                        <p className="text-muted-foreground">{strategy.hedging.example}</p>
                      )}
                    </CardContent>
                  </Card>
                )}

                {/* Synthetic */}
                {strategy.synthetic && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">Synthetic {strategy.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{strategy.synthetic}</p>
                    </CardContent>
                  </Card>
                )}

                {/* FAQs */}
                {strategy.faqs && strategy.faqs.length > 0 && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-xl">FAQs</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {strategy.faqs.map((faq, index) => (
                        <div key={index}>
                          <h4 className="text-lg font-semibold mb-2">{faq.question}</h4>
                          <p className="text-muted-foreground">{faq.answer}</p>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                )}
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
                        
                        {/* Strategy line - Long Call curve */}
                        <path 
                          d="M20 160 L130 160 L280 20" 
                          fill="none" 
                          stroke="hsl(var(--chart-positive))" 
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                        
                        {/* Profit/Loss areas */}
                        <text x="200" y="40" fontSize="12" fill="hsl(var(--chart-positive))">Unlimited Profit</text>
                        <text x="30" y="170" fontSize="12" fill="hsl(var(--chart-negative))">Limited Loss</text>
                        
                        {/* Break-even point */}
                        <circle cx="130" cy="160" r="3" fill="hsl(var(--primary))" />
                        <text x="135" y="155" fontSize="10" fill="hsl(var(--primary))">BE</text>
                        
                        {/* Labels */}
                        <text x="250" y="195" fontSize="10" fill="currentColor" opacity="0.7">Stock Price</text>
                        <text x="5" y="30" fontSize="10" fill="currentColor" opacity="0.7">P/L</text>
                      </svg>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {strategy.payoffDiagram?.description || 'This diagram shows the potential profit and loss at expiration based on different stock prices.'}
                    </p>
                  </CardContent>
                </Card>

                {/* Key Metrics */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Key Metrics</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {strategy.payoffDiagram && (
                      <>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Max Profit:</span>
                          <span className="text-sm font-medium">{strategy.payoffDiagram.maxProfit}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Max Loss:</span>
                          <span className="text-sm font-medium">{strategy.payoffDiagram.maxLoss}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Breakeven:</span>
                          <span className="text-sm font-medium">{strategy.payoffDiagram.breakeven}</span>
                        </div>
                      </>
                    )}
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

                {/* Strategy Features */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Strategy Features</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Market Outlook:</span>
                      <Badge variant="outline" className="text-xs">
                        {getCategoryIcon(strategy.category)}
                        <span className="ml-1 capitalize">{strategy.category}</span>
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Option Buyer:</span>
                      <span className="text-sm">You pay to enter</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground">Strategy Setup:</span>
                      <span className="text-sm">Single-leg strategy</span>
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
                    <div className="text-2xl font-bold text-primary">
                      {strategy.stats?.winRate || '68%'}
                    </div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {strategy.stats?.avgProfit || '$125'}
                    </div>
                    <div className="text-sm text-muted-foreground">Avg Profit</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-chart-negative">
                      {strategy.stats?.avgLoss || '$85'}
                    </div>
                    <div className="text-sm text-muted-foreground">Avg Loss</div>
                  </div>
                  <div className="text-center p-4 border rounded-lg">
                    <div className="text-2xl font-bold text-primary">
                      {strategy.stats?.profitFactor || '1.47'}
                    </div>
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
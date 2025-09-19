import { useNavigate } from "react-router-dom";
import { Header } from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Shield, BarChart3, Zap, Target, Activity, BookOpen, Calculator, LineChart, PieChart, Gauge, Users, Star, Award } from "lucide-react";
import heroTrading from "@/assets/hero-trading.jpg";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5" />
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                Professional Options Trading
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Your Ultimate Options Trading 
                <span className="text-primary"> Companion</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Take the guesswork out of options trading with our powerful platform. 
                Analyze strategies, visualize P/L, and track performance with confidence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => navigate('/options-strategies')}
                  className="text-lg px-8 py-3"
                >
                  Start Trading Smarter
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-3"
                >
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={heroTrading} 
                alt="Professional trading dashboard" 
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Calculator className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Strategy Builder</h3>
              <p className="text-muted-foreground">
                Define your bias and let our engine generate optimal strategies
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <LineChart className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">P/L Visualization</h3>
              <p className="text-muted-foreground">
                Interactive charts showing risk and reward profiles
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Activity className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Performance Tracking</h3>
              <p className="text-muted-foreground">
                Comprehensive trade journal and analytics dashboard
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Master Options Trading in 4 Simple Steps
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our platform guides you through a powerful workflow to analyze, plan, and track your trades with confidence.
            </p>
          </div>

          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Step 1</Badge>
                <h3 className="text-2xl font-bold mb-4">Build Your Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Start by selecting a stock and defining your market bias. Use our built-in screener 
                  to find stocks based on fundamental metrics or technical indicators.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Stock Screener</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Market Bias Selection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Fundamental Analysis</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">Learn More</Button>
              </div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="bg-muted/30 rounded-lg p-6 h-64 flex items-center justify-center">
                    <PieChart className="h-20 w-20 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 2 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-6 order-2 lg:order-1">
                <CardContent className="p-0">
                  <div className="bg-muted/30 rounded-lg p-6 h-64 flex items-center justify-center">
                    <Calculator className="h-20 w-20 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4">Step 2</Badge>
                <h3 className="text-2xl font-bold mb-4">Quantitative Engine</h3>
                <p className="text-muted-foreground mb-6">
                  Our engine generates relevant options strategies and calculates key metrics like Greeks 
                  and theoretical prices using industry-standard models.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Target className="h-5 w-5 text-primary" />
                    <span>Greeks Calculation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>IV Modeling</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="h-5 w-5 text-primary" />
                    <span>Real-time Pricing</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">Learn More</Button>
              </div>
            </div>

            {/* Step 3 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge className="mb-4">Step 3</Badge>
                <h3 className="text-2xl font-bold mb-4">Compare & Visualize</h3>
                <p className="text-muted-foreground mb-6">
                  Interactive P/L payoff charts show risk and reward profiles. Compare multiple 
                  strategies side-by-side with advanced metrics.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <LineChart className="h-5 w-5 text-primary" />
                    <span>P/L Charts</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="h-5 w-5 text-primary" />
                    <span>Risk Analysis</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <BarChart3 className="h-5 w-5 text-primary" />
                    <span>Strategy Comparison</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">Learn More</Button>
              </div>
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="bg-muted/30 rounded-lg p-6 h-64 flex items-center justify-center">
                    <LineChart className="h-20 w-20 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Step 4 */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Card className="p-6 order-2 lg:order-1">
                <CardContent className="p-0">
                  <div className="bg-muted/30 rounded-lg p-6 h-64 flex items-center justify-center">
                    <Gauge className="h-20 w-20 text-muted-foreground" />
                  </div>
                </CardContent>
              </Card>
              <div className="order-1 lg:order-2">
                <Badge className="mb-4">Step 4</Badge>
                <h3 className="text-2xl font-bold mb-4">Track Your Success</h3>
                <p className="text-muted-foreground mb-6">
                  Log executed trades in our Trade Journal. Analyze win/loss ratios, average profits, 
                  and cumulative P/L on your personal dashboard.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <BookOpen className="h-5 w-5 text-primary" />
                    <span>Trade Journal</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Activity className="h-5 w-5 text-primary" />
                    <span>Performance Analytics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    <span>Progress Tracking</span>
                  </div>
                </div>
                <Button variant="outline" className="mt-6">Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Level */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Choose Level?</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Lightning Fast</h4>
              <p className="text-muted-foreground">
                Real-time calculations and instant strategy analysis
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Target className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Precision Accuracy</h4>
              <p className="text-muted-foreground">
                Industry-standard models and precise Greeks calculations
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Risk Management</h4>
              <p className="text-muted-foreground">
                Comprehensive risk analysis and probability calculations
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Performance Dashboard Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">See Level in Action</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Get a preview of our powerful analytics and visualization tools that help you make smarter trading decisions.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-6">Your Performance Dashboard</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-1">73%</div>
                    <div className="text-sm text-muted-foreground">Win Rate</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">$1,247</div>
                    <div className="text-sm text-muted-foreground">Avg Profit</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-success mb-1">+$12,450</div>
                    <div className="text-sm text-muted-foreground">Total P/L</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-1">1.85</div>
                    <div className="text-sm text-muted-foreground">Sharpe Ratio</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-6">Strategy Comparison</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Bull Call Spread</div>
                      <div className="text-sm text-muted-foreground">Delta: +0.45</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-success">68% POP</div>
                      <div className="text-sm text-muted-foreground">$2,000/$1,000</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded-lg">
                    <div>
                      <div className="font-medium">Iron Condor</div>
                      <div className="text-sm text-muted-foreground">Delta: -0.02</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-success">72% POP</div>
                      <div className="text-sm text-muted-foreground">$800/$1,200</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6">
              <CardContent className="p-0">
                <h3 className="text-lg font-semibold mb-6">P/L Visualization</h3>
                <div className="bg-muted/30 rounded-lg p-4 h-32 flex items-center justify-center mb-4">
                  <LineChart className="h-12 w-12 text-muted-foreground" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-destructive">Max Loss:</span>
                    <span className="text-destructive">-$1,200</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-success">Max Profit:</span>
                    <span className="text-success">+$800</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Social Proof & CTA */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Transform Your Trading Journey?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Join thousands of traders who are already using Level to make smarter, more profitable decisions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">25,000+</div>
              <p className="text-muted-foreground">Active Traders</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">89%</div>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-2">
                <span className="text-4xl font-bold text-primary">4.9</span>
                <Star className="h-6 w-6 text-accent fill-accent" />
              </div>
              <p className="text-muted-foreground">User Rating</p>
            </div>
          </div>

          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Free Trial
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Schedule Demo
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              No credit card required • 14-day free trial • Cancel anytime
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
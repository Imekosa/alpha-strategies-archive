import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Announcement Banner */}
      <div className="bg-gradient-to-r from-red-500 to-purple-600 text-white py-3">
        <div className="container mx-auto px-4 text-center">
          <span className="text-sm">
            Get Option Alpha **100% FREE** by simply connecting your TradeStation or Tradier Brokerage account!{" "}
            <a href="#" className="underline hover:no-underline">Learn more</a>
          </span>
        </div>
      </div>

      <main className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Master Options Trading with 
            <span className="text-primary"> 36 Proven Strategies</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Learn iron condors, butterflies, credit spreads, and more. Comprehensive guides with payoff diagrams, 
            risk analysis, and real trading templates to accelerate your options education.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-dark text-primary-foreground px-8 py-3"
              onClick={() => navigate('/options-strategies')}
            >
              Explore All Strategies
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              Start Free Trial
            </Button>
          </div>
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">36 Complete Strategies</h3>
            <p className="text-muted-foreground">
              From basic calls and puts to advanced multi-leg strategies like iron condors and butterflies.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Visual Payoff Diagrams</h3>
            <p className="text-muted-foreground">
              Interactive charts showing profit/loss potential at expiration for every strategy.
            </p>
          </div>
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Risk Management</h3>
            <p className="text-muted-foreground">
              Detailed risk profiles, margin requirements, and position sizing guidelines for each strategy.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;

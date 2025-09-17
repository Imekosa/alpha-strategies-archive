import { Header } from "@/components/Header";
import { StrategyTabs } from "@/components/StrategyTabs";
import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Linkedin } from "lucide-react";

export const OptionsStrategies = () => {
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <a href="/" className="hover:text-foreground">Home</a>
            <span>›</span>
            <a href="/education" className="hover:text-foreground">Education</a>
            <span>›</span>
            <span className="text-foreground">Options Strategies</span>
          </div>
        </nav>

        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Options Strategies</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Learn about 36 popular options strategies like iron condors, iron butterflies, credit spreads, and more.
          </p>
          
          {/* Action Buttons */}
          <div className="flex items-center justify-center gap-4 mb-8">
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

        {/* Strategy Tabs */}
        <StrategyTabs />

        {/* Educational Content */}
        <div className="mt-16 prose prose-lg max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About Options Strategies</h2>
          <p className="text-muted-foreground mb-6">
            Options enable investors to use many different strategies to achieve their desired financial goals. 
            There are three primary reasons to trade options: to protect or "hedge" a position, to generate income, 
            or to speculate on the future price movement of an asset.
          </p>
          <p className="text-muted-foreground mb-6">
            Options traders can purchase or sell different options contracts to tailor positions to their market expectations. 
            Options strategies can benefit from directional moves or from stock prices staying within a defined range. 
            Strategies vary significantly from single-leg options to more complex multi-leg positions with long and short options.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-12">Risk Defined Strategies</h3>
          <p className="text-muted-foreground mb-4">
            Risk defined strategies are positions where the maximum loss is defined at trade entry. Risk defined strategies 
            can be used to create a maximum loss scenario and help investors manage downside exposure. Single-leg long options 
            have a maximum loss limited to the cost when the position is opened.
          </p>
          <p className="text-muted-foreground mb-6">
            For example, purchasing a long call or put option for $2.50 means the most that can be lost on the position is 
            $250 per contract, no matter what happens with the underlying asset.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-12">Unlimited Risk Strategies</h3>
          <p className="text-muted-foreground mb-4">
            Unlimited risk strategies have an undefined or unlimited risk of loss at trade entry. Unlimited risk is a 
            possibility with naked or uncovered options selling.
          </p>
          <p className="text-muted-foreground mb-6">
            For example, when selling a naked call option, the option writer is required to sell shares at the strike price 
            if assigned stock. Because stock can potentially go up indefinitely, the risk is not defined.
          </p>

          <h3 className="text-2xl font-bold mb-4 mt-12">Payoff Diagrams</h3>
          <p className="text-muted-foreground mb-4">
            Payoff diagrams illustrate where options strategies will make or lose money at expiration based on the underlying 
            asset's different price points. Profit and loss diagrams are visual aids that can be used with single-leg and 
            multi-leg strategies.
          </p>
          <p className="text-muted-foreground mb-6">
            The green portion of the payoff diagram line shows where the position is profitable at expiration relative to 
            the underlying security's price. The red portion shows where the position is at a loss.
          </p>
        </div>
      </main>
    </div>
  );
};
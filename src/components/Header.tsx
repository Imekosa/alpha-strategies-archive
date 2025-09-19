import { Button } from "@/components/ui/button";
import levelLogo from "@/assets/level-logo.png";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-3">
              <img 
                src={levelLogo} 
                alt="Level Logo" 
                className="h-10 w-10 object-contain"
              />
              <span className="text-xl font-bold">Level</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                Home
              </a>
              <a href="/education" className="text-muted-foreground hover:text-foreground transition-colors">
                Education
              </a>
              <a href="/options-strategies" className="text-foreground font-medium">
                Options Strategies
              </a>
              <a href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                Pricing
              </a>
              <a href="/brokers" className="text-muted-foreground hover:text-foreground transition-colors">
                Brokers
              </a>
              <a href="/faq" className="text-muted-foreground hover:text-foreground transition-colors">
                FAQ
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline">Login</Button>
            <Button className="bg-primary hover:bg-primary-dark">Start Free Trial</Button>
          </div>
        </div>
      </div>
    </header>
  );
};
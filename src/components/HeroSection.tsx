import { Button } from "@/components/ui/button";
import StatusBadge from "./StatusBadge";
import SocialLinks from "./SocialLinks";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid opacity-40" />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background" />
      
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto">
        <StatusBadge />
        
        <h1 
          className="mt-8 text-5xl sm:text-6xl md:text-7xl font-bold leading-tight animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
        >
          Hi, I'm{" "}
          <span className="text-primary text-glow">wannxd</span>
        </h1>
        
        <p 
          className="mt-6 text-lg sm:text-xl text-muted-foreground max-w-xl animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Creative Developer & Digital Artist crafting{" "}
          <span className="text-foreground font-medium">unique digital experiences</span>
        </p>
        
        <div 
          className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto animate-fade-in"
          style={{ animationDelay: "0.6s", opacity: 0 }}
        >
          <Button variant="hero" size="xl" className="w-full sm:w-auto">
            View My Work
          </Button>
          <Button variant="heroOutline" size="xl" className="w-full sm:w-auto">
            Get In Touch
          </Button>
        </div>
        
        <div className="mt-16">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

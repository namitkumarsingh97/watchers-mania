import { Button } from "@/components/ui/button";
import { Play, Info, Star, Clock } from "lucide-react";
const HeroSection = () => {
  return <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80" alt="Featured Movie" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-2xl animate-fade-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/30 mb-6 mx-0 my-[10px]">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-sm font-medium">Now Streaming</span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl text-foreground leading-none mb-4">
            THE LAST
            <span className="text-gradient block">HORIZON</span>
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-6">
            <div className="flex items-center gap-1">
              <Star className="w-5 h-5 text-gold fill-current" />
              <span className="font-semibold text-foreground">8.9</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span>2024</span>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>2h 34m</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-muted-foreground" />
            <span className="px-2 py-0.5 rounded bg-secondary text-xs font-medium">4K</span>
            <span className="px-2 py-0.5 rounded bg-secondary text-xs font-medium">HDR</span>
          </div>

          {/* Description */}
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            In a world on the brink of collapse, one explorer discovers a hidden truth that could 
            save humanity—or destroy it forever. An epic journey across uncharted territories 
            where every step brings new dangers and ancient mysteries.
          </p>

          {/* Genres */}
          <div className="flex flex-wrap gap-2 mb-8">
            {["Action", "Sci-Fi", "Adventure", "Drama"].map(genre => <span key={genre} className="px-3 py-1 rounded-full border border-border text-sm text-muted-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                {genre}
              </span>)}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" className="gap-2">
              <Play className="w-5 h-5 fill-current" />
              Watch Now
            </Button>
            <Button variant="outline" size="xl" className="gap-2">
              <Info className="w-5 h-5" />
              More Info
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-muted-foreground animate-bounce" />
        </div>
      </div>
    </section>;
};
export default HeroSection;
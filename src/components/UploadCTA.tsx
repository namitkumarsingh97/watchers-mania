import { Button } from "@/components/ui/button";
import { Upload, Film, DollarSign, Users } from "lucide-react";

const features = [
  {
    icon: Film,
    title: "Share Your Films",
    description: "Upload your movies, short films, or documentaries",
  },
  {
    icon: Users,
    title: "Reach Millions",
    description: "Connect with a global audience of movie lovers",
  },
  {
    icon: DollarSign,
    title: "Earn Revenue",
    description: "Monetize your content through our partner program",
  },
];

const UploadCTA = () => {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient opacity-10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,hsl(var(--background))_70%)]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-20 h-20 rounded-2xl bg-hero-gradient flex items-center justify-center mx-auto mb-8 shadow-glow animate-scale-in">
            <Upload className="w-10 h-10 text-primary-foreground" />
          </div>

          {/* Content */}
          <h2 className="font-heading text-4xl lg:text-6xl text-foreground mb-4 animate-fade-up">
            Become a <span className="text-gradient">Creator</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Join our community of filmmakers and content creators. Upload your work and 
            share it with millions of viewers worldwide.
          </p>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="xl" className="gap-2">
              <Upload className="w-5 h-5" />
              Start Uploading
            </Button>
            <Button variant="outline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UploadCTA;

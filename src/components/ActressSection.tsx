import { ChevronRight, Star } from "lucide-react";

const actresses = [
  {
    name: "Emma Stone",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80",
    movies: 42,
    rating: 9.2,
  },
  {
    name: "Zendaya",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80",
    movies: 28,
    rating: 9.0,
  },
  {
    name: "Florence Pugh",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&q=80",
    movies: 19,
    rating: 8.8,
  },
  {
    name: "Margot Robbie",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&q=80",
    movies: 35,
    rating: 9.1,
  },
  {
    name: "Ana de Armas",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&q=80",
    movies: 24,
    rating: 8.9,
  },
  {
    name: "Saoirse Ronan",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80",
    movies: 31,
    rating: 9.3,
  },
];

const ActressSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground mb-2">
              Popular <span className="text-gradient">Actresses</span>
            </h2>
            <p className="text-muted-foreground">Discover movies by your favorite stars</p>
          </div>
          <a
            href="#"
            className="flex items-center gap-1 text-primary hover:text-primary/80 transition-colors text-sm font-medium"
          >
            View All
            <ChevronRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-6">
          {actresses.map((actress, index) => (
            <a
              key={actress.name}
              href="#"
              className="group text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="relative mb-4">
                <div className="w-24 h-24 lg:w-32 lg:h-32 mx-auto rounded-full overflow-hidden ring-4 ring-secondary group-hover:ring-primary transition-all duration-300">
                  <img
                    src={actress.image}
                    alt={actress.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                {/* Rating Badge */}
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 px-2 py-1 rounded-full bg-card border border-border shadow-card">
                  <Star className="w-3 h-3 text-gold fill-gold" />
                  <span className="text-xs font-semibold text-foreground">{actress.rating}</span>
                </div>
              </div>

              {/* Info */}
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors mb-1">
                {actress.name}
              </h3>
              <p className="text-muted-foreground text-sm">{actress.movies} Movies</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActressSection;

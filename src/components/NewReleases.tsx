import { ChevronRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Quantum Break",
    slug: "quantum-break",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=400&q=80",
    rating: 8.5,
    year: "2024",
    duration: "2h 18m",
    isNew: true,
    isPremium: true,
  },
  {
    title: "Shadow Protocol",
    slug: "shadow-protocol",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=400&q=80",
    rating: 7.9,
    year: "2024",
    duration: "1h 52m",
    isNew: true,
  },
  {
    title: "The Wanderer",
    slug: "the-wanderer",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=400&q=80",
    rating: 8.8,
    year: "2024",
    duration: "2h 45m",
    isNew: true,
  },
  {
    title: "Echoes of Time",
    slug: "echoes-of-time",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=400&q=80",
    rating: 9.0,
    year: "2024",
    duration: "2h 10m",
    isNew: true,
    isPremium: true,
  },
  {
    title: "City of Stars",
    slug: "city-of-stars",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=400&q=80",
    rating: 8.3,
    year: "2024",
    duration: "1h 58m",
    isNew: true,
  },
  {
    title: "The Last Stand",
    slug: "the-last-stand",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=400&q=80",
    rating: 8.1,
    year: "2024",
    duration: "2h 25m",
    isNew: true,
  },
];

const NewReleases = () => {
  return (
    <section id="new" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-accent" />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground">
                New Releases
              </h2>
              <p className="text-muted-foreground text-sm">Fresh content just added</p>
            </div>
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
          {movies.map((movie, index) => (
            <Link
              to={`/movie/${movie.slug}`}
              key={movie.title}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MovieCard {...movie} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewReleases;

import { ChevronRight, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";

const movies = [
  {
    title: "Midnight Storm",
    slug: "midnight-storm",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=400&q=80",
    rating: 8.7,
    year: "2024",
    duration: "2h 15m",
    isNew: true,
  },
  {
    title: "The Silent Echo",
    slug: "the-silent-echo",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80",
    rating: 9.1,
    year: "2024",
    duration: "1h 58m",
    isPremium: true,
  },
  {
    title: "Neon Dreams",
    slug: "neon-dreams",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=400&q=80",
    rating: 8.4,
    year: "2023",
    duration: "2h 22m",
  },
  {
    title: "Beyond the Veil",
    slug: "beyond-the-veil",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=400&q=80",
    rating: 8.9,
    year: "2024",
    duration: "2h 05m",
    isNew: true,
  },
  {
    title: "Crimson Tide",
    slug: "crimson-tide",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=400&q=80",
    rating: 7.8,
    year: "2023",
    duration: "1h 45m",
  },
  {
    title: "Eternal Flame",
    slug: "eternal-flame",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=400&q=80",
    rating: 8.2,
    year: "2024",
    duration: "2h 30m",
    isPremium: true,
  },
];

const TrendingSection = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h2 className="font-heading text-3xl lg:text-4xl text-foreground">
                Trending Now
              </h2>
              <p className="text-muted-foreground text-sm">Most watched this week</p>
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

export default TrendingSection;

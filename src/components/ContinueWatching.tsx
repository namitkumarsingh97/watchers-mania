import { Play, X } from "lucide-react";
import { Link } from "react-router-dom";

const watchingList = [
  {
    title: "The Dark Knight",
    slug: "the-dark-knight",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
    progress: 65,
    remaining: "52 min left",
    episode: null,
  },
  {
    title: "Stranger Things",
    slug: "stranger-things",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    progress: 35,
    remaining: "S4 E5 • 1h 15m left",
    episode: "Chapter Five",
  },
  {
    title: "Inception",
    slug: "inception",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    progress: 80,
    remaining: "28 min left",
    episode: null,
  },
  {
    title: "Breaking Bad",
    slug: "breaking-bad",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    progress: 12,
    remaining: "S2 E3 • 45 min left",
    episode: "Bit by a Dead Bee",
  },
];

const ContinueWatching = () => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="font-heading text-3xl lg:text-4xl text-foreground">
              Continue Watching
            </h2>
            <p className="text-muted-foreground">Pick up where you left off</p>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
          {watchingList.map((item, index) => (
            <Link
              to={`/movie/${item.slug}`}
              key={item.title}
              className="group relative flex-shrink-0 w-72 lg:w-80 rounded-xl overflow-hidden bg-card shadow-card hover:shadow-elevated transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent" />

                {/* Play Button */}
                <button className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow transform scale-90 group-hover:scale-100 transition-transform">
                    <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
                  </div>
                </button>

                {/* Remove Button */}
                <button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-background/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-destructive">
                  <X className="w-4 h-4 text-foreground" />
                </button>
              </div>

              {/* Progress Bar */}
              <div className="h-1 bg-muted">
                <div
                  className="h-full bg-primary transition-all duration-300"
                  style={{ width: `${item.progress}%` }}
                />
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                {item.episode && (
                  <p className="text-muted-foreground text-sm mb-1">{item.episode}</p>
                )}
                <p className="text-muted-foreground text-xs">{item.remaining}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContinueWatching;

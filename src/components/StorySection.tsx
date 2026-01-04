import { Play, Plus } from "lucide-react";

const stories = [
  {
    username: "CinemaFan",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=200&q=80",
    isLive: true,
  },
  {
    username: "MovieBuff",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=200&q=80",
    isLive: false,
  },
  {
    username: "FilmCritic",
    avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=200&q=80",
    isLive: true,
  },
  {
    username: "Director_X",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=200&q=80",
    isLive: false,
  },
  {
    username: "ActionHero",
    avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=200&q=80",
    isLive: false,
  },
  {
    username: "SciFiNerd",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=200&q=80",
    isLive: true,
  },
  {
    username: "HorrorFan",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    thumbnail: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=200&q=80",
    isLive: false,
  },
];

const StorySection = () => {
  return (
    <section className="py-8 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex gap-4 lg:gap-6 overflow-x-auto pb-2 -mx-4 px-4 scrollbar-hide">
          {/* Add Story */}
          <div className="flex-shrink-0 flex flex-col items-center gap-2">
            <button className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-secondary border-2 border-dashed border-muted-foreground/50 flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
              <Plus className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
            </button>
            <span className="text-xs text-muted-foreground">Add Story</span>
          </div>

          {/* Stories */}
          {stories.map((story, index) => (
            <div
              key={story.username}
              className="flex-shrink-0 flex flex-col items-center gap-2 cursor-pointer group animate-fade-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Story Ring */}
              <div
                className={`relative p-0.5 rounded-full ${
                  story.isLive
                    ? "bg-hero-gradient"
                    : "bg-gradient-to-br from-muted to-muted-foreground/30"
                }`}
              >
                <div className="relative w-16 h-16 lg:w-20 lg:h-20 rounded-full overflow-hidden ring-2 ring-background">
                  <img
                    src={story.thumbnail}
                    alt={story.username}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Play overlay */}
                  <div className="absolute inset-0 bg-background/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Play className="w-6 h-6 text-foreground fill-current" />
                  </div>
                </div>
                {/* Live badge */}
                {story.isLive && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 px-2 py-0.5 rounded text-[10px] font-bold bg-primary text-primary-foreground uppercase">
                    Live
                  </span>
                )}
              </div>
              <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors truncate w-16 lg:w-20 text-center">
                {story.username}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StorySection;

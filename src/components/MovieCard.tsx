import { Play, Star, Clock, Plus } from "lucide-react";

interface MovieCardProps {
  title: string;
  image: string;
  rating: number;
  year: string;
  duration: string;
  isNew?: boolean;
  isPremium?: boolean;
}

const MovieCard = ({ title, image, rating, year, duration, isNew, isPremium }: MovieCardProps) => {
  return (
    <div className="group relative rounded-xl overflow-hidden movie-card-hover cursor-pointer">
      {/* Image */}
      <div className="aspect-[2/3] relative">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {isNew && (
            <span className="px-2 py-1 rounded bg-primary text-primary-foreground text-xs font-bold">
              NEW
            </span>
          )}
          {isPremium && (
            <span className="px-2 py-1 rounded bg-gold text-gold-foreground text-xs font-bold">
              PREMIUM
            </span>
          )}
        </div>

        {/* Rating */}
        <div className="absolute top-3 right-3 flex items-center gap-1 px-2 py-1 rounded bg-background/80 backdrop-blur-sm">
          <Star className="w-3 h-3 text-gold fill-gold" />
          <span className="text-xs font-semibold text-foreground">{rating}</span>
        </div>

        {/* Play Button Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="w-14 h-14 rounded-full bg-primary flex items-center justify-center shadow-glow transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-6 h-6 text-primary-foreground fill-current ml-1" />
          </button>
        </div>

        {/* Add to List */}
        <button className="absolute bottom-3 right-3 w-8 h-8 rounded-full bg-secondary/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-primary">
          <Plus className="w-4 h-4 text-foreground" />
        </button>
      </div>

      {/* Info */}
      <div className="p-3 bg-card">
        <h3 className="font-semibold text-foreground truncate mb-1 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{year}</span>
          <span className="w-1 h-1 rounded-full bg-muted-foreground" />
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;

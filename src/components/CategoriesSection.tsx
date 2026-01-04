import { Flame, Heart, Skull, Rocket, Laugh, Ghost, Swords, Baby } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { name: "Action", slug: "action", icon: Flame, color: "from-red-500 to-orange-500", count: 1250 },
  { name: "Romance", slug: "romance", icon: Heart, color: "from-pink-500 to-rose-500", count: 890 },
  { name: "Horror", slug: "horror", icon: Skull, color: "from-purple-600 to-violet-600", count: 456 },
  { name: "Sci-Fi", slug: "sci-fi", icon: Rocket, color: "from-cyan-500 to-blue-500", count: 678 },
  { name: "Comedy", slug: "comedy", icon: Laugh, color: "from-yellow-500 to-amber-500", count: 1100 },
  { name: "Thriller", slug: "thriller", icon: Ghost, color: "from-slate-600 to-zinc-600", count: 723 },
  { name: "Fantasy", slug: "fantasy", icon: Swords, color: "from-emerald-500 to-teal-500", count: 534 },
  { name: "Family", slug: "family", icon: Baby, color: "from-sky-400 to-indigo-400", count: 412 },
];

const CategoriesSection = () => {
  return (
    <section id="categories" className="py-16 lg:py-24 bg-card/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore our vast collection of movies organized by genre. Find your next favorite film.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-6">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                to={`/category/${category.slug}`}
                className="group relative overflow-hidden rounded-2xl p-6 lg:p-8 bg-secondary hover:bg-secondary/80 border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {/* Background Glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                />

                {/* Icon */}
                <div
                  className={`w-12 h-12 lg:w-14 lg:h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="font-heading text-xl lg:text-2xl text-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {category.count.toLocaleString()} movies
                </p>

                {/* Arrow */}
                <div className="absolute bottom-6 right-6 w-8 h-8 rounded-full bg-muted flex items-center justify-center opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-foreground"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoriesSection;

import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "@/components/MovieCard";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const categoryData: Record<string, {
  name: string;
  description: string;
  color: string;
}> = {
  action: {
    name: "Action",
    description: "High-octane thrills, explosive sequences, and adrenaline-pumping adventures.",
    color: "from-red-500 to-orange-500",
  },
  romance: {
    name: "Romance",
    description: "Heartfelt love stories that will make you believe in happily ever after.",
    color: "from-pink-500 to-rose-500",
  },
  horror: {
    name: "Horror",
    description: "Spine-chilling tales that will keep you on the edge of your seat.",
    color: "from-purple-600 to-violet-600",
  },
  "sci-fi": {
    name: "Sci-Fi",
    description: "Explore the future, space, and the boundaries of human imagination.",
    color: "from-cyan-500 to-blue-500",
  },
  comedy: {
    name: "Comedy",
    description: "Laugh out loud with our collection of hilarious films.",
    color: "from-yellow-500 to-amber-500",
  },
  thriller: {
    name: "Thriller",
    description: "Suspenseful stories that will keep you guessing until the end.",
    color: "from-slate-600 to-zinc-600",
  },
  fantasy: {
    name: "Fantasy",
    description: "Magical worlds, mythical creatures, and epic adventures await.",
    color: "from-emerald-500 to-teal-500",
  },
  family: {
    name: "Family",
    description: "Wholesome entertainment for viewers of all ages.",
    color: "from-sky-400 to-indigo-400",
  },
};

const categoryMovies = [
  {
    title: "The Last Horizon",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    rating: 8.5,
    year: "2024",
    duration: "2h 15m",
    isNew: true,
  },
  {
    title: "Neon Streets",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    rating: 7.8,
    year: "2023",
    duration: "1h 58m",
  },
  {
    title: "Echoes of War",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    rating: 8.2,
    year: "2024",
    duration: "2h 30m",
    isPremium: true,
  },
  {
    title: "Midnight Run",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
    rating: 7.5,
    year: "2023",
    duration: "1h 45m",
  },
  {
    title: "Silent Storm",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    rating: 8.9,
    year: "2024",
    duration: "2h 10m",
    isNew: true,
  },
  {
    title: "The Outsider",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    rating: 7.2,
    year: "2022",
    duration: "1h 52m",
  },
  {
    title: "Beyond the Stars",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
    rating: 8.0,
    year: "2024",
    duration: "2h 25m",
    isPremium: true,
  },
  {
    title: "City of Dreams",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80",
    rating: 7.9,
    year: "2023",
    duration: "1h 55m",
  },
];

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? categoryData[slug] : null;

  if (!category) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Category Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-10`} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          <div className="max-w-3xl">
            <div className={`inline-flex px-4 py-2 rounded-full bg-gradient-to-r ${category.color} text-white text-sm font-medium mb-4`}>
              {categoryMovies.length} Movies
            </div>
            <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-4">
              {category.name}
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl max-w-2xl">
              {category.description}
            </p>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="border-b border-border bg-card/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="w-4 h-4" />
              Filters
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Year
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Rating
              <ChevronDown className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Duration
              <ChevronDown className="w-4 h-4" />
            </Button>
            <div className="ml-auto text-muted-foreground text-sm">
              Showing {categoryMovies.length} results
            </div>
          </div>
        </div>
      </div>

      {/* Movies Grid */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 lg:gap-6">
            {categoryMovies.map((movie, index) => (
              <Link key={movie.title} to={`/movie/${movie.title.toLowerCase().replace(/\s+/g, '-')}`}>
                <MovieCard
                  {...movie}
                />
              </Link>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Movies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CategoryPage;

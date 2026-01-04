import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Play, Plus, Share2, ThumbsUp, ArrowLeft, Star, Clock, Calendar, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import VideoPlayer from "@/components/VideoPlayer";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const movieData: Record<string, {
  title: string;
  image: string;
  backdrop: string;
  rating: number;
  year: number;
  duration: string;
  genre: string[];
  description: string;
  director: string;
  cast: string[];
}> = {
  "the-dark-knight": {
    title: "The Dark Knight",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80",
    rating: 9.0,
    year: 2008,
    duration: "2h 32m",
    genre: ["Action", "Crime", "Drama"],
    description: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
    director: "Christopher Nolan",
    cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
  },
  "stranger-things": {
    title: "Stranger Things",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
    rating: 8.7,
    year: 2016,
    duration: "TV Series",
    genre: ["Drama", "Fantasy", "Horror"],
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    director: "The Duffer Brothers",
    cast: ["Millie Bobby Brown", "Finn Wolfhard", "Winona Ryder", "David Harbour"],
  },
  "inception": {
    title: "Inception",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=80",
    rating: 8.8,
    year: 2010,
    duration: "2h 28m",
    genre: ["Action", "Sci-Fi", "Thriller"],
    description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
    director: "Christopher Nolan",
    cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
  },
  "breaking-bad": {
    title: "Breaking Bad",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
    rating: 9.5,
    year: 2008,
    duration: "TV Series",
    genre: ["Crime", "Drama", "Thriller"],
    description: "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    director: "Vince Gilligan",
    cast: ["Bryan Cranston", "Aaron Paul", "Anna Gunn", "Dean Norris"],
  },
  "the-last-horizon": {
    title: "The Last Horizon",
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1920&q=80",
    rating: 8.5,
    year: 2024,
    duration: "2h 15m",
    genre: ["Action", "Adventure", "Sci-Fi"],
    description: "In a world where humanity's last hope lies beyond the stars, a team of explorers embarks on a perilous journey to find a new home for mankind.",
    director: "James Cameron",
    cast: ["Ryan Gosling", "Ana de Armas", "Oscar Isaac", "Florence Pugh"],
  },
  "neon-streets": {
    title: "Neon Streets",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
    rating: 7.8,
    year: 2023,
    duration: "1h 58m",
    genre: ["Action", "Crime", "Thriller"],
    description: "A former hitman navigates the neon-lit underworld of a futuristic city to protect the daughter of his former employer.",
    director: "David Leitch",
    cast: ["Keanu Reeves", "Carrie-Anne Moss", "Yahya Abdul-Mateen II"],
  },
  "echoes-of-war": {
    title: "Echoes of War",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=80",
    rating: 8.2,
    year: 2024,
    duration: "2h 30m",
    genre: ["Drama", "War", "History"],
    description: "A gripping tale of survival and sacrifice as soldiers face impossible odds in the fog of war.",
    director: "Sam Mendes",
    cast: ["Austin Butler", "Barry Keoghan", "Andrew Garfield"],
  },
  "midnight-run": {
    title: "Midnight Run",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80",
    rating: 7.5,
    year: 2023,
    duration: "1h 45m",
    genre: ["Action", "Thriller"],
    description: "A getaway driver with a mysterious past takes on one last job that spirals into a deadly chase across the city.",
    director: "Edgar Wright",
    cast: ["John Boyega", "Saoirse Ronan", "Idris Elba"],
  },
  "silent-storm": {
    title: "Silent Storm",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
    rating: 8.9,
    year: 2024,
    duration: "2h 10m",
    genre: ["Horror", "Mystery", "Thriller"],
    description: "A remote island community is terrorized by an ancient evil that awakens during the worst storm in a century.",
    director: "Ari Aster",
    cast: ["Tilda Swinton", "Robert Pattinson", "Anya Taylor-Joy"],
  },
  "the-outsider": {
    title: "The Outsider",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80",
    rating: 7.2,
    year: 2022,
    duration: "1h 52m",
    genre: ["Drama", "Crime"],
    description: "A small-town detective uncovers a web of corruption that threatens everything he holds dear.",
    director: "Taylor Sheridan",
    cast: ["Josh Brolin", "Kelly Reilly", "Luke Grimes"],
  },
  "beyond-the-stars": {
    title: "Beyond the Stars",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&q=80",
    rating: 8.0,
    year: 2024,
    duration: "2h 25m",
    genre: ["Sci-Fi", "Adventure", "Drama"],
    description: "An astronaut stranded on a distant planet must survive against all odds while discovering the secrets of an alien civilization.",
    director: "Denis Villeneuve",
    cast: ["Timothée Chalamet", "Zendaya", "Rebecca Ferguson"],
  },
  "city-of-dreams": {
    title: "City of Dreams",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1920&q=80",
    rating: 7.9,
    year: 2023,
    duration: "1h 55m",
    genre: ["Romance", "Drama", "Musical"],
    description: "Two aspiring artists chase their dreams in the city of angels, finding love and heartbreak along the way.",
    director: "Damien Chazelle",
    cast: ["Emma Stone", "Ryan Gosling", "John Legend"],
  },
  // Trending Section Movies
  "midnight-storm": {
    title: "Midnight Storm",
    image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1920&q=80",
    rating: 8.7,
    year: 2024,
    duration: "2h 15m",
    genre: ["Action", "Thriller", "Drama"],
    description: "A former special ops agent must navigate through a deadly storm while protecting a key witness from a ruthless assassin.",
    director: "Chad Stahelski",
    cast: ["Tom Hardy", "Charlize Theron", "Idris Elba"],
  },
  "the-silent-echo": {
    title: "The Silent Echo",
    image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1920&q=80",
    rating: 9.1,
    year: 2024,
    duration: "1h 58m",
    genre: ["Mystery", "Thriller", "Drama"],
    description: "A deaf detective uses her unique abilities to solve a series of murders that have baffled the police department.",
    director: "Park Chan-wook",
    cast: ["Sandra Bullock", "Rami Malek", "Viola Davis"],
  },
  "neon-dreams": {
    title: "Neon Dreams",
    image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=1920&q=80",
    rating: 8.4,
    year: 2023,
    duration: "2h 22m",
    genre: ["Sci-Fi", "Romance", "Drama"],
    description: "In a neon-drenched future, two lovers from different social classes fight against a system designed to keep them apart.",
    director: "Lana Wachowski",
    cast: ["Zendaya", "Tom Holland", "Lupita Nyong'o"],
  },
  "beyond-the-veil": {
    title: "Beyond the Veil",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=1920&q=80",
    rating: 8.9,
    year: 2024,
    duration: "2h 05m",
    genre: ["Horror", "Supernatural", "Mystery"],
    description: "A paranormal investigator confronts the most dangerous entity of her career in a haunted asylum.",
    director: "James Wan",
    cast: ["Florence Pugh", "Pedro Pascal", "Willem Dafoe"],
  },
  "crimson-tide": {
    title: "Crimson Tide",
    image: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1509347528160-9a9e33742cdb?w=1920&q=80",
    rating: 7.8,
    year: 2023,
    duration: "1h 45m",
    genre: ["Action", "War", "Drama"],
    description: "Submarine commanders clash over a controversial order that could trigger World War III.",
    director: "Ridley Scott",
    cast: ["Denzel Washington", "John David Washington", "Oscar Isaac"],
  },
  "eternal-flame": {
    title: "Eternal Flame",
    image: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1594909122845-11baa439b7bf?w=1920&q=80",
    rating: 8.2,
    year: 2024,
    duration: "2h 30m",
    genre: ["Romance", "Fantasy", "Drama"],
    description: "An immortal being falls in love with a mortal, knowing their time together is fleeting but precious.",
    director: "Guillermo del Toro",
    cast: ["Cate Blanchett", "Dev Patel", "Saoirse Ronan"],
  },
  // New Releases Movies
  "quantum-break": {
    title: "Quantum Break",
    image: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1518676590629-3dcbd9c5a5c9?w=1920&q=80",
    rating: 8.5,
    year: 2024,
    duration: "2h 18m",
    genre: ["Sci-Fi", "Action", "Thriller"],
    description: "A physicist gains the ability to manipulate time after a failed experiment, using his powers to prevent a catastrophic future.",
    director: "Christopher Nolan",
    cast: ["Robert Downey Jr.", "Margot Robbie", "Adam Driver"],
  },
  "shadow-protocol": {
    title: "Shadow Protocol",
    image: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1535016120720-40c646be5580?w=1920&q=80",
    rating: 7.9,
    year: 2024,
    duration: "1h 52m",
    genre: ["Action", "Spy", "Thriller"],
    description: "A disavowed agent must clear her name while uncovering a conspiracy that reaches the highest levels of government.",
    director: "Matthew Vaughn",
    cast: ["Ana de Armas", "Henry Cavill", "Ralph Fiennes"],
  },
  "the-wanderer": {
    title: "The Wanderer",
    image: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?w=1920&q=80",
    rating: 8.8,
    year: 2024,
    duration: "2h 45m",
    genre: ["Adventure", "Drama", "Western"],
    description: "A lone drifter with a mysterious past helps a frontier town stand against a ruthless land baron.",
    director: "Taylor Sheridan",
    cast: ["Josh Brolin", "Haley Lu Richardson", "Sam Elliott"],
  },
  "echoes-of-time": {
    title: "Echoes of Time",
    image: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=1920&q=80",
    rating: 9.0,
    year: 2024,
    duration: "2h 10m",
    genre: ["Sci-Fi", "Drama", "Romance"],
    description: "A woman discovers she can communicate with her past self and must prevent a tragedy that shaped her entire life.",
    director: "Denis Villeneuve",
    cast: ["Amy Adams", "Jeremy Renner", "Michael Stuhlbarg"],
  },
  "city-of-stars": {
    title: "City of Stars",
    image: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?w=1920&q=80",
    rating: 8.3,
    year: 2024,
    duration: "1h 58m",
    genre: ["Musical", "Romance", "Drama"],
    description: "A jazz pianist and an aspiring actress fall in love while pursuing their dreams in Los Angeles.",
    director: "Damien Chazelle",
    cast: ["Rachel Zegler", "Austin Butler", "Ariana DeBose"],
  },
  "the-last-stand": {
    title: "The Last Stand",
    image: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=600&q=80",
    backdrop: "https://images.unsplash.com/photo-1560169897-fc0cdbdfa4d5?w=1920&q=80",
    rating: 8.1,
    year: 2024,
    duration: "2h 25m",
    genre: ["Action", "War", "History"],
    description: "A small unit of soldiers makes a desperate last stand against overwhelming forces to protect fleeing civilians.",
    director: "Peter Jackson",
    cast: ["Chris Hemsworth", "Florence Pugh", "Andrew Garfield"],
  },
};

const MovieDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const [isPlaying, setIsPlaying] = useState(false);
  const movie = slug ? movieData[slug] : null;

  if (!movie) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl text-foreground mb-4">Movie Not Found</h1>
          <Link to="/" className="text-primary hover:underline">
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Video Player Modal */}
      {isPlaying && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <button
            onClick={() => setIsPlaying(false)}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6 text-white" />
          </button>
          <div className="w-full max-w-6xl">
            <VideoPlayer
              title={movie.title}
              posterImage={movie.backdrop}
              onClose={() => setIsPlaying(false)}
            />
          </div>
        </div>
      )}

      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[70vh] lg:h-[80vh]">
        <img
          src={movie.backdrop}
          alt={movie.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />

        {/* Back Button */}
        <Link
          to="/"
          className="absolute top-24 left-4 lg:left-8 z-10 flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </Link>

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-16">
          <div className="container mx-auto">
            <div className="max-w-3xl">
              {/* Genre Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {movie.genre.map((g) => (
                  <span
                    key={g}
                    className="px-3 py-1 rounded-full bg-primary/20 text-primary text-sm font-medium"
                  >
                    {g}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="font-heading text-5xl lg:text-7xl text-foreground mb-4">
                {movie.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-muted-foreground mb-6">
                <div className="flex items-center gap-1.5">
                  <Star className="w-5 h-5 text-gold fill-gold" />
                  <span className="font-semibold text-foreground">{movie.rating}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  <span>{movie.year}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  <span>{movie.duration}</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl leading-relaxed">
                {movie.description}
              </p>

              {/* Actions */}
              <div className="flex flex-wrap gap-4">
                <Button size="xl" className="gap-2" onClick={() => setIsPlaying(true)}>
                  <Play className="w-5 h-5 fill-current" />
                  Play Now
                </Button>
                <Button variant="outline" size="lg" className="gap-2">
                  <Plus className="w-5 h-5" />
                  My List
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <ThumbsUp className="w-5 h-5" />
                  Like
                </Button>
                <Button variant="ghost" size="lg" className="gap-2">
                  <Share2 className="w-5 h-5" />
                  Share
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Details Section */}
      <section className="py-12 lg:py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cast & Crew */}
            <div className="lg:col-span-2">
              <h2 className="font-heading text-2xl text-foreground mb-6">Cast & Crew</h2>
              <div className="space-y-4">
                <div>
                  <span className="text-muted-foreground">Director: </span>
                  <span className="text-foreground font-medium">{movie.director}</span>
                </div>
                <div>
                  <span className="text-muted-foreground">Cast: </span>
                  <span className="text-foreground font-medium">{movie.cast.join(", ")}</span>
                </div>
              </div>
            </div>

            {/* Related Info */}
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h3 className="font-heading text-xl text-foreground mb-4">More Info</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Quality</span>
                  <span className="text-foreground">4K Ultra HD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Audio</span>
                  <span className="text-foreground">Dolby Atmos</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtitles</span>
                  <span className="text-foreground">English, Spanish</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MovieDetail;

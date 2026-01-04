import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Search, Menu, X, Upload, User, Bell, Coffee } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "Movies",
    href: "#movies"
  }, {
    name: "TV Shows",
    href: "#shows"
  }, {
    name: "Categories",
    href: "#categories"
  }, {
    name: "New Releases",
    href: "#new"
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group mx-[8px]">
            <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center shadow-glow bg-primary">
              <Coffee className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-heading text-2xl lg:text-3xl text-foreground tracking-wide bg-black/0 mx-0">
              WATCHERS 
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map(link => <a key={link.name} href={link.href} className="text-muted-foreground hover:text-foreground transition-colors duration-200 font-medium text-sm uppercase tracking-wider">
                {link.name}
              </a>)}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
            {/* Search */}
            <div className="hidden lg:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="text" placeholder="Search movies..." className="w-48 lg:w-64 h-10 pl-10 pr-4 rounded-full bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              </div>
            </div>

            {/* Notifications */}
            <button className="hidden lg:flex p-2 text-muted-foreground hover:text-foreground relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full" />
            </button>

            {/* Upload Button */}
            <Button variant="outline" size="sm" className="hidden lg:flex gap-2">
              <Upload className="w-4 h-4" />
              Upload
            </Button>

            {/* User Menu */}
            <button className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center hover:bg-muted transition-colors">
              <User className="w-5 h-5 text-muted-foreground" />
            </button>

            {/* Mobile Menu Toggle */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-muted-foreground hover:text-foreground">
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            <div className="flex flex-col gap-2">
              {navLinks.map(link => <a key={link.name} href={link.href} className="py-3 px-4 text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors font-medium">
                  {link.name}
                </a>)}
              <Button variant="outline" className="mt-2 gap-2">
                <Upload className="w-4 h-4" />
                Upload Video
              </Button>
            </div>
          </div>}
      </div>
    </nav>;
};
export default Navbar;
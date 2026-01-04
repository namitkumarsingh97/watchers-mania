import { Facebook, Twitter, Instagram, Youtube, Mail, Coffee } from "lucide-react";
const Footer = () => {
  const links = {
    browse: ["Movies", "TV Shows", "New Releases", "Most Popular", "Top Rated"],
    genres: ["Action", "Comedy", "Drama", "Horror", "Sci-Fi", "Romance"],
    help: ["Help Center", "Contact Us", "FAQ", "Accessibility", "Report Issue"],
    legal: ["Terms of Use", "Privacy Policy", "Cookie Policy", "DMCA"]
  };
  return <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-hero-gradient flex items-center justify-center bg-primary text-secondary-foreground">
                <Coffee className="w-6 h-6 text-primary-foreground" />
              </div>
              <span className="font-heading text-2xl text-foreground">CINEMAX</span>
            </a>
            <p className="text-muted-foreground text-sm mb-6">
              Your ultimate destination for movies and TV shows. Stream, discover, and share 
              the best entertainment content.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => <a key={index} href="#" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-primary transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </a>)}
            </div>
          </div>

          {/* Browse */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Browse</h3>
            <ul className="space-y-2">
              {links.browse.map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Genres */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Genres</h3>
            <ul className="space-y-2">
              {links.genres.map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-heading text-lg text-foreground mb-4">Help</h3>
            <ul className="space-y-2">
              {links.help.map(link => <li key={link}>
                  <a href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                    {link}
                  </a>
                </li>)}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <h3 className="font-heading text-lg text-foreground mb-4">Newsletter</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Subscribe for updates on new releases and exclusive content.
            </p>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input type="email" placeholder="Your email" className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm" />
              </div>
              <button className="h-10 px-4 rounded-lg bg-primary text-primary-foreground font-medium text-sm hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Cinemax. All rights reserved.
          </p>
          <div className="flex gap-6">
            {links.legal.map(link => <a key={link} href="#" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
                {link}
              </a>)}
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
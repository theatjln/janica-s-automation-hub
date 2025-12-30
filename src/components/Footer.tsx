import { Heart } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a
            href="#"
            className="text-xl font-heading font-bold text-primary"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            Janica Liz<span className="text-foreground">.</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} Janica Liz De Guzman. Made with{" "}
            <Heart className="w-4 h-4 text-primary fill-primary" /> in the Philippines.
          </p>

          {/* Back to Top */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            Back to Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
};

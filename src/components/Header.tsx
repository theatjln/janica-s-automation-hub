import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#tools", label: "Tools" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    // Set dark mode by default
    document.documentElement.classList.add("dark");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navLinks.map((link) => link.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark");
  };

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "py-3"
          : "py-5"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className={`flex items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
          isScrolled 
            ? "glass-card shadow-glass" 
            : "bg-transparent"
        }`}>
          {/* Logo */}
          <a
            href="#"
            className="text-xl md:text-2xl font-bold tracking-tight hover:opacity-80 transition-opacity"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <span className="text-primary">Janica Liz</span>
            <span className="text-foreground">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`nav-link px-4 py-2 text-sm ${
                  activeSection === link.href.slice(1) ? "active" : ""
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            {/* Dark Mode Toggle */}
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleDarkMode}
              className="rounded-xl hover:bg-muted/50 w-10 h-10"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5 text-tertiary" />
              ) : (
                <Moon className="h-5 w-5 text-primary" />
              )}
            </Button>

            {/* CTA Button - Desktop */}
            <a
              href="#contact"
              className="hidden md:inline-flex btn-hero text-sm py-2.5 px-6"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Hire Me
            </a>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden rounded-xl"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 p-4 animate-fade-in">
          <nav className="glass-card p-6 rounded-2xl flex flex-col gap-2 shadow-elevated">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-lg font-medium py-3 px-4 rounded-xl transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-hero text-center mt-4"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Hire Me
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

import { ArrowDown, Sparkles, Zap, Code, Database } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Background Elements */}
      <div className="absolute inset-0 bg-hero-pattern opacity-50" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tertiary/10 rounded-full blur-3xl animate-float delay-300" />
      
      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">7+ Years of Experience</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold mb-6 animate-fade-in delay-100">
            Technical Virtual
            <br />
            <span className="gradient-text">Assistant & Developer</span>
          </h1>

          {/* Professional Summary */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8 leading-relaxed animate-fade-in delay-200">
            Skilled professional with a strong background in web development, business operations support, 
            and workflow automation. Expert in optimizing processes using Zapier, Make, n8n, HighLevel CRM, 
            and various AI integrations. Achieved{" "}
            <span className="text-primary font-semibold">98% first-contact resolution</span> in e-payments support 
            and optimized websites to achieve{" "}
            <span className="text-tertiary font-semibold">90+ Lighthouse scores</span>.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-12 animate-fade-in delay-300">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">35%</p>
                <p className="text-xs text-muted-foreground">Tasks Automated</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                <Code className="w-5 h-5 text-tertiary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">15+</p>
                <p className="text-xs text-muted-foreground">Websites Built</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                <Database className="w-5 h-5 text-secondary" />
              </div>
              <div className="text-left">
                <p className="text-2xl font-bold text-foreground">25%</p>
                <p className="text-xs text-muted-foreground">Escalations Reduced</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-400">
            <a
              href="#contact"
              className="btn-hero"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Hire Me
            </a>
            <a
              href="#projects"
              className="btn-outline-hero"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              View My Work
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#services"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

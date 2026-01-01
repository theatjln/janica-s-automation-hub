import { ArrowDown, Sparkles, Zap, Code, Clock } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

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
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium text-primary">7+ Years of Technical Experience</span>
            </div>

            {/* Main Heading */} 
            <h1 className="text-4xl md:text-5xl lg:text-5xl font-heading font-bold mb-6 animate-fade-in delay-100">
              Technical Virtual
              <br />
              <span className="gradient-text">Assistant & Developer</span>
            </h1> 
            
            {/* Professional Summary */}
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed animate-fade-in delay-200">
              Hi, I’m Janica — Your <span className="text-secondary font-semibold">Workflow Automation Expert</span>.
      
              <span className="text-lg font-medium"><br/> I help busy entrepreneurs and teams automate repetitive tasks, connect tools seamlessly, and reclaim dozens of hours every week — using <span className="text-secondary font-semibold">Zapier, Make, n8n, and custom code</span>.</span>

              <span className="text-lg font-medium"> 7+ Years delivering 25%+ efficiency gains and rapid, reliable setups.</span>
            </p>


            {/* Stats Row */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10 animate-fade-in delay-300">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="w-5 h-5 text-primary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">35%-50%</p>
                  <p className="text-xs text-muted-foreground">Tasks Automated</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-tertiary/10 flex items-center justify-center">
                  <Code className="w-5 h-5 text-tertiary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">30+</p>
                  <p className="text-xs text-muted-foreground">Tools Connected</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div className="text-left">
                  <p className="text-2xl font-bold text-foreground">20+</p>
                  <p className="text-xs text-muted-foreground">Hours/Week Saved</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in delay-400">
              <a
                href="#contact"
                className="btn-hero"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Your Time Back →
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

          {/* Profile Photo */}
          <div className="order-1 lg:order-2 flex justify-center animate-fade-in delay-200">
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 scale-110" />
              <div className="absolute inset-0 rounded-full border-2 border-tertiary/10 scale-125" />
              
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 to-tertiary/30 blur-2xl scale-110" />
              
              {/* Image container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <img
                  src={profilePhoto}
                  alt="Janica Liz De Guzman - Technical Virtual Assistant"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              
              {/* Floating badge */}
              <div className="absolute -bottom-2 -right-2 bg-card border border-border px-4 py-2 rounded-full shadow-lg">
                {/* <span className="text-sm font-semibold text-primary">Open to Work</span> */}
              </div>
            </div>
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

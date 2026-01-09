import { ArrowDown, Sparkles, Zap, Code, Clock, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePhoto from "@/assets/profile-photo.png";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div className="orb w-[600px] h-[600px] bg-primary/20 top-[-200px] left-[-200px]" />
      <div className="orb w-[500px] h-[500px] bg-tertiary/15 bottom-[-150px] right-[-150px]" style={{ animationDelay: '-5s' }} />
      <div className="orb w-[400px] h-[400px] bg-secondary/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" style={{ animationDelay: '-10s' }} />

      {/* Background Image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20 dark:opacity-10"
        style={{ backgroundImage: `url(${heroBg})` }}
      />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                            linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }}
      />

      <div className="container mx-auto px-4 pt-28 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-card-subtle mb-10 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs font-mono uppercase tracking-wider text-primary">Available for Projects</span>
            </div>

            {/* Main Heading */}
            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in delay-100 leading-[1.1]">
              Technical Virtual
              <br />
              <span className="gradient-text-animated">Assistant & Developer</span>
            </h1>  */}

            {/* to restore */}
            {/* <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 animate-fade-in delay-100 leading-[1.1]">
              WordPress <span className="gradient-text-animated">Elementor </span> & <span className="gradient-text-animated">Automation</span> Specialist
              <br />
            </h1>  */}


            {/* temporary main heading */}
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-in delay-100 leading-[1.1]">
              Web <span className="gradient-text-animated">Designer </span> & <span className="gradient-text-animated">Developer</span> | E-commerce & Business <span className="gradient-text-animated">Automation</span>
              <br />
            </h1>

            {/* Professional Summary */}
            {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in delay-200">
              Hi, I'm <span className="text-foreground font-semibold">Janica</span> — Your{" "}
              <span className="text-secondary font-semibold">Workflow Automation Expert</span>.
              <br className="hidden sm:block" />
              <span className="mt-2 block">
                I help busy entrepreneurs and teams automate repetitive tasks, connect tools seamlessly, 
                and reclaim dozens of hours every week — using{" "}
                <span className="text-primary font-semibold">Zapier, Make, n8n, and custom code</span>.
              </span>
              <span className="mt-2 block text-base text-muted-foreground/80">
                Years of delivering efficiency gains and rapid, reliable setups.
              </span>
            </p> */}

            {/* to restore */}
            {/* <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in delay-200">
              Hi, I'm <span className="text-foreground font-semibold">Janica</span>, 
              <span className="mt-2 block">
                helping service businesses automate leads, CRM workflows, and website operations — using{" "}
              <span className="text-primary font-semibold">Zapier, Make, n8n, GoHighLevel, custom code  </span> and <span className="text-secondary font-semibold">WordPress Elementor</span>.
              </span> 
            </p> */}

            {/* temporary subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-10 leading-relaxed animate-fade-in delay-200">
              Hi, I'm <span className="text-foreground font-semibold">Janica</span>,
              {/* — Your{" "}
              <span className="text-secondary font-semibold">Workflow Automation Expert</span>,
              <br className="hidden sm:block" /> */}
              <span className="mt-2 block">
                helping service businesses automate leads, CRM workflows, and website operations — using{" "}
                <span className="text-primary font-semibold">Zapier, Make, n8n, GoHighLevel, custom code  </span> and <span className="text-secondary font-semibold">Shopify | WordPress Elementor + WooCommerce</span>.
              </span>
            </p>


            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-4 mb-12 animate-fade-in delay-300">
              <div className="stat-card text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-3">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">35-50%</p>
                <p className="text-xs text-muted-foreground mt-1">Tasks Automated</p>
              </div>
              <div className="stat-card text-center">
                <div className="w-12 h-12 rounded-xl bg-tertiary/10 flex items-center justify-center mx-auto mb-3">
                  <Code className="w-6 h-6 text-tertiary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">30+</p>
                <p className="text-xs text-muted-foreground mt-1">Tools Connected</p>
              </div>
              <div className="stat-card text-center">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-foreground">20+</p>
                <p className="text-xs text-muted-foreground mt-1">Hours/Week Saved</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 animate-fade-in delay-400">
              <a
                href="#contact"
                className="btn-hero group flex items-center gap-2"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get Your Time Back
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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
              {/* Animated rings */}
              <div className="absolute inset-0 rounded-full border border-primary/20 scale-110 animate-pulse" />
              <div className="absolute inset-0 rounded-full border border-tertiary/10 scale-[1.25]" style={{ animationDelay: '1s' }} />
              <div className="absolute inset-0 rounded-full border border-secondary/10 scale-[1.4]" style={{ animationDelay: '2s' }} />

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/30 via-tertiary/20 to-secondary/30 blur-3xl scale-110 animate-pulse" />

              {/* Rotating gradient border */}
              <div className="absolute inset-[-4px] rounded-full bg-gradient-conic from-primary via-tertiary to-primary animate-spin-slow opacity-50" />

              {/* Image container */}
              <div className="relative w-72 h-72 md:w-80 md:h-80 lg:w-[400px] lg:h-[400px] rounded-full overflow-hidden border-4 border-background shadow-elevated">
                <img
                  src={profilePhoto}
                  alt="Janica Liz De Guzman - Technical Virtual Assistant"
                  className="w-full h-full object-cover object-center"
                />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl animate-float shadow-elevated">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl animate-float shadow-elevated" style={{ animationDelay: '-2s' }}>
                <Code className="w-6 h-6 text-tertiary" />
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
            className="flex flex-col items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
          >
            <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
              <div className="w-1.5 h-3 rounded-full bg-current animate-bounce" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

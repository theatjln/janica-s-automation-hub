import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Twitter, Youtube, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-24 relative">
      {/* Background Elements */}
      <div className="absolute left-0 bottom-0 w-1/2 h-1/2 bg-gradient-to-tr from-primary/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your business with automation? Let's discuss how I can help.
          </p>
        </div>

        {/* Full-width, centered layout (no form) */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-12">
            {/* Contact Information Cards */}
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-8 text-center">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-8 mb-12">
                <a
                  href="mailto:janicalizdeguzman@gmail.com"
                  className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <Mail className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                      janicalizdeguzman@gmail.com
                    </p>
                  </div>
                </a>

                <a 
                  href="https://wa.me/60133864886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-tertiary/50 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center group-hover:bg-secondary/20 transition-colors">
                    <MessageCircle className="w-8 h-8 text-secondary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-lg group-hover:text-tertiary transition-colors">
                      +60 133 864 886
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+639958633866"
                  className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-tertiary/50 transition-all group"
                >
                  <div className="w-16 h-16 rounded-full bg-tertiary/10 flex items-center justify-center group-hover:bg-tertiary/20 transition-colors">
                    <Phone className="w-8 h-8 text-tertiary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-lg group-hover:text-tertiary transition-colors">
                      +63 995 863 3866
                    </p>
                  </div>
                </a>

                <div className="flex flex-col items-center gap-4 p-6 rounded-xl bg-card border border-border/50">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-lg">Davao City, Philippines</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-medium mb-6">Follow Me</h4>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/nica-de-guzman-a01270262/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61583945082101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.youtube.com/@automatewithnica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Youtube className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/automatewithnica/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a
                  href="https://x.com/automatewnica"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-muted flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all"
                >
                  <Twitter className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="p-8 bg-card border border-border/50 rounded-2xl max-w-2xl mx-auto">
              <h4 className="font-heading font-semibold text-center mb-6 text-lg">Quick Stats</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 text-center">
                <div>
                  <p className="text-3xl font-bold text-primary">7+</p>
                  <p className="text-sm text-muted-foreground mt-1">Technical Experience</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">35–50%</p>
                  <p className="text-sm text-muted-foreground mt-1">Tasks Automated</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">20+</p>
                  <p className="text-sm text-muted-foreground mt-1">Hours/Week Saved</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-secondary">30+</p>
                  <p className="text-sm text-muted-foreground mt-1">Tools Connected</p>
                </div>
                <div>
                  <p className="text-3xl font-bold text-primary">98%</p>
                  <p className="text-sm text-muted-foreground mt-1">Resolution Rate</p>
                </div>
              </div>
            </div>

            {/* Optional Big CTA Button */}
            <div className="text-center mt-8">
              <Button size="lg" className="btn-hero text-lg px-10" asChild>
                <a href="mailto:janicalizdeguzman@gmail.com">
                  <Mail className="w-5 h-5 mr-2" />
                  Email Me Directly
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
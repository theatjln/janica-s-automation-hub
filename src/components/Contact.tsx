import { Mail, MapPin, Phone, Linkedin, Facebook, Instagram, Twitter, Youtube, MessageCircle, ArrowRight, Briefcase, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      {/* Background Elements */}
      <div className="orb w-[600px] h-[600px] bg-primary/15 -left-48 bottom-0" />
      <div className="orb w-[400px] h-[400px] bg-tertiary/10 -right-32 top-1/4" style={{ animationDelay: '-8s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-subheading">Get In Touch</p>
          <h2 className="section-heading mb-6">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to streamline your business with automation? Let's discuss how I can help.
          </p>
        </div>

        {/* Full-width, centered layout */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-16">
            {/* Contact Information Cards */}
            <div>
              <h3 className="text-2xl font-bold mb-10 text-center">
                Contact Information
              </h3>

              <div className="grid sm:grid-cols-2 gap-6 mb-12">
                {/* <a
                  href="mailto:janicalizdeguzman@gmail.com"
                  className="group glass-card-subtle p-8 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Mail className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Email</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        janicalizdeguzman@gmail.com
                      </p>
                    </div>
                  </div>
                </a> */}

                <a
                  href="https://www.upwork.com/freelancers/~01770f2b271f27b901?mp_source=share"
                  className="group glass-card-subtle p-8 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Briefcase className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Upwork</p>
                      {/* <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                         janicalizdeguzman@gmail.com 
                      </p> */}
                    </div>
                  </div>
                </a>

               <a 
                  href="https://www.onlinejobs.ph/jobseekers/info/626518"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card-subtle p-8 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tertiary/20 to-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Laptop className="w-8 h-8 text-tertiary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Onlinejobs.ph</p>
                      {/* <p className="text-sm text-muted-foreground mb-1">WhatsApp</p> */}
                      {/* <p className="font-semibold text-lg group-hover:text-tertiary transition-colors">
                        +60 133 864 886
                      </p> */}
                    </div>
                  </div>
                </a> 

                {/* <a 
                  href="https://wa.me/60133864886"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-card-subtle p-8 hover:border-tertiary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-tertiary/20 to-tertiary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-8 h-8 text-tertiary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                      <p className="font-semibold text-lg group-hover:text-tertiary transition-colors">
                        +60 133 864 886
                      </p>
                    </div>
                  </div>
                </a> */}

                

                <a
                  href="tel:+639958633866"
                  className="group glass-card-subtle p-8 hover:border-primary/30 transition-all hover:-translate-y-1 hover:shadow-elevated"
                >
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Phone className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Phone</p>
                      <p className="font-semibold text-lg group-hover:text-primary transition-colors">
                        +63 995 863 3866
                      </p>
                    </div>
                  </div>
                </a>

                <div className="glass-card-subtle p-8">
                  <div className="flex flex-col items-center gap-5">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
                      <MapPin className="w-8 h-8 text-secondary" />
                    </div>
                    <div className="text-center">
                      <p className="text-sm text-muted-foreground mb-1">Location</p>
                      <p className="font-semibold text-lg">Davao City, Philippines</p>
                    </div>
                  </div>
                </div>
              </div>


            </div>

            {/* Social Links */}
            <div className="text-center">
              <h4 className="text-lg font-semibold mb-8">Follow Me</h4>
              <div className="flex items-center justify-center gap-4">
                {[
                  { href: "https://www.linkedin.com/in/nica-de-guzman-a01270262/", icon: Linkedin },
                  { href: "https://www.facebook.com/profile.php?id=61583945082101", icon: Facebook },
                  { href: "https://www.youtube.com/@automatewithnica", icon: Youtube },
                  { href: "https://www.instagram.com/automatewithnica/", icon: Instagram },
                  { href: "https://x.com/automatewnica", icon: Twitter },
                ].map(({ href, icon: Icon }) => (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-14 h-14 rounded-2xl glass-card-subtle flex items-center justify-center hover:border-primary/30 hover:text-primary hover:-translate-y-1 transition-all"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="glass-card p-10 rounded-3xl max-w-3xl mx-auto">
              <h4 className="font-bold text-center mb-8 text-xl">Quick Stats</h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">7+</p>
                  <p className="text-sm text-muted-foreground">Years Technical Experience</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary mb-2">35–50%</p>
                  <p className="text-sm text-muted-foreground">Tasks Automated</p>
                </div>
                <div>
                  <p className="text-4xl font-bold gradient-text mb-2">20+</p>
                  <p className="text-sm text-muted-foreground">Hours/Week Saved</p>
                </div>
                <div>
                  <p className="text-4xl font-bold text-secondary mb-2">30+</p>
                  <p className="text-sm text-muted-foreground">Tools Connected</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-4xl font-bold gradient-text mb-2">98%</p>
                  <p className="text-sm text-muted-foreground">Resolution Rate</p>
                </div>
              </div>
            </div>

            {/* Big CTA Button */}
            <div className="text-center">
              <a 
                href="mailto:janicalizdeguzman@gmail.com"
                className="btn-hero inline-flex items-center gap-3 text-lg px-10 py-5"
              >
                <Mail className="w-5 h-5" />
                Email Me Directly
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

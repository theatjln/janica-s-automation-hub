import { Quote, Star, User } from "lucide-react";

const testimonials = [
  {
    quote: "She is very inquisitive at every details about what she is doing and very resourceful, independent in handling different issue she encountered or given",
    author: "Fil Elman",
    role: "Digital Creator, Technical Lead, Web Developer",
    rating: 5,
  },
  {
    quote: "Janica delivers outstanding service as a Technical Virtual Assistant, combining deep expertise in full-stack web development with exceptional customer support skills. She is highly reliable, proactive, and always ready to provide expert technical assistance—whether troubleshooting complex issues, implementing automations, or optimizing workflows. Her vast technical knowledge and helpful, can-do attitude make her an invaluable asset to any team needing seamless, high-quality virtual support.",
    author: "Yana Ahmad",
    role: "Small Business Owner, Mechanical Engineer",
    rating: 5,
  },
  {
    quote: "Nica was really great! She attended to my concerns and even when I was being difficult about my request, she handled it with grace. Thank you so much!",
    author: "Anonymous",
    role: "Business Owner",
    rating: 5,
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-subheading">Client Feedback</p>
          <h2 className="section-heading mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative glass-card-subtle p-8 hover:border-primary/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-elevated"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-tertiary flex items-center justify-center shadow-glow">
                  <Quote className="w-5 h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-5 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center">
                  <User className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

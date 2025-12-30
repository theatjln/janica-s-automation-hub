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
    <section id="testimonials" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">Client Feedback</p>
          <h2 className="section-heading">
            What Clients <span className="text-primary">Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 left-6">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4 pt-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-primary text-primary"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground text-sm leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center">
                  <User className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm">
                    {testimonial.author}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

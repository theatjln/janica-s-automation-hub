import { 
  Workflow, 
  Code2, 
  Database, 
  Bot, 
  BarChart3, 
  Globe,
  Smartphone,
  Settings,
  Mail
} from "lucide-react";

const services = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Streamline operations using Zapier, Make, and n8n. Reduce manual tasks by 35% with intelligent automation.",
    tools: ["Zapier", "Make", "n8n"],
  },
  {
    icon: Code2,
    title: "Full-Stack Development",
    description: "Build responsive web applications with React, Node.js, and modern frameworks. Production websites delivered.",
    tools: ["React", "Node.js", "PHP", "Python"],
  },
  {
    icon: Database,
    title: "API Integration",
    description: "Connect systems seamlessly with REST APIs, payment gateways, and social integrations for unified workflows.",
    tools: ["Zapier", "Make","n8n","REST APIs", "Stripe"],
  },
  {
    icon: Bot,
    title: "AI & Prompt Engineering",
    description: "Leverage AI tools for intelligent data processing, content generation, and automated decision-making.",
    tools: ["GPT", "Gemini", "AI Agents", "Prompt Design"],
  },
  {
    icon: BarChart3,
    title: "CRM Management",
    description: "Optimize customer relationships with HighLevel, HubSpot, and custom CRM solutions with automated notifications.",
    tools: ["HighLevel", "Custom CRM"],
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Create high-performance websites with 90+ Lighthouse scores, reducing bounce rates by 30%.",
    tools: ["WordPress", "Shopify", "Elementor"],
  },
  {
    icon: Smartphone,
    title: "FinTech Support",
    description: "Expert e-payments support with 98% first-contact resolution. Top 1% in quality and empathy metrics.",
    tools: ["Payment Processing", "SaaS", "Troubleshooting"],
  },
  {
    icon: Settings,
    title: "Google Apps Script",
    description: "Automate Google Workspace workflows with custom scripts for data entry, notifications, and reports.",
    tools: ["Google Sheets", "Gmail", "Drive", "Calendar"],
  },
  {
    icon: Mail,
    title: "Admin & VA Services",
    description: "Comprehensive virtual assistant support including email management, scheduling, and data organization.",
    tools: ["Email", "Calendar", "Research", "Data Entry"],
  },
];

export const Services = () => {
  return (
    <section id="services" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1/3 h-1/2 bg-gradient-to-r from-primary/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">What I Offer</p>
          <h2 className="section-heading">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions to streamline your business operations, 
            automate workflows, and build powerful web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative bg-card border border-border/50 rounded-xl p-6 hover:border-primary/50 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-tertiary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tools.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

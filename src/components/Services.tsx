import { 
  Workflow, 
  Code2, 
  Database, 
  Bot, 
  BarChart3, 
  Globe,
  Smartphone,
  Settings,
  Mail,
  HandHelping,
  Layout
} from "lucide-react";

const services = [
  {
    icon: HandHelping,
    title: "Technical Virtual Assistance",
    description: "I help founders and online businesses manage websites, automate workflows, and handle technical systems so their operations run smoothly without stress.",
    tools: ["WordPress", "Elementor", "Zapier", "N8n", "Make (Integromat)", "Airtable", "Stripe", "Slack", "basic HTML/CSS/JavaScript"],
  },
  {
    icon: Workflow,
    title: "No-code Automation with Zapier and other tools",
    description: "Streamline operations using Zapier, Make, HighLevel Automation, and n8n. Reduce manual tasks by 35% with intelligent automation.",
    tools: ["Zapier", "Make", "n8n", "HighLevel"],
  },
  {
    icon: Layout,
    title: "WordPress Management (Elementor)",
    description: "I manage and maintain WordPress websites using Elementor, handling page edits, layout updates, plugin management, performance checks, and basic troubleshooting to keep your site secure, fast, and visually polished.",
    tools: ["WordPress", "Elementor", "Elementor Pro", "WP Plugins", "HTML/CSS", "basic SEO tools"],
  },
    {
    icon: BarChart3,
    title: "HighLevel CRM Setup & Optimization",
    description: "I set up and optimize GoHighLevel CRM by building funnels, automations, pipelines, forms, and integrations that streamline lead management, follow-ups, and client communication.",
    tools: ["GoHighLevel", "Custom CRM", "Stripe", "webhook integrations"],
  },
  {
    icon: Bot,
    title: "Chatbot & AI Automation",
    description: "I design, implement, and optimize AI-powered chatbots and automation workflows that handle customer inquiries, lead qualification, booking, and repetitive tasks—saving time while delivering consistent, personalized interactions.",
    tools: ["N8n", "Vapi", "Grok", "ChatGPT", "OpenAI", "webhook integrations"],
  },
  {
    icon: Database,
    title: "API & Payment Integration",
    description: "I connect and automate your apps, platforms, and payment systems by integrating APIs, setting up Stripe payment flows, and building custom connections—ensuring seamless data transfer and smooth online transactions.",
    tools: ["Stripe", "REST APIs","Webhooks","custom scripts (JavaScript)"],
  }, 
  {
    icon: Smartphone,
    title: "FinTech Support",
    description: "Expert e-payments support with 98% first-contact resolution. Top 1% in quality and empathy metrics.",
    tools: ["Payment Processing", "SaaS", "Troubleshooting"],
  },
  {
    icon: Code2,
    title: "Basic Web Development with AI and custom code",
    description: "AI-assisted front-end features and quick builds using HTML, CSS, and React/JavaScript to enhance website functionality and user experience.",
    tools: ["React", "JavaScript", "HTML", "CSS"],
  },
  {
    icon: Mail,
    title: "Customer Support and Technical Support",
    description: "Email, chat, and CRM-based support with a focus on technical issues, ensuring timely and effective resolutions.",
    tools: ["Slack", "Email", "Trello", "Asana", "Salesforce", "Twilio"],
  },
{
    icon: Globe,
    title: "Ongoing Support & Monthly Retainers",
    description: "Continuous optimization and technical assistance to ensure your systems run smoothly and adapt to evolving business needs.",
    tools: ["Zapier", "Make", "n8n", "HighLevel CRM", "WordPress (Elementor)", "Google Analytics", "Trello", "Asana", "Slack", "Email"],
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

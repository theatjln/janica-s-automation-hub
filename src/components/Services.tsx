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
  Layout,
  ArrowRight
} from "lucide-react";

const services = [
    {
    icon: Layout,
    title: "Shopify/WordPress Management (Elementor)",
    // description: "I manage and maintain WordPress websites using Elementor, handling landing page creation, page edits, layout updates, plugin management, performance checks, and basic troubleshooting to keep your site secure, fast, and visually polished.",
    description: "I manage landing page creation, site edits & fixes, speed & layout optimization, and form integrations.",
    tools: ["WordPress", "Elementor", "Shopify", "Liquid", "Elementor Pro", "WP Plugins", "HTML/CSS", "basic SEO tools"],
    gradient: "from-tertiary/20 to-secondary/20",
  },
  {
    icon: Workflow,
    title: "Business Automation & CRM Setup",
    description: "I make Zapier / Make / n8n workflows, GoHighLevel pipelines & follow-ups, and Forms → CRM → email automations.",
    tools: ["Zapier", "Make", "n8n", "HighLevel"],
    gradient: "from-secondary/20 to-primary/20",
  },
  {
    icon: Mail,
    title: "Ongoing Tech VA Support",
    description: "I do website updates, automation maintenance, and admin support system",
    tools: ["Slack", "Email", "Trello", "Asana", "Salesforce", "Twilio"],
  }
  //   {
  //   icon: Mail,
  //   title: "Customer Support and Technical Support",
  //   description: "Email, chat, and CRM-based support with a focus on technical issues, ensuring timely and effective resolutions.",
  //   tools: ["Slack", "Email", "Trello", "Asana", "Salesforce", "Twilio"],
  // },
  // {
  //   icon: Workflow,
  //   title: "No-code Automation with Zapier and other tools",
  //   description: "Streamline operations using Zapier, Make, HighLevel Automation, and n8n. Reduce manual tasks by 35% with intelligent automation.",
  //   tools: ["Zapier", "Make", "n8n", "HighLevel"],
  //   gradient: "from-secondary/20 to-primary/20",
  // },
  // {
  //   icon: HandHelping,
  //   title: "Technical Virtual Assistance",
  //   description: "I help founders and online businesses manage websites, automate workflows, and handle technical systems so their operations run smoothly without stress.",
  //   tools: ["WordPress", "Elementor", "Zapier", "N8n", "Make (Integromat)", "Airtable", "Stripe", "Slack", "basic HTML/CSS/JavaScript"],
  //   gradient: "from-primary/20 to-tertiary/20",
  // },

  // {
  //   icon: BarChart3,
  //   title: "HighLevel CRM Setup & Optimization",
  //   description: "I set up and optimize GoHighLevel CRM by building funnels, automations, pipelines, forms, and integrations that streamline lead management, follow-ups, and client communication.",
  //   tools: ["GoHighLevel", "Custom CRM", "Stripe", "webhook integrations"],
  //   gradient: "from-primary/20 to-secondary/20",
  // },
  // {
  //   icon: Bot,
  //   title: "Chatbot & AI Automation",
  //   description: "I design, implement, and optimize AI-powered chatbots and automation workflows that handle customer inquiries, lead qualification, booking, and repetitive tasks—saving time while delivering consistent, personalized interactions.",
  //   tools: ["N8n", "Vapi", "Grok", "ChatGPT", "OpenAI", "webhook integrations"],
  //   gradient: "from-secondary/20 to-tertiary/20",
  // },
  // {
  //   icon: Database,
  //   title: "API & Payment Integration",
  //   description: "I connect and automate your apps, platforms, and payment systems by integrating APIs, setting up Stripe payment flows, and building custom connections—ensuring seamless data transfer and smooth online transactions.",
  //   tools: ["Stripe", "REST APIs","Webhooks","custom scripts (JavaScript)"],
  //   gradient: "from-tertiary/20 to-primary/20",
  // },  
  // {
  //   icon: Smartphone,
  //   title: "FinTech Support",
  //   description: "Expert e-payments support with 98% first-contact resolution. Top 1% in quality and empathy metrics.",
  //   tools: ["Payment Processing", "SaaS", "Troubleshooting"],
  // },
  // {
  //   icon: Code2,
  //   title: "Basic Web Development with AI and custom code",
  //   description: "AI-assisted front-end features and quick builds using HTML, CSS, and React/JavaScript to enhance website functionality and user experience.",
  //   tools: ["React", "JavaScript", "HTML", "CSS"],
  // },
  // {
  //   icon: Mail,
  //   title: "Customer Support and Technical Support",
  //   description: "Email, chat, and CRM-based support with a focus on technical issues, ensuring timely and effective resolutions.",
  //   tools: ["Slack", "Email", "Trello", "Asana", "Salesforce", "Twilio"],
  // },
// {
//     icon: Globe,
//     title: "Ongoing Support & Monthly Retainers",
//     description: "Continuous optimization and technical assistance to ensure your systems run smoothly and adapt to evolving business needs.",
//     tools: ["Zapier", "Make", "n8n", "HighLevel CRM", "WordPress (Elementor)", "Google Analytics", "Trello", "Asana", "Slack", "Email"],
//   },
];

export const Services = () => {
  return (
    <section id="services" className="py-28 relative overflow-hidden">
      {/* Background accents */}
      <div className="orb w-[500px] h-[500px] bg-primary/10 -left-64 top-1/4" />
      <div className="orb w-[400px] h-[400px] bg-tertiary/10 -right-48 bottom-1/4" style={{ animationDelay: '-7s' }} />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-subheading">What I Offer</p>
          <h2 className="section-heading mb-6">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive technical solutions to streamline your business operations, 
            automate workflows, and build powerful web applications.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative glass-card-subtle p-8 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-elevated"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-tertiary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Tools Tags */}
                <div className="flex flex-wrap gap-2">
                  {service.tools.slice(0, 4).map((tool) => (
                    <span
                      key={tool}
                      className="text-xs px-3 py-1.5 rounded-full bg-muted/50 text-muted-foreground font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {service.tools.length > 4 && (
                    <span className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium">
                      +{service.tools.length - 4} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

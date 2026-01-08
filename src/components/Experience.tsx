import { useState } from "react";
import { ChevronDown, MapPin, Calendar, ExternalLink, Briefcase, GraduationCap, Award } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const experiences = [
  {
    title: "Workflow Automation Specialist",
    company: "Freelance",
    location: "Remote",
    period: "November 2025 – Present",
    duration: "3 months",
    highlights: [
      "Automated complex workflows using Zapier, Make.com, n8n, and GoHighLevel to streamline operations in sales, HR, and CRM systems, reducing manual tasks by 35–50%.",
      "Integrated AI tools for intelligent data processing, notifications, and analytics, enhancing efficiency and decision-making.",
      "Optimized manual operations and implemented CRM tweaks that minimized data entry by 35%."
    ],
  },
  {
    title: "Automation and Web Development Specialist",
    company: "HomeBased (Freelance Web Developer)",
    location: "Remote",
    period: "December 2017 – Present",
    duration: "7 years+",
    highlights: [
      "Designed and launched responsive WordPress/Elementor and Shopify websites, optimizing and reducing bounce rates by 30%+ through performance and SEO optimizations.",
      "Built CRM-connected automations using Zapier, Airtable, Google Sheets, and custom scripts for lead capture, QR payments, email sequences, and micro-business workflows.",
      "Delivered full-stack solutions integrating forms, payments, and CRM syncs to streamline client operations and boost conversions.",
    ],
  },
  {
    title: "E-Payments Account Specialist (Fintech SaaS)",
    company: "TDCX Malaysia",
    location: "Kuala Lumpur, Malaysia",
    period: "October 2023 – October 2025",
    duration: "2 years",
    highlights: [
      "Provided expert technical support and client onboarding via chat, email, and calls, achieving 98% first-contact resolution while ranking in the top 1% for solution quality and client empathy.",
      "Created internal JavaScript-based tools, macros, and support tasks to improve efficiency by 25% and significantly reduce escalation volumes.",
      "Earned Hall of Famer awards for 100% UIQ in Product Support Onboarding (December 2024, October 2024, May 2024).",
      "Advocated customer feedback for product evolution and suggested UX/API improvements.",
    ],
  },
  {
    title: "Full-Stack Developer | Sofware Development Department Operations Manager",
    company: "F-Squared, Inc.",
    location: "Davao, Philippines",
    period: "June 2018 – January 2019",
    duration: "8 months",
    highlights: [
      "Led a 4-developer team delivering React and PHP modules; implemented automated tests and code reviews.",
      "Mentored junior developers on JavaScript best practices, accessibility, and API handling.",
      "Developed full-stack solutions with integrated automations for seamless client workflows."
    ],
  },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of the Philippines",
    year: "2018",
    thesis: "Web-Based Software System for Schedule Management Notification Via Email, Social Networking Sites, and SMS",
  },
  {
    degree: "Front-End Web UI Frameworks and Tools: Bootstrap 4",
    institution: "The Hong Kong University of Science and Technology",
    year: "2020",
    grade: "100%",
  },
];


const certificationCategories = [
  {
    category: "Web Development & Web Design",
    certs: [
      { certificate: "Web Design for Web Developers (Nov 2021)", link: "https://drive.google.com/file/d/1YvnlXPgJgZl_O_Fqn85oxBrEKwMyJEK3/view?usp=sharing" },
      { certificate: "META React Basics (May 2025)", link: "https://drive.google.com/file/d/1ukAv1NB6az2aSUsZjDmp1cMDtlRvampf/view?usp=sharing" },
      { certificate: "META HTML & CSS In-Depth (May 2025)", link: "https://drive.google.com/file/d/1HUpRaIJb0ynNlfkAxRcCWm7P9KNstrKW/view?usp=sharing" },
      { certificate: "META Version Control (Apr 2023)", link: "https://drive.google.com/file/d/1xdwVOVkVZu9QvrQCYbI5f_ie-31ezOKX/view?usp=sharing" },
      { certificate: "META Programming with JavaScript (Apr 2023)", link: "https://drive.google.com/file/d/1QcxPpaSBohL3MRuhZX-m7BX7WTX51yfi/view?usp=sharing" },
      { certificate: "META Introduction to Frontend Development (Oct 2022)", link: "https://drive.google.com/file/d/1gO_pWyjhFOBf_vFrT4Qq1cBRYVFDsJAk/view?usp=sharing" },
      { certificate: "META Introduction to Frontend Development (Oct 2022)", link: "https://drive.google.com/file/d/1gO_pWyjhFOBf_vFrT4Qq1cBRYVFDsJAk/view?usp=sharing" },
      { certificate: "Introduction to Web and eCommerce User Experience Design (Feb 2020)", link: "https://drive.google.com/file/d/1xNSNS5nfjLlOzE1yA4_mw6vkW99jwa3u/view?usp=sharing" },
      { certificate: "Python 3 Programming Hub Google Developers Launchpad (Oct 2024)", link: "https://drive.google.com/file/d/16LdNu2UnJCpqC3f5P3Bq65hlpgGCIbFt/view?usp=sharing" },
    ],
  },
  {
    category: "WordPress/WooCommerce Management",
    certs: [
      { certificate: "WordPress Web Page Building and Maintenance (Dec 2025)", link: "https://drive.google.com/file/d/1itLvj3nFD9Q0bQBIxPsO5JO1NBLCoHbL/view?usp=sharing" },
    ],
  },
  {
    category: "Business Automation & CRM",
    certs: [
      { certificate: "Zapier - Automate Your Work (Oct 2025)", link: "https://drive.google.com/file/d/1ZaM1UJ4NrFhi8UaYm5ixAHtPWp4xMRxD/view?usp=sharing" },
      { certificate: "Zapier - Customize Your Zap (Oct 2025)", link: "https://drive.google.com/file/d/1L-Kl_NPH6INLMkF3MiyPatKitO51Jo2Z/view?usp=sharing" },
      { certificate: "Zapier - Build Your First Zap (Oct 2025)", link: "https://drive.google.com/file/d/1g5Ixo4_Rchf21T9yOUqjkljtbMD_lhHo/view?usp=sharing" },
      { certificate: "AI Automation with n8n (Dec 2025)", link: "https://drive.google.com/file/d/1w3yqNnMu8Akz8AM3TIWvP0Cs4X4f51TB/view?usp=sharing" },
      { certificate: "HighLevel CRM Full Training (Dec 2025)", link: "https://drive.google.com/file/d/1qL1GaAIA1V6OIQZdibaz-HifzhdUpY_L/view?usp=sharing" },
      { certificate: "No Code Automation with Make.com (Nov 2025)", link: "https://drive.google.com/file/d/1IXFxbTVmtgBICs-aL3xw1HlrEXlnW5vA/view?usp=sharing" },
      { certificate: "No Code Automation with Zapier (Nov 2025)", link: "https://drive.google.com/drive/folders/1waxrG-J3PDy10h5rQFP81h10NeQsU23e?usp=sharing" },
      { certificate: "Prompt Engineering (Nov 2025)", link: "https://drive.google.com/file/d/1OP_Vdt4YbDqRzwFO3DRpCGp2BzBUL1rl/view?usp=sharing" },
    ],
  },
  {
    category: "Artificial Intelligence",
    certs: [
      { certificate: "Artificial Intelligence Programming Hub Google Developers Launchpad (Nov 2024)", link: "https://drive.google.com/file/d/19_p7_01N0pHNk81Zw0HhXHNH63Nd1XcB/view?usp=sharing" },
      { certificate: "Data Science Programming Hub Google Developers Launchpad (Nov 2024)", link: "https://drive.google.com/file/d/19b04BzcapekaqWnE6iQMS8vxfaw6ba0r/view?usp=sharing" },
      { certificate: "Python 3 Programming Hub Google Developers Launchpad (Oct 2024)", link: "https://drive.google.com/file/d/16LdNu2UnJCpqC3f5P3Bq65hlpgGCIbFt/view?usp=sharing" },
    ]
  },
  {
    category: "Graphic Design & Multimedia",
    certs: [
      { certificate: "Canva Essentials (May 2025)", link: "https://drive.google.com/file/d/12E7QxsAAF7qehn5mobAacwo6X65vvKsK/view?usp=sharing" },
      { certificate: "Canva Graphic Desing Essentials (July 2025)", link: "https://drive.google.com/file/d/1fwJJNdfSuQEgbLlUggrA6HJxZqjFVFWG/view?usp=sharing" },
    ]
  },
  {
    category: "Tech VA Support",
    certs: [
      { certificate: "IT Basics Programming Hub Google Developers Launchpad (Nov 2024)", link: "https://drive.google.com/file/d/17rFH0TSQvD7oSsw7Eb_24ILEbOn9F7Gw/view?usp=sharing" },
      { certificate: "SQL for Data Analysis (Nov 2025)", link: "https://drive.google.com/file/d/1TF9vEnD2pIhx3_dkJpRoJyi7EsZqvmmH/view?usp=sharing" },
      { certificate: "CEFR EF SET English C2 Proficient (July 2025)", link: "https://drive.google.com/file/d/1i9c3i0WiV9e_5UEAwiB6SqEtmd9wU4kt/view?usp=sharing" },
      { certificate: "TESOL Certificate (June 2020)", link: "https://drive.google.com/file/d/1xAPAU_ihfevAHnLn7YqZH_kATFMR-SZd/view?usp=sharing" },
    ],
  },
];


export const Experience = () => {
  const [openItems, setOpenItems] = useState<number[]>([0, 1]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <p className="section-subheading">My Journey</p>
          <h2 className="section-heading mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-bold">Professional Experience</h3>
            </div>
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <div className="glass-card-subtle hover:border-primary/30 transition-all duration-300">
                    <CollapsibleTrigger className="w-full p-6 text-left flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-3">
                          <h4 className="text-lg font-bold text-foreground">
                            {exp.title}
                          </h4>
                          <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-semibold text-tertiary">{exp.company}</span>
                          {exp.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5" />
                              {exp.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <div className={`w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center transition-transform ${openItems.includes(index) ? "rotate-180" : ""}`}>
                        <ChevronDown className="w-4 h-4 text-muted-foreground" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-tertiary mt-2 shrink-0" />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              ))}
            </div>
          </div>

          {/* Education & Certifications Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div className="glass-card-subtle p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-tertiary/10 flex items-center justify-center">
                  <GraduationCap className="w-5 h-5 text-tertiary" />
                </div>
                <h3 className="text-lg font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative pl-5 border-l-2 border-tertiary/30">
                    <p className="font-semibold text-foreground text-sm">{edu.degree}</p>
                    <p className="text-xs text-tertiary font-medium mt-1">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground mt-0.5">{edu.year}</p>
                    {edu.thesis && (
                      <p className="text-xs text-muted-foreground mt-2 italic leading-relaxed">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-xs text-primary mt-1 font-semibold">Grade: {edu.grade}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-card-subtle p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-bold">Certifications</h3>
              </div>
              <div className="space-y-4 max-h-80 overflow-y-auto pr-2">
                {certificationCategories.map((category, catIndex) => (
                  <div key={catIndex}>
                    <p className="text-xs font-semibold text-tertiary mb-2">{category.category}</p>
                    <div className="space-y-1 pl-2 border-l-2 border-tertiary/20">
                      {category.certs.map((cert, index) => (
                        <a
                          href={cert.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={index}
                          className="group flex items-start gap-2 text-xs text-muted-foreground hover:text-primary transition-colors p-1.5 rounded-lg hover:bg-primary/5"
                        >
                          <ExternalLink className="w-3 h-3 mt-0.5 text-primary shrink-0 group-hover:scale-110 transition-transform" />
                          <span className="leading-relaxed">{cert.certificate}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

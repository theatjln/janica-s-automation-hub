import { useState } from "react";
import { ChevronDown, MapPin, Calendar, ExternalLink } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const experiences = [
  {
    title: "Workflow Automation Specialist",
    company: "Freelance",
    location: "Remote",
    period: "November 2025 – Present",
    duration: "3 months",
    highlights: [
      "Automated complex workflows using Zapier, Make, and n8n to streamline operations in sales, HR, and CRM systems, reducing manual tasks by 35% to 50%.",
      "Integrated AI tools for intelligent data processing, notifications, and analytics, enhancing efficiency and decision-making.",
      "Optimized manual operations and implemented CRM tweaks that minimized data entry by 35%.",
    ],
  },
  {
    title: "E-payments Account Specialist",
    company: "TDCX (FinTech SaaS)",
    location: "Kuala Lumpur, Malaysia",
    period: "October 2023 – October 2025",
    duration: "2 years",
    highlights: [
      "Delivered exceptional customer support via chat, outbound calls, and email, achieving 98% first-contact resolution and top 1% in quality and empathy metrics.",
      "Created internal JavaScript-based tools, macros, and support tasks to improve efficiency by 25% and significantly reduce escalation volumes.",
      "Earned Hall of Famer awards for 100% UIQ in Product Support Onboarding (December 2024, October 2024, May 2024).",
      "Advocated customer feedback for product evolution and suggested UX/API improvements.",
    ],
  },
  {
    title: "Automation and CRM Management Specialist",
    company: "HomeBased (Freelance Web Developer)",
    location: "Remote",
    period: "December 2022 – Present",
    duration: "3 years",
    highlights: [
      "Managed CRM systems with automations for notifications via email, SMS, and social networks.",
      "Designed and shipped websites using React, WordPress, and Shopify, emphasizing responsive UI and performance optimization.",
      "Optimized Lighthouse scores to 90+ and reduced bounce rates by 30% through automated QR payments and email automations.",
    ],
  },
  {
    title: "Virtual Assistant",
    company: "Pineapple Virtual Assistant Hub Agency",
    location: "Remote",
    period: "February 2023 – October 2023",
    duration: "8 months",
    highlights: [
      "Enhanced Shopify websites for better user experience and functionality using automation tools.",
      "Conducted extensive web research on diverse topics to deliver insightful analyses.",
      "Scheduled, managed, and automated email campaigns to increase engagement and sales.",
      "Created visually appealing marketing content, including graphics and multimedia with Canva.",
    ],
  },
  {
    title: "API Integration Developer",
    company: "Freelance",
    location: "Remote",
    period: "February 2019 – October 2023",
    duration: "4 years 9 months",
    highlights: [
      "Integrated APIs (Twitter, Facebook, Stripe Gateway, SMS Messaging) into web applications for seamless functionality.",
      "Developed full-stack solutions with Node.js, Express, React, and databases like Supabase and Prisma.",
      "Collaborated on MVP development, ensuring API-driven features for payment processing and social integrations.",
    ],
  },
  {
    title: "Full-Stack Developer",
    company: "F-Squared, Inc.",
    location: "Davao, Philippines",
    period: "June 2018 – January 2019",
    duration: "8 months",
    highlights: [
      "Led a 4-developer team in delivering React and PHP modules, implementing automated tests and code reviews.",
      "Mentored junior developers on JavaScript best practices, accessibility, and API handling.",
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

// const certifications = [
//   "WordPress Web Page Building and Maintenance (Dec 2025)",
//   "AI Automation with n8n (Dec 2025)",
//   "HighLevel CRM Full Training (Dec 2025)",
//   "Prompt Engineering (Nov 2025)",
//   "No Code Automation with Make.com (Nov 2025)",
//   "No Code Automation with Zapier (Nov 2025)",
//   "SQL for Data Analysis (Nov 2025)",
//   "META React Basics (May 2025)",
//   "META HTML & CSS In-Depth (May 2025)",
//   "CEFR EF SET English C2 Proficient (July 2025)",
// ];

const certifications = [
  {certfificate:"WordPress Web Page Building and Maintenance (Dec 2025)", link: "https://drive.google.com/file/d/1itLvj3nFD9Q0bQBIxPsO5JO1NBLCoHbL/view?usp=sharing"},
  {certfificate:"AI Automation with n8n (Dec 2025)", link: "https://drive.google.com/file/d/1w3yqNnMu8Akz8AM3TIWvP0Cs4X4f51TB/view?usp=sharing"},
  {certfificate:"HighLevel CRM Full Training (Dec 2025)", link: "https://drive.google.com/file/d/1qL1GaAIA1V6OIQZdibaz-HifzhdUpY_L/view?usp=sharing"},
  {certfificate:"Prompt Engineering (Nov 2025)", link: "https://drive.google.com/file/d/1OP_Vdt4YbDqRzwFO3DRpCGp2BzBUL1rl/view?usp=sharing"},
  {certfificate:"No Code Automation with Make.com (Nov 2025)", link: "https://drive.google.com/file/d/1IXFxbTVmtgBICs-aL3xw1HlrEXlnW5vA/view?usp=sharing"},
  {certfificate:"No Code Automation with Zapier (Nov 2025)", link: "https://drive.google.com/drive/folders/1waxrG-J3PDy10h5rQFP81h10NeQsU23e?usp=sharing"},
  {certfificate:"SQL for Data Analysis (Nov 2025)", link: "https://drive.google.com/file/d/1TF9vEnD2pIhx3_dkJpRoJyi7EsZqvmmH/view?usp=drive_link"},
  {certfificate:"META React Basics (May 2025)", link: "https://drive.google.com/file/d/1ukAv1NB6az2aSUsZjDmp1cMDtlRvampf/view?usp=sharing"},
  {certfificate:"META HTML & CSS In-Depth (May 2025)", link: "https://drive.google.com/file/d/1HUpRaIJb0ynNlfkAxRcCWm7P9KNstrKW/view?usp=sharing"},
  {certfificate:"CEFR EF SET English C2 Proficient (July 2025)", link: "https://drive.google.com/file/d/1i9c3i0WiV9e_5UEAwiB6SqEtmd9wU4kt/view?usp=sharing"},
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
    <section id="experience" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-subheading">My Journey</p>
          <h2 className="section-heading">
            Work <span className="text-primary">Experience</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <Collapsible
                  key={index}
                  open={openItems.includes(index)}
                  onOpenChange={() => toggleItem(index)}
                >
                  <div className="bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/30 transition-colors">
                    <CollapsibleTrigger className="w-full p-6 text-left flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-2 mb-2">
                          <h3 className="text-lg font-heading font-semibold text-foreground">
                            {exp.title}
                          </h3>
                          <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                            {exp.duration}
                          </span>
                        </div>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                          <span className="font-medium text-tertiary">{exp.company}</span>
                          {exp.location && (
                            <span className="flex items-center gap-1">
                              <MapPin className="w-3 h-3" />
                              {exp.location}
                            </span>
                          )}
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {exp.period}
                          </span>
                        </div>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-muted-foreground transition-transform ${
                          openItems.includes(index) ? "rotate-180" : ""
                        }`}
                      />
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        <ul className="space-y-3">
                          {exp.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-start gap-3 text-sm text-muted-foreground"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
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
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-heading font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-tertiary" />
                Education
              </h3>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-tertiary/30 pl-4">
                    <p className="font-medium text-foreground text-sm">{edu.degree}</p>
                    <p className="text-xs text-tertiary">{edu.institution}</p>
                    <p className="text-xs text-muted-foreground">{edu.year}</p>
                    {edu.thesis && (
                      <p className="text-xs text-muted-foreground mt-1 italic">
                        Thesis: {edu.thesis}
                      </p>
                    )}
                    {edu.grade && (
                      <p className="text-xs text-primary mt-1">Grade: {edu.grade}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-card border border-border/50 rounded-xl p-6">
              <h3 className="text-lg font-heading font-semibold mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Certifications
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {certifications.map((cert, index) => (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={index}
                    className="flex items-start gap-2 text-xs text-muted-foreground"
                  >
                    <ExternalLink className="w-3 h-3 mt-0.5 text-primary shrink-0" />
                    {cert.certfificate}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

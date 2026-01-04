import zapierLogo from "@/assets/tools/zapier.svg";
import makeLogo from "@/assets/tools/make.svg";
import n8nLogo from "@/assets/tools/n8n.svg";
import gohighlevelLogo from "@/assets/tools/gohighlevel.png";
import wordpressLogo from "@/assets/tools/wordpress.svg";
import elementorLogo from "@/assets/tools/elementor.svg";
import asanaLogo from "@/assets/tools/asana.svg";
import slackLogo from "@/assets/tools/slack.svg";
import gmailLogo from "@/assets/tools/gmail.svg";
import googledriveLogo from "@/assets/tools/googledrive.svg";
import xeroLogo from "@/assets/tools/xero.svg";
import airtableLogo from "@/assets/tools/airtable.svg";
import githubLogo from "@/assets/tools/github.svg";
import reactLogo from "@/assets/tools/react.svg";
import javascriptLogo from "@/assets/tools/javascript.svg";
import htmlLogo from "@/assets/tools/html.svg";
import cssLogo from "@/assets/tools/css.svg";
import clonewebxLogo from "@/assets/tools/clonewebx.png";
import lovableLogo from "@/assets/tools/lovable.png";

const tools = [
  { name: "Zapier", logo: zapierLogo },
  { name: "Make.com", logo: makeLogo },
  { name: "n8n", logo: n8nLogo },
  { name: "GoHighLevel", logo: gohighlevelLogo },
  { name: "WordPress", logo: wordpressLogo },
  { name: "Elementor", logo: elementorLogo },
  { name: "Asana", logo: asanaLogo },
  { name: "Slack", logo: slackLogo },
  { name: "Gmail / Google Workspace", logo: gmailLogo },
  { name: "Google Drive", logo: googledriveLogo },
  { name: "Xero", logo: xeroLogo },
  { name: "Airtable", logo: airtableLogo },
  { name: "GitHub", logo: githubLogo },
  { name: "React", logo: reactLogo },
  { name: "JavaScript", logo: javascriptLogo },
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "CloneWebX", logo: clonewebxLogo },
  { name: "Lovable.dev", logo: lovableLogo },
];

export const Tools = () => {
  return (
    <section id="tools" className="py-24 relative overflow-hidden">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-transparent to-muted/30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <p className="section-subheading">Tech Stack</p>
          <h2 className="section-heading mb-6">
            Tools I <span className="gradient-text">Use</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Expertise across industry-leading automation, productivity, and development platforms
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 md:gap-6 max-w-5xl mx-auto">
          {tools.map((tool, index) => (
            <div
              key={tool.name}
              className="group glass-card-subtle p-5 hover:border-primary/30 hover:shadow-glow transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-background/50 group-hover:bg-primary/10 transition-colors">
                  <img
                    src={tool.logo}
                    alt={`${tool.name} logo`}
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium leading-tight">
                  {tool.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

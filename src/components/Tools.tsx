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
];

export const Tools = () => {
  return (
    <section id="tools" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="section-heading">Tools I <span className="text-primary">Use</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Expertise across industry-leading automation, productivity, and development platforms
          </p>
        </div>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 max-w-4xl mx-auto">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="group flex flex-col items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
            >
              <div className="w-12 h-12 flex items-center justify-center">
                <img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs text-center text-muted-foreground group-hover:text-foreground transition-colors font-medium">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

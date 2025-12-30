import { useState } from "react";
import { Play, X, ExternalLink, Filter } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";

// Import project screenshots
import gohighlevelLeadCapture from "@/assets/projects/gohighlevel-lead-capture.png";
import n8nAiAppointmentSetter from "@/assets/projects/n8n-ai-appointment-setter.png";
import n8nYoutubeReelsCreator from "@/assets/projects/n8n-youtube-reels-creator.png";
import n8nSocialMediaContent from "@/assets/projects/n8n-social-media-content.png";
import n8nAiAgentFacebook from "@/assets/projects/n8n-ai-agent-facebook.png";
import makeGmailAttachments from "@/assets/projects/make-gmail-attachments.png";
import makeXeroAsana from "@/assets/projects/make-xero-asana.png";
import makeSlackAlerts from "@/assets/projects/make-slack-alerts.png";

interface Project {
  id: string;
  title: string;
  tool: "Zapier" | "Make" | "n8n" | "GoHighLevel";
  description: string;
  impact: string;
  image: string;
  videoUrl?: string;
  techStack: string[];
  isAiFocused?: boolean;
}

const projects: Project[] = [
  {
    id: "zapier-webform-notification",
    title: "Zapier – Webform Notification Email",
    tool: "Zapier",
    description: "Automated email notifications triggered by web form submissions for instant lead response.",
    impact: "Reduced response time by 80%",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/1qxrOK8AgD3jRbVwfhysk-drnbywPNkXR/preview",
    techStack: ["Zapier", "Email", "Webforms"],
  },
  {
    id: "zapier-slack-notifier",
    title: "Zapier – Slack Task Notifier",
    tool: "Zapier",
    description: "Real-time Slack notifications for task updates and team collaboration.",
    impact: "Improved team communication",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/12AWNw9Ds8kSQWDDEieGWylByKenj8Msl/preview",
    techStack: ["Zapier", "Slack", "Task Management"],
  },
  {
    id: "zapier-task-updater",
    title: "Zapier – Task Updater",
    tool: "Zapier",
    description: "Automated task status updates across multiple project management tools.",
    impact: "Saved 10+ hours weekly",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/1C8lNieRkFVK3z7KbjT9vnQULAn9G5Gbo/preview",
    techStack: ["Zapier", "Asana", "Trello"],
  },
  {
    id: "zapier-sub-zap",
    title: "Zapier – Sub-Zap Task Updater",
    tool: "Zapier",
    description: "Complex multi-step automation calling sub-zaps for modular workflow design.",
    impact: "Modular automation architecture",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/1ZJvVC1JsyEz4Jj-ql6JP3HWtcB0HyI4_/preview",
    techStack: ["Zapier", "Sub-Zaps", "Workflow"],
  },
  {
    id: "zapier-ai-content",
    title: "Zapier – AI Content Repurposing",
    tool: "Zapier",
    description: "AI-powered content transformation for multi-platform distribution.",
    impact: "3x content output",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/1XEJKxlv-LSCnbXvwKRvDyBCcR0KavkRE/preview",
    techStack: ["Zapier", "AI/GPT", "Content Marketing"],
    isAiFocused: true,
  },
  {
    id: "zapier-leads-enrichment",
    title: "Zapier – Leads Enrichment",
    tool: "Zapier",
    description: "Automated lead data enrichment from multiple sources for sales intelligence.",
    impact: "Increased lead quality by 40%",
    image: "/placeholder.svg",
    videoUrl: "https://drive.google.com/file/d/1rmsd7ycj63hd7JDyzuKnlRIpIRW9BAEH/preview",
    techStack: ["Zapier", "CRM", "Data Enrichment"],
  },
  {
    id: "make-slack-alerts",
    title: "Make – Lead Source-Based Slack Alerts",
    tool: "Make",
    description: "Dynamic Slack routing based on lead source for targeted team notifications.",
    impact: "50% faster lead assignment",
    image: makeSlackAlerts,
    videoUrl: "https://drive.google.com/file/d/18aPUxQ7qmpDAL9IgCF4bdAe5HStOqnuF/preview",
    techStack: ["Make.com", "Slack", "Google Sheets"],
  },
  {
    id: "make-xero-asana",
    title: "Make – Xero to Asana Reports",
    tool: "Make",
    description: "Automated financial report delivery from Xero accounting to Asana tasks.",
    impact: "Eliminated manual reporting",
    image: makeXeroAsana,
    videoUrl: "https://drive.google.com/file/d/1snedS7yHxogTDijkxGJkCM5ZWEFol0m-/preview",
    techStack: ["Make.com", "Xero", "Asana"],
  },
  {
    id: "make-gmail-attachments",
    title: "Make – Auto Sort Gmail Attachments",
    tool: "Make",
    description: "AI-powered email attachment sorting and organization on Google Drive.",
    impact: "100% organized file system",
    image: makeGmailAttachments,
    videoUrl: "https://drive.google.com/file/d/1T9zD9_33w2NubfmTSpFnUDEUxDpbDktz/preview",
    techStack: ["Make.com", "Gmail", "Google Drive", "Gemini AI"],
    isAiFocused: true,
  },
  {
    id: "n8n-ai-facebook",
    title: "n8n – AI Agent for Facebook",
    tool: "n8n",
    description: "Intelligent Facebook automation with AI-powered responses and content management.",
    impact: "24/7 automated engagement",
    image: n8nAiAgentFacebook,
    videoUrl: "https://drive.google.com/file/d/1a3FRrBbOlq0aQpzr6Gc_IJAO7gg7k3ah/preview",
    techStack: ["n8n", "Facebook API", "Google Gemini"],
    isAiFocused: true,
  },
  {
    id: "n8n-social-content",
    title: "n8n – AI Social Media Content Creator",
    tool: "n8n",
    description: "Automated social media content generation with weather-aware personalization.",
    impact: "5x content velocity",
    image: n8nSocialMediaContent,
    videoUrl: "https://drive.google.com/file/d/1S2U1zy2u1kF8HQzdFfeyz6VceJFdaghx/preview",
    techStack: ["n8n", "AI", "Facebook API", "OpenWeatherMap"],
    isAiFocused: true,
  },
  {
    id: "n8n-youtube-reels",
    title: "n8n – YouTube Shorts & Reels Creator",
    tool: "n8n",
    description: "Automated video content creation and publishing to YouTube and Facebook.",
    impact: "Automated video pipeline",
    image: n8nYoutubeReelsCreator,
    videoUrl: "https://drive.google.com/file/d/10PMwdVOF3HE2KpTK6e0RjVkR3kUVorZP/preview",
    techStack: ["n8n", "YouTube API", "Facebook API", "Video Generation"],
    isAiFocused: true,
  },
  {
    id: "n8n-appointment-setter",
    title: "n8n – AI Appointment Setter",
    tool: "n8n",
    description: "Intelligent appointment booking with calendar integration and automated confirmations.",
    impact: "Reduced no-shows by 60%",
    image: n8nAiAppointmentSetter,
    videoUrl: "https://drive.google.com/file/d/1qmvI1UHBH2jzmGU3_3H5ek9wy-GDz6YX/preview",
    techStack: ["n8n", "Calendar API", "AI", "Webhooks"],
    isAiFocused: true,
  },
  {
    id: "gohighlevel-lead-capture",
    title: "GoHighLevel – Lead Capture & Follow-ups",
    tool: "GoHighLevel",
    description: "Complete lead capture workflow with instant SMS, calls, and contract sending.",
    impact: "85% lead conversion improvement",
    image: gohighlevelLeadCapture,
    techStack: ["GoHighLevel", "SMS", "Calls", "Contracts"],
  },
];

const filterOptions = ["All", "Zapier", "Make", "n8n", "GoHighLevel", "AI-Focused"];

const toolColors: Record<string, string> = {
  Zapier: "tool-badge zapier",
  Make: "tool-badge make",
  n8n: "tool-badge n8n",
  GoHighLevel: "tool-badge gohighlevel",
};

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (activeFilter === "All") return true;
    if (activeFilter === "AI-Focused") return project.isAiFocused;
    if (activeFilter === "Make") return project.tool === "Make";
    return project.tool === activeFilter;
  });

  return (
    <section id="projects" className="py-24 relative">
      {/* Background Accent */}
      <div className="absolute right-0 top-1/3 w-1/3 h-1/2 bg-gradient-to-l from-tertiary/5 to-transparent blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="section-subheading">Portfolio</p>
          <h2 className="section-heading">
            Automation Projects & <span className="text-primary">Live Demos</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Explore my automation workflows and watch live demos showcasing real-world implementations.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <Filter className="w-4 h-4 text-muted-foreground mr-2" />
          {filterOptions.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? "active" : ""}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="project-card group cursor-pointer"
              onClick={() => setSelectedProject(project)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60" />
                
                {/* Tool Badge */}
                <div className="absolute top-3 left-3 z-10">
                  <span className={toolColors[project.tool]}>
                    {project.tool}
                  </span>
                </div>

                {/* AI Badge */}
                {project.isAiFocused && (
                  <div className="absolute top-3 right-3 z-10">
                    <span className="tool-badge bg-gradient-to-r from-primary/20 to-tertiary/20 text-primary">
                      AI
                    </span>
                  </div>
                )}

                {/* Play Button */}
                {project.videoUrl && (
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 z-20">
                    <div className="w-14 h-14 rounded-full bg-primary/90 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform animate-pulse-glow">
                      <Play className="w-6 h-6 text-primary-foreground ml-1" />
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4 relative z-10">
                <h3 className="font-heading font-semibold text-sm mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                  {project.title.replace(`${project.tool} – `, "")}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 mb-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-tertiary">{project.impact}</span>
                  {project.videoUrl && (
                    <ExternalLink className="w-3 h-3 text-muted-foreground" />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
        <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto p-0 gap-0">
          <VisuallyHidden>
            <DialogTitle>{selectedProject?.title || "Project Details"}</DialogTitle>
            <DialogDescription>{selectedProject?.description || "Project details and demo video"}</DialogDescription>
          </VisuallyHidden>
          
          {selectedProject && (
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side */}
              <div className="relative bg-muted aspect-video md:aspect-auto md:h-full min-h-[300px]">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className={toolColors[selectedProject.tool]}>
                    {selectedProject.tool}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-6 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-xl font-heading font-bold mb-2">
                    {selectedProject.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {selectedProject.description}
                  </p>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-sm font-semibold text-primary">Impact:</span>
                    <span className="text-sm text-tertiary">{selectedProject.impact}</span>
                  </div>
                </div>

                {/* Video Embed */}
                {selectedProject.videoUrl && (
                  <div className="flex-1 min-h-[200px] mb-4">
                    <iframe
                      src={selectedProject.videoUrl}
                      className="w-full h-full rounded-lg"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      title={`${selectedProject.title} Demo`}
                    />
                  </div>
                )}

                {/* Tech Stack */}
                <div>
                  <p className="text-xs text-muted-foreground mb-2">Tech Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-3 py-1 rounded-full bg-muted text-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

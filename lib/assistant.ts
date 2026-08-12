import { knowledge } from "./knowledge";

export interface AIResponse {
  message: string;
  action?: "navigate";
  target?: string;
}

type Command = {
  keywords: string[];
  execute: () => AIResponse;
};

const commands: Command[] = [
  {
    keywords: ["resume", "cv", "download resume"],
    execute: () => ({
      message: "Opening your resume...",
      action: "navigate",
      target: "/resume",
    }),
  },

  {
    keywords: ["projects", "portfolio", "project"],
    execute: () => ({
      message: `Opening Projects. I found ${knowledge.projects.length} featured projects.`,
      action: "navigate",
      target: "/projects",
    }),
  },

  {
    keywords: ["certificate", "certificates", "cybersecurity"],
    execute: () => ({
      message: "Opening Certificates...",
      action: "navigate",
      target: "/certificates",
    }),
  },

  {
    keywords: ["contact", "email"],
    execute: () => ({
      message: "Opening Contact page...",
      action: "navigate",
      target: "/contact",
    }),
  },

  {
    keywords: ["skills", "technology"],
    execute: () => ({
      message: "Opening Skills section...",
      action: "navigate",
      target: "/#skills",
    }),
  },

  {
    keywords: ["journey", "timeline"],
    execute: () => ({
      message: "Opening Journey...",
      action: "navigate",
      target: "/#journey",
    }),
  },

  {
    keywords: ["about", "who", "aaditya"],
    execute: () => ({
      message:
        "Aaditya is a developer, cybersecurity learner, and future AI engineer focused on building modern web applications.",
    }),
  },
];

export function getAssistantResponse(input: string): AIResponse {
  const query = input.toLowerCase();

  const command = commands.find((command) =>
    command.keywords.some((keyword) =>
      query.includes(keyword)
    )
  );

  if (command) {
    return command.execute();
  }

  return {
    message:
      "I couldn't understand that. Try asking about projects, certificates, skills, resume, or Aaditya.",
  };
}
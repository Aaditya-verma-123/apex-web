"use client";

import {
  createContext,
  useContext,
  useState,
} from "react";

import { getAssistantResponse } from "@/lib/assistant";

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface AIContextType {
  open: boolean;
  setOpen: (value: boolean) => void;

  messages: Message[];

  thinking: boolean;

  sendMessage: (content: string) => void;

  clearMessages: () => void;
}

const AIContext =
  createContext<AIContextType | null>(null);

export function AIProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const [thinking, setThinking] =
    useState(false);

  const [messages, setMessages] =
    useState<Message[]>([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Hi 👋 I'm APEX AI. Ask me anything about Aaditya, his projects, certificates, skills or resume.",
      },
    ]);

  function addMessage(
    role: "user" | "assistant",
    content: string
  ) {
    setMessages((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        role,
        content,
      },
    ]);
  }

  function sendMessage(content: string) {
    addMessage("user", content);

    setThinking(true);

    setTimeout(() => {
      const response = getAssistantResponse(content);

addMessage("assistant", response.message);

if (
  response.action === "navigate" &&
  response.target
) {
  setTimeout(() => {
    window.location.href = response.target!;
  }, 800);
}

      setThinking(false);
    }, 900);
  }

  function clearMessages() {
    setMessages([
      {
        id: crypto.randomUUID(),
        role: "assistant",
        content:
          "Hi 👋 I'm APEX AI. Ask me anything about Aaditya.",
      },
    ]);
  }

  return (
    <AIContext.Provider
      value={{
        open,
        setOpen,
        messages,
        thinking,
        sendMessage,
        clearMessages,
      }}
    >
      {children}
    </AIContext.Provider>
  );
}

export function useAI() {
  const context = useContext(AIContext);

  if (!context) {
    throw new Error(
      "useAI must be used inside AIProvider."
    );
  }

  return context;
}
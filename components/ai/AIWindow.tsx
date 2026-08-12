"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "framer-motion";

import { useAI } from "@/context/AIContext";
import AIQuickActions from "./AIQuickActions";

import AIMessage from "./AIMessage";
import AISuggestions from "./AISuggestions";
import AIInput from "./AIInput";
import AITyping from "./AITyping";

export default function AIWindow() {
  const {
    open,
    setOpen,
    messages,
    thinking,
  } = useAI();
  const bottomRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  bottomRef.current?.scrollIntoView({
    behavior: "smooth",
  });
}, [messages, thinking]);

  return (
    
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
            scale: 0.95,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          transition={{
            duration: 0.25,
          }}
          className="
            fixed
            bottom-24
            right-24
            z-[1000]
            flex
            h-[650px]
            w-[calc(100vw-2rem)]
max-w-[420px]
            flex-col
            overflow-hidden
            rounded-3xl
            border
            border-white/10
            bg-zinc-950/95
            backdrop-blur-2xl
            shadow-2xl
          "
        >
          {/* Header */}

          <div className="flex items-center justify-between border-b border-white/10 p-5">
            <div>
              <h2 className="text-lg font-bold text-white">
                APEX AI
              </h2>

              <p className="text-sm text-slate-400">
                Your personal AI assistant
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
            >
              <X className="h-5 w-5 text-slate-400 transition hover:text-white" />
            </button>
          </div>

          {/* Messages */}

          <div className="flex-1 space-y-5 overflow-y-auto p-5">
            {messages.length === 1 && (
  <AIQuickActions />
)}
            {messages.map((message) => (
              <AIMessage
                key={message.id}
                role={message.role}
                content={message.content}
              />
            ))}

            {thinking && <AITyping />}

            <AISuggestions />
            <div ref={bottomRef} />
          </div>

          {/* Input */}

          <AIInput />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
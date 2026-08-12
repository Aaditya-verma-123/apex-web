"use client";

import { Bot, User } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  role: "assistant" | "user";
  content: string;
}

export default function AIMessage({
  role,
  content,
}: Props) {
  const assistant = role === "assistant";

  return (
    <motion.div
  initial={{
    opacity: 0,
    y: 15,
  }}
  animate={{
    opacity: 1,
    y: 0,
  }}
  transition={{
    duration: 0.25,
  }}
>
      {assistant && (
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-[color:var(--glow)]
          "
        >
          <Bot
            className="h-5 w-5"
            style={{
              color: "var(--primary)",
            }}
          />
        </div>
      )}

      <div
        className={`
          max-w-[75%]
          rounded-2xl
          px-4
          py-3
          text-sm
          leading-7

          ${
            assistant
              ? "bg-white/5 text-slate-300"
              : "bg-[var(--primary)] text-white"
          }
        `}
      >
        {content}
      </div>

      {!assistant && (
        <div
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-full
            bg-white/10
          "
        >
          <User className="h-5 w-5 text-white" />
        </div>
      )}
    </motion.div>
  );
}
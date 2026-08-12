"use client";

import { useState } from "react";
import { SendHorizonal } from "lucide-react";

import { useAI } from "@/context/AIContext";

export default function AIInput() {
  const [input, setInput] = useState("");

  const { sendMessage } = useAI();

  function handleSend() {
    const text = input.trim();

    if (!text) return;

    sendMessage(text);

    setInput("");
  }

  return (
    <div className="border-t border-white/10 p-4">
      <div className="flex gap-3">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
          placeholder="Ask APEX AI..."
          className="
            flex-1
            rounded-xl
            border
            border-white/10
            bg-white/5
            px-4
            py-3
            text-white
            outline-none
            transition-all
            focus:border-[var(--border)]
          "
        />

        <button
          onClick={handleSend}
          className="
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-xl
            bg-[var(--primary)]
            text-white
            transition-all
            hover:bg-[var(--primary-hover)]
          "
        >
          <SendHorizonal className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}
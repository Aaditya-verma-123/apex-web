"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Command } from "cmdk";

import { commandItems } from "./commandData";

interface CommandDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function CommandDialog({
  open,
  onClose,
}: CommandDialogProps) {
  const router = useRouter();

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="
            fixed
            inset-0
            z-[999]
            flex
            items-start
            justify-center
            bg-black/60
            pt-28
            backdrop-blur-xl
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.96,
              y: -20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
              y: -20,
            }}
            transition={{
              duration: 0.2,
            }}
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-2xl"
          >
            <Command
              className="
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-zinc-950/95
                shadow-[0_40px_120px_rgba(0,0,0,.5)]
                backdrop-blur-3xl
              "
            >
              <Command.Input
                ref={inputRef}
                placeholder="Search APEX WEB..."
                className="
                  w-full
                  border-b
                  border-white/10
                  bg-transparent
                  px-6
                  py-5
                  text-lg
                  text-white
                  outline-none
                  placeholder:text-zinc-500
                "
              />

              <Command.List
                className="
                  max-h-[420px]
                  overflow-y-auto
                  p-3
                "
              >
                <Command.Empty
                  className="
                    py-10
                    text-center
                    text-zinc-500
                  "
                >
                  No results found.
                </Command.Empty>

                <Command.Group heading="Navigation">
                  {commandItems.map((item) => {
                    const Icon = item.icon;

                    return (
                      <Command.Item
                        key={item.title}
                        value={item.title}
                        onSelect={() => {
                          router.push(item.href);
                          onClose();
                        }}
                        className="
                          flex
                          cursor-pointer
                          items-center
                          justify-between
                          rounded-2xl
                          px-4
                          py-3
                          text-white
                          transition-all
                          duration-200
                          data-[selected=true]:bg-cyan-500/15
                          data-[selected=true]:text-cyan-300
                        "
                      >
                        <div className="flex items-center gap-3">
                          <Icon className="h-5 w-5" />
                          <span>{item.title}</span>
                        </div>

                        <kbd
                          className="
                            rounded-md
                            border
                            border-white/10
                            bg-white/5
                            px-2
                            py-1
                            text-[10px]
                            text-zinc-400
                          "
                        >
                          ↵
                        </kbd>
                      </Command.Item>
                    );
                  })}
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
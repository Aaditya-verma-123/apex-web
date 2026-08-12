"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const modules = [
  "Portfolio Engine",
  "Projects Database",
  "Certificates",
  "Resume",
  "Theme Engine",
  "APEX AI",
];

export default function BootScreen() {
  const [visible, setVisible] = useState(false);
const [progress, setProgress] = useState(0);

useEffect(() => {
  const alreadyBooted =
    sessionStorage.getItem("apex_boot");

  if (alreadyBooted) return;

  let interval: number | undefined;
  let hideTimer: number | undefined;

  const startTimer = window.setTimeout(() => {
    setVisible(true);

    let current = 0;

    interval = window.setInterval(() => {
      current += 2;
      setProgress(current);

      if (current >= 100) {
        if (interval) {
          window.clearInterval(interval);
        }

        sessionStorage.setItem(
          "apex_boot",
          "true"
        );

        hideTimer = window.setTimeout(() => {
          setVisible(false);
        }, 400);
      }
    }, 30);
  }, 0);

  return () => {
    window.clearTimeout(startTimer);

    if (interval) {
      window.clearInterval(interval);
    }

    if (hideTimer) {
      window.clearTimeout(hideTimer);
    }
  };
}, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.5,
            },
          }}
          className="
            fixed
            inset-0
            z-[99999]
            flex
            items-center
            justify-center
            bg-[#050505]
          "
        >
          <div className="w-full max-w-lg px-8">

            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className="
                text-center
                text-5xl
                font-black
                tracking-wider
                text-white
              "
            >
              APEX WEB
            </motion.h1>

            <p className="mt-2 text-center text-cyan-400">
              Portfolio Operating System
            </p>

            <div className="mt-14">

              <div className="mb-3 flex justify-between text-sm text-slate-400">
                <span>Initializing...</span>
                <span>{progress}%</span>
              </div>

              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  className="h-full bg-cyan-400"
                  animate={{
                    width: `${progress}%`,
                  }}
                />
              </div>

            </div>

            <div className="mt-10 space-y-2">

              {modules.map((module, index) => (
                <motion.div
                  key={module}
                  initial={{
                    opacity: 0,
                    x: -10,
                  }}
                  animate={{
                    opacity:
                      progress >
                      ((index + 1) /
                        modules.length) *
                        100
                        ? 1
                        : 0.25,
                    x: 0,
                  }}
                  className="flex items-center gap-3 text-sm"
                >
                  <span className="text-cyan-400">
                    ✓
                  </span>

                  <span className="text-slate-300">
                    {module}
                  </span>
                </motion.div>
              ))}

            </div>

            <p className="mt-10 text-center text-xs text-slate-500">
              Welcome to APEX WEB
            </p>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
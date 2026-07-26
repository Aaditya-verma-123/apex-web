"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-6">

        <button
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="rounded-full border border-white/10 bg-white/5 p-3 transition hover:bg-white/10"
        >
          <ArrowUp size={18} />
        </button>

        <h2 className="text-2xl font-bold">
          APEX <span className="text-blue-500">WEB</span>
        </h2>

        <p className="text-center text-sm text-zinc-400">
          Designed & Developed by Aaditya Verma
        </p>

        <div className="flex gap-6 text-2xl">
          <Link
            href="https://github.com/Aaditya-verma-123"
            target="_blank"
          >
            <FaGithub />
          </Link>

          <Link
            href="https://linkedin.com/in/aaditya-verma-985117317"
            target="_blank"
          >
            <FaLinkedin />
          </Link>

          <Link
            href="https://instagram.com/___aaditya_verma___"
            target="_blank"
          >
            <FaInstagram />
          </Link>
        </div>

        <p className="text-xs text-zinc-500">
          © {new Date().getFullYear()} Aaditya Verma. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
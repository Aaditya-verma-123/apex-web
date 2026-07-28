import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[#050816]">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 py-10 md:flex-row lg:px-8">
        <div>
          <h3 className="text-xl font-bold text-white">
            APEX WEB
          </h3>

          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Designed and developed by Aaditya Verma.
          </p>
        </div>

        <div className="flex gap-6 text-sm text-slate-300">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/contact">Contact</Link>
        </div>

        <div className="flex flex-wrap gap-6 justify-center">
          <a
            href="https://github.com/Aaditya-verma-123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aaditya-verma-985117317"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            LinkedIn
          </a>

          <a
            href="https://instagram.com/___aaditya_verma___"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-300 transition-colors duration-200 hover:text-white"
          >
            Instagram
          </a>
        </div>
      </div>

      <div className="border-t border-white/10 py-5 text-center text-sm text-slate-500">
        © {year} Aaditya Verma • APEX WEB v1.1
      </div>
    </footer>
  );
}
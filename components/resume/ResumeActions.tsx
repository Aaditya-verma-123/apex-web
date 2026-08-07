"use client";

import {
  Download,
  Printer,
  Share2,
} from "lucide-react";

import Button from "@/components/ui/Button";
import { resume } from "@/data/resume";

export default function ResumeActions() {
  function handlePrint() {
    const printWindow = window.open(resume.pdf);

    if (printWindow) {
      printWindow.onload = () => {
        printWindow.print();
      };
    }
  }

  async function handleShare() {
    const url = window.location.origin + resume.pdf;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "Aaditya Verma Resume",
          text: "View my professional resume.",
          url,
        });
        return;
      } catch {
        // User cancelled sharing
      }
    }

    await navigator.clipboard.writeText(url);

    alert("Resume link copied!");
  }

  return (
    <div className="mt-8 flex flex-wrap gap-4">
      <Button asChild>
        <a
          href={resume.pdf}
          download
        >
          <Download className="mr-2 h-4 w-4" />
          Download
        </a>
      </Button>

      <Button
        variant="secondary"
        onClick={handlePrint}
      >
        <Printer className="mr-2 h-4 w-4" />
        Print
      </Button>

      <Button
        variant="secondary"
        onClick={handleShare}
      >
        <Share2 className="mr-2 h-4 w-4" />
        Share
      </Button>
    </div>
  );
}
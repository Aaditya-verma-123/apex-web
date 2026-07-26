"use client";

import { useEffect, useState } from "react";

const sections = [
  "home",
  "about",
  "projects",
  "skills",
  "journey",
  "contact",
];

export default function useActiveSection() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        console.log(
          entries.map((e) => ({
            id: e.target.id,
            intersecting: e.isIntersecting,
            ratio: e.intersectionRatio,
          }))
        );

        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          console.log("Active:", visible.target.id);
          setActive(visible.target.id);
        }
      },
      {
        threshold: 0.3,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      console.log("Observing:", id, el);

      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return active;
}
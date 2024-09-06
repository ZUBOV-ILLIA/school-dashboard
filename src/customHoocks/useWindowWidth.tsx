"use client";

import { useEffect, useState } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

export default function useWindowWidth(): Breakpoint {
  const [width, setWidth] = useState<Breakpoint>("sm");

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      if (windowWidth >= 1536) {
        setWidth("2xl");
      } else if (windowWidth >= 1280) {
        setWidth("xl");
      } else if (windowWidth >= 1024) {
        setWidth("lg");
      } else if (windowWidth >= 768) {
        setWidth("md");
      } else {
        setWidth("sm");
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
}

"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation speed
      easing: "ease-in-out",
      once: true, // Run animation only once
    });
  }, []);

  return <>{children}</>;
}

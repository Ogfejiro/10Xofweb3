"use client";
import React, { useEffect } from "react";
import { Home, Info, Briefcase, PenTool, Mail } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Nav = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  // Enable smooth scroll globally
  useEffect(() => {
    if (typeof window !== "undefined") {
      document.documentElement.style.scrollBehavior = "smooth";
    }
  }, []);

  return (
    <>
      {/* Desktop Nav */}
      <nav
        className="hidden md:block w-[90%] max-w-6xl mx-auto px-8 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg z-50 mt-4"
        data-aos="fade-down"
      >
        <div className="flex justify-between items-center">
          <h1
            className="text-xl font-bold text-yellow-400 tracking-wide"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            10XOFWEB3
          </h1>

          <ul
            className="flex space-x-6 font-medium text-white"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <li><a href="#home" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#services" className="hover:text-yellow-400 transition">Services</a></li>
            <li><a href="#project" className="hover:text-yellow-400 transition">Project</a></li>
          </ul>

          <a
 href="https://x.com/10Xofweb3"
  target="_blank"
  rel="noopener noreferrer"
  className="cursor-pointer relative z-[9999] inline-block px-5 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 hover:scale-105 transition-transform duration-300 shadow-md active:scale-95"
  data-aos="zoom-in"
  data-aos-delay="600"
>

  Contact
</a>

          
        </div>
      </nav>

      {/* Mobile Nav */}
      <div
        className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center z-50"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <a href="#home" className="hover:text-yellow-400 transition"><Home className="w-6 h-6" /></a>
        <a href="#/" className="hover:text-yellow-400 transition"><Info className="w-6 h-6" /></a>
        <a href="#services" className="hover:text-yellow-400 transition"><Briefcase className="w-6 h-6" /></a>
        <a href="#project" className="hover:text-yellow-400 transition"><PenTool className="w-6 h-6" /></a>
        <a href="#contact" className="hover:text-yellow-400 transition"><Mail className="w-6 h-6" /></a>
      </div>
    </>
  );
};

export default Nav;

"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import Link from "next/link";

const Home = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <section 
    id="home"
      className="w-[90%] max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 py-20"
      data-aos="fade-up"
    >
      {/* Left Section */}
      <div
        className="flex-1 space-y-6 text-center md:text-left"
        data-aos="fade-right"
        data-aos-delay="200"
      >
        <h1
          className="text-4xl md:text-6xl font-bold text-white leading-tight"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Web3 Moves Fast. <br />
          <span className="text-yellow-400">I Make Sure You’re The One They’re Chasing.</span>
        </h1>

        <p
          className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          I craft marketing systems that amplify projects, spark hype, and build real traction — 
          not just followers. Strategy, storytelling, and scale for the new digital frontier.
        </p>

        <Link
          href="https://x.com/10Xofweb3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
          data-aos="zoom-in"
          data-aos-delay="800"
        >
          Level Up Your Brand 🚀
        </Link>
      </div>

      {/* Right Section - Image */}
      <div
        className="flex-1 flex justify-center md:justify-end"
        data-aos="fade-left"
        data-aos-delay="400"
      >
        <Image
          src="/nft.jpg"
          alt="NFT"
          width={400}
          height={400}
          className="rounded-xl object-cover w-[250px] h-[250px] md:w-[400px] md:h-[400px] shadow-lg hover:scale-105 transition-transform duration-300"
        />
      </div>
    </section>
  );
};

export default Home;

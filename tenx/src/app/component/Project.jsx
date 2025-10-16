"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "MEMECOIN",
    description: [
      "Marketed a memecoin from 1.2M market cap to 13M ATH.",
      "Built massive hype through strategic AMAs and influencer outreach.",
      "Achieved strong retention across community-driven campaigns.",
    ],
    images: ["/ama.jpg", "/amahost.jpg"],
    link: "https://dexscreener.com/solana/EwZHZ6tHqLjsbDfkrTdHCTcPdq2MCiFRvXsHFtGGpump",
  },

  {
    title: "SPACES",
    description: [
      "Hosted ‘ENGAGEMENT MORNINGS’ for a year — 500–2K listeners daily.",
      "Built visibility for Web3 projects through community conversations.",
      "Empowered newcomers and positioned brands for awareness.",
    ],
    images: ["/spacehead.jpg", "/space1.jpg"],
    link: "https://x.com/Mazimonie/status/1969084445136220218?t=_odfMfttRweWFIBxciv3Jw&s=19",
  },

  {
    title: "GAMING",
    description: [
      "Marketed a gaming platform that got the owner impressed he had to drop a review on a public space.",
      "Marketed a gaming platform pushing to the top of the leaderboard at 75k numerical traffic generated.",
      "Topped the leaderboard on P2E game which was calculated based on reach with just 5days attention.",
    ],
    images: ["/video.mp4", "/leaderboard.jpg"],
    link: "https://x.com/Mazimonie/status/1969084445136220218?t=_odfMfttRweWFIBxciv3Jw&s=19",
  },

  {
    title: "RWAs Crypto-Based Fintech",
    description: [
      "Marketed Duffle — a crypto-to-fiat app driving real adoption.",
      "Achieved 10k+ downloads and six-figure transaction volume.",
      "Bridged traditional finance and Web3 for everyday users.",
    ],
    images: ["/Dufflereal.jpg"],
    link: "https://app.duffle.io",
  },

  {
    title: "BLOCKCHAIN",
    description: [
      "Onboarded 811 active users in one month using referral incentives.",
      "Generated 12,165 total points in a crypto escrow network.",
      "Drove measurable engagement and visibility among top KOLs on CT.",
    ],
    images: ["/Nexscorereal.jpg"],
    link: "https://x.com/nexus_mls",
  },

  {
    title: "Sui Bison App",
    description: [
      "Referral-driven staking growth campaign built from scratch.",
      "Onboarded 3,216 users with a simple 1 SUI deposit per referral.",
      "Generated over 2,500 SUI in total team volume.",
    ],
    images: ["/suibison.jpg", "/suibison2.jpg"],
    link: "https://yourwebsite.com",
  },

  {
    title: "NFT",
    description: [
      "Successful enough to launch my own NFT collection alongside get it trending plus sold out.",
      "Also hosted a successful live event pulling in holders from different geographical locations.",
    ],
    images: ["/theboyz.jpg", "/theboyz2.jpg"],
    link: "https://yourwebsite.com",
  },
];

const Projects = () => {
  const [page, setPage] = useState(1);
  const perPage = 2;

  useEffect(() => {
    AOS.init({ duration: 400, easing: "ease-in-out", once: true });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, [page]);

  const totalPages = Math.ceil(projects.length / perPage);
  const startIndex = (page - 1) * perPage;
  const visibleProjects = projects.slice(startIndex, startIndex + perPage);

  const nextPage = () => page < totalPages && setPage(page + 1);
  const prevPage = () => page > 1 && setPage(page - 1);

  return (
    <section id="project" className="w-[90%] max-w-4xl mx-auto py-16 text-white">
      <h2
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
        data-aos="fade-down"
      >
        My <span className="text-yellow-400">Projects</span>
      </h2>

      {visibleProjects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <div
            key={index}
            className={`flex flex-col md:flex-row ${
              isEven ? "" : "md:flex-row-reverse"
            } items-center gap-8 mb-16`}
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            {/* Media Section (Video + Image logic) */}
            <div className="flex-1 flex flex-col md:flex-row justify-center md:justify-start gap-4 w-full">
              {project.images.map((media, i) => (
                <div
                  key={i}
                  className="relative w-full h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-lg shadow-lg transition-transform duration-300 hover:scale-105"
                >
                  {media.endsWith(".mp4") ? (
                    <video
                      src={media}
                      controls
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Image
                      src={media}
                      alt={`${project.title} image ${i + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 90vw, 300px"
                      priority
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Text Section */}
            <div className="flex-1 space-y-4 text-center md:text-left mt-6 md:mt-0">
              <h3 className="text-3xl font-bold text-yellow-400">
                {project.title}
              </h3>
              <ul className="space-y-2">
                {project.description.map((point, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 text-gray-300"
                    data-aos={i % 2 === 0 ? "fade-right" : "fade-left"}
                    data-aos-duration="300"
                    data-aos-delay={i * 150}
                  >
                    <CheckCircle className="text-yellow-400 mt-1" size={20} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 rounded-xl bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
              >
                View Project
              </Link>
            </div>
          </div>
        );
      })}

      {/* Pagination */}
      <div
        className="flex justify-center items-center mt-8 gap-6"
        data-aos="fade-up"
      >
        <button
          onClick={(e) => {
            e.preventDefault();
            prevPage();
          }}
          disabled={page === 1}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 transition ${
            page === 1
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-white/10 hover:scale-105"
          }`}
        >
          <ArrowLeft size={18} /> Prev
        </button>

        <span className="text-yellow-400 font-medium">
          {page} / {totalPages}
        </span>

        <button
          onClick={(e) => {
            e.preventDefault();
            nextPage();
          }}
          disabled={page === totalPages}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 transition ${
            page === totalPages
              ? "opacity-40 cursor-not-allowed"
              : "hover:bg-white/10 hover:scale-105"
          }`}
        >
          Next <ArrowRight size={18} />
        </button>
      </div>
    </section>
  );
};

export default Projects;

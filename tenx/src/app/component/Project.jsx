"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Nexus",
    description:
      "By leveraging a referral incentive of 15 points per user who connected their wallet and initiated transactions, I successfully onboarded 811 active users within just one month. This translated into 12,165 total points on a crypto escrow network — demonstrating my ability to drive measurable user acquisition and engagement in Web3 ecosystems among other top KOLs on CT.",
    images: ["/Nexscorereal.jpg"],
    link: "https://x.com/nexus_mls",
  },
  {
    title: "AMA WITH $NEZHA",
    description:
      "Marketed a memecoin from 1.2M market cap pushing it to 13M ath.",
    images: ["/ama.jpg", "/amahost.jpg"],
    link: "https://dexscreener.com/solana/EwZHZ6tHqLjsbDfkrTdHCTcPdq2MCiFRvXsHFtGGpump",
  },
  {
    title: "Sui Bison App",
    description:
      "Staking protocol user Acquisition & Growth, with just 1 SUI deposit per referral within a limited time, built and scaled a referral-driven growth engine that onboarded: *3,216 users into the network *Generated 2,500+ SUI in total team volume i.e 2500 active users.",
    images: [""],
    link: "https://yourwebsite.com",
  },
  {
    title: "SPACES",
    description:
      "Consistently hosted ENGAGEMENT MORNINGS for a year with over 500–2K tuned in daily, supporting newbies’ growth and giving projects visibility while building a solid community.",
    images: ["/spacehead.jpg", "/space1.jpg", "/space2.jpg"],
    link: "https://x.com/Mazimonie/status/1969084445136220218?t=_odfMfttRweWFIBxciv3Jw&s=19",
  },
  {
    title: "RWAs crypto-based FINTECH",
    description:
      "Successfully marketed a crypto-to-fiat app (DUFFLE), driving 10k+ downloads and generating six figures in transaction volume within a short growth cycle, bringing massive adoption as a financial partner for crypto users.",
    images: ["/Dufflereal.jpg"],
    link: "https://app.duffle.io",
  },
];

const Projects = () => {
  const [page, setPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const totalPages = Math.ceil(projects.length / perPage);
  const startIndex = (page - 1) * perPage;
  const visibleProjects = projects.slice(startIndex, startIndex + perPage);

  const nextPage = () => {
    if (page < totalPages) setPage(page + 1);
  };

  const prevPage = () => {
    if (page > 1) setPage(page - 1);
  };

  return (
    <section id="project" className=" w-[90%] max-w-4xl mx-auto px-8  text-center text-white">
      <h2
        className="text-3xl md:text-4xl font-bold mb-12"
        data-aos="fade-down"
      >
        My <span className="text-yellow-400">Projects</span>
      </h2>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {visibleProjects.map((project, index) => {
          const imageCount = project.images.length;
          const gridCols =
            imageCount === 1
              ? "grid-cols-1"
              : imageCount === 2
              ? "grid-cols-2"
              : "grid-cols-3";
          const imageHeight =
            imageCount === 1
              ? "h-56"
              : imageCount === 2
              ? "h-40"
              : "h-28";

          return (
            <div
              key={index}
              className="p-6 flex flex-col justify-between bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg hover:scale-105 transition-transform duration-300"
              data-aos="zoom-in"
              data-aos-delay={index * 150} // staggered entry
            >
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {project.description}
                </p>

                {/* Images */}
                <div className={`grid ${gridCols} gap-2 mb-4`}>
                  {project.images.map((img, i) =>
                    img ? (
                      <div
                        key={i}
                        className={`relative w-full ${imageHeight} rounded-lg overflow-hidden`}
                        data-aos="fade-up"
                        data-aos-delay={200 + i * 100}
                      >
                        <Image
                          src={img}
                          alt={`${project.title} image ${i + 1}`}
                          fill
                          className="object-cover hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                    ) : null
                  )}
                </div>
              </div>

              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-4 py-2 rounded-lg bg-yellow-400 text-black font-medium hover:bg-yellow-300 transition"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                View Project
              </Link>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div
        className="flex justify-center items-center mt-12 gap-6"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <button
          onClick={prevPage}
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
          onClick={nextPage}
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

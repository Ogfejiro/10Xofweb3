"use client"; // important for Next.js client-side animation

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Twitter, Send, MessageCircle, Flame, Bomb } from "lucide-react";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // initialize AOS
  }, []);

  const socials = [
    {
      name: "X (Twitter)",
      icon: <Twitter size={22} />,
      link: "https://x.com/10Xofweb3",
      username: "@10Xofweb3",
    },
    {
      name: "Discord",
      icon: <MessageCircle size={22} />,
      link: "https://discord.com/users/Iam10xofweb3",
      username: "Iam10xofweb3",
    },
    {
      name: "Telegram",
      icon: <Send size={22} />,
      link: "https://t.me/ten_ex",
      username: "@Ten_ex",
      note: "DM for quick response",
    },
  ];

  return (
    <section
    id="contact"
      className=" w-[90%] max-w-4xl mx-auto px-8 flex flex-col items-center text-center text-white"
      data-aos="fade-up"
    >
      <h1
        className="text-4xl md:text-5xl font-bold mb-4"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        Ready to <span className="text-yellow-400">Go Viral?</span>
      </h1>

      <p
        className="text-gray-300 max-w-2xl mb-4 text-sm md:text-base flex items-center justify-center gap-2"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        You handle the{" "}
        <span className="text-yellow-400 font-semibold">tech</span>, I’ll handle the{" "}
        <span className="text-yellow-400 font-semibold flex items-center gap-1">
          explosion <Bomb size={18} className="inline-block" />
        </span>
      </p>

      <p
        className="text-gray-400 max-w-2xl mb-8 text-sm md:text-base"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        Get instant community buzz and rapid visibility with expert token and banner promotions.
      </p>

      <button
        className="bg-yellow-400 text-black font-medium px-8 py-3 rounded-lg hover:bg-yellow-300 transition-transform hover:scale-105 flex items-center gap-2"
        data-aos="zoom-in"
        data-aos-delay="800"
      >
        Ignite Your Project Now <Flame size={20} />
      </button>

      {/* Social Links */}
      <div className="mt-12 space-y-4 w-full max-w-md">
        {socials.map((social, i) => (
          <a
            key={i}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl p-4 transition"
            data-aos="fade-up"
            data-aos-delay={1000 + i * 200} // staggered animation for each link
          >
            <div className="flex items-center gap-3">
              <span className="text-yellow-400">{social.icon}</span>
              <div className="text-left">
                <p className="font-medium">{social.name}</p>
                <p className="text-gray-400 text-sm">{social.username}</p>
              </div>
            </div>

            {social.note && (
              <span className="text-xs text-yellow-400 font-medium">
                {social.note}
              </span>
            )}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

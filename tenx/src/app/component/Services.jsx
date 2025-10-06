"use client";
import React, { useEffect } from "react";
import { Megaphone, TrendingUp, Globe, DollarSign } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  return (
    <section className="w-[90%] max-w-6xl mx-auto py-20 text-center">
      {/* Title */}
      <h2
        className="text-3xl md:text-4xl font-bold text-white mb-12"
        data-aos="fade-down"
      >
        My <span className="text-yellow-400">Services</span>
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Service 1 */}
        <div
          className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300"
          data-aos="zoom-in-up"
          data-aos-delay="100"
        >
          <Megaphone className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Brand Marketing
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Helping projects go from idea to launch with marketing, strategic
            campaigns, and execution.
          </p>
        </div>

        {/* Service 2 */}
        <div
          className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300"
          data-aos="zoom-in-up"
          data-aos-delay="200"
        >
          <TrendingUp className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Crypto Growth
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Driving adoption and engagement for Web3 projects through proven
            growth strategies.
          </p>
        </div>

        {/* Service 3 */}
        <div
          className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300"
          data-aos="zoom-in-up"
          data-aos-delay="300"
        >
          <Globe className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Community Building
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Building strong, loyal communities around projects that drive
            long-term success.
          </p>
        </div>

        {/* Service 4 */}
        <div
          className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-lg hover:scale-105 hover:shadow-yellow-400/30 transition-transform duration-300"
          data-aos="zoom-in-up"
          data-aos-delay="400"
        >
          <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">
            Capital Maximization
          </h3>
          <p className="text-gray-300 text-sm leading-relaxed">
            Maximizing capital into profit while aligning with long-term
            organizational goals.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;

import React from "react"
import Image from "next/image"
import Link from "next/link"

const Home = () => {
  return (
    <section className="w-[90%] max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 py-20">
      
      {/* Left Section */}
      <div className="flex-1 space-y-6 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
          Welcome to <span className="text-yellow-400">My Portfolio</span>
        </h1>
        <p className="text-base md:text-lg text-gray-300 max-w-md mx-auto md:mx-0">
          Hi! I'm 10XOFWEB3, a Marketer and Crypto Expert with 5 years of experience. 
          I specialize in moving brands, projects, and products from obscurity to visibility — 
          helping them grow, gain trust, and achieve lasting impact in the Web3 space with optimal results.
        </p>
        <Link
          href="https://twitter.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 rounded-lg bg-yellow-400 text-black font-semibold hover:bg-yellow-300 transition"
        >
          Get to know me
        </Link>
      </div>

      {/* Right Section - Image */}
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/nft.jpg" // ✅ Image must be in /public
          alt="NFT"
          width={400}
          height={400}
          className="rounded-xl object-cover w-[250px] h-[250px] md:w-[400px] md:h-[400px]"
        />
      </div>
    </section>
  )
}

export default Home

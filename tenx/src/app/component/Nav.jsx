"use client"
import React from "react"
import Link from "next/link"
import { Home, Info, Briefcase, PenTool, Mail } from "lucide-react"

const Nav = () => {
  return (
    <>
      {/* Top Nav for Desktop */}
      <nav className="hidden md:block w-[90%] max-w-4xl mx-auto px-8 py-4 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/30 shadow-lg z-50 mt-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-xl font-bold">10XOFWEB3</h1>

          {/* Links */}
          <ul className="flex space-x-6  font-medium">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/services">Services</Link></li>
            <li><Link href="/blog">Blog</Link></li>
          </ul>

          {/* Contact Button */}
          <button className="px-4 py-2 rounded-lg bg-yellow-500 text-black font-semibold hover:bg-yellow-400 transition">
            Contact
          </button>
        </div>
      </nav>

      {/* Bottom Nav for Mobile */}
      <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-lg border border-white/30 shadow-lg rounded-2xl px-6 py-3 flex justify-between items-center z-50">
        <Link href="/" className="hover:text-yellow-400 transition">
          <Home className="w-6 h-6" />
        </Link>
        <Link href="/about" className="hover:text-yellow-400 transition">
          <Info className="w-6 h-6" />
        </Link>
        <Link href="/services" className="hover:text-yellow-400 transition">
          <Briefcase className="w-6 h-6" />
        </Link>
        <Link href="/blog" className="hover:text-yellow-400 transition">
          <PenTool className="w-6 h-6" />
        </Link>
        <Link href="/contact" className="hover:text-yellow-400 transition">
          <Mail className="w-6 h-6" />
        </Link>
      </div>
    </>
  )
}

export default Nav

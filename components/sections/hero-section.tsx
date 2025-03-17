"use client"

import Image from "next/image"

export default function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="home" className="relative">
      {/* Hero section with clean gradient */}
      <div className="w-full h-[20vh] relative bg-gradient-to-br from-[#1E293B] via-[#334155] to-[#1E293B] flex items-center justify-center">
        <div className="container mx-auto text-center text-white space-y-6 px-4">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Professional Air-Conditioning Services
          </h1>
          <p className="text-xl md:text-2xl text-gray-200">
            Your Comfort Is Our Priority
          </p>
        </div>
      </div>

      {/* Bottom image section - keeping as is */}
      
    </section>
  )
}


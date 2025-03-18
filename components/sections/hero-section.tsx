"use client"

import Image from "next/image"

export default function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="home" className="relative">
      {/* Banner image section */}
      <div className="w-full h-[50vh] relative">
        <Image
          src="/banner.svg"
          alt="Professional Air Conditioning Solutions"
          fill
          sizes="100vw"
          quality={85}
          style={{ 
            objectFit: 'cover',
            backgroundColor: '#1E293B' 
          }}
          priority
          className="brightness-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
    </section>
  )
}


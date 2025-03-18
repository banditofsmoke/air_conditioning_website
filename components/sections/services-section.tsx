"use client"

import { ServiceCard } from "@/components/ui-cards"

export default function ServicesSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="services" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">
            Our Services
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            From residential retreats to commercial spaces, we deliver the perfect chill—fast and affordably.
          </p>
        </div>
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <ServiceCard
            title="Domestic Air-Conditioning"
            description="Create a refreshing oasis in your home. Our energy-efficient units guarantee comfort without breaking the bank."
            icon="❄️"
            onClick={() => scrollToSection("contact")}
          />
          <ServiceCard
            title="Commercial Air-Conditioning"
            description="Keep your staff and customers happy with reliable, cost-effective cooling solutions tailored to your business."
            icon="🏢"
            onClick={() => scrollToSection("contact")}
          />
          <ServiceCard
            title="Refrigeration & Coldrooms"
            description="From restaurants to supermarkets, our cutting-edge refrigeration systems ensure your goods stay fresh."
            icon="🧊"
            onClick={() => scrollToSection("contact")}
          />
          <ServiceCard
            title="Ice Machines & Catering"
            description="Step up your event game with crystal-clear ice and top-of-the-line catering gear."
            icon="🍹"
            onClick={() => scrollToSection("contact")}
          />
        </div>
      </div>
    </section>
  )
}


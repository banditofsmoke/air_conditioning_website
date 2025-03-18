"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import { Phone, Facebook, Menu, X, Sun, Moon, ChevronRight, Globe } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

import HeroSection from "@/components/sections/hero-section"
import ServicesSection from "@/components/sections/services-section"
import PricingSection from "@/components/sections/pricing-section"
import GallerySection from "@/components/sections/gallery-section"
import AboutSection from "@/components/sections/about-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ContactSection from "@/components/sections/contact-section"

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto flex h-16 items-center justify-between px-8"> {/* Change px-4 to px-8 */}
          <div className="flex items-center gap-3"> {/* Changed gap-2 to gap-3 */}
            <Image
              src="/banner.svg"
              alt="AirCool Pro Logo"
              width={36}  // Increased from 32
              height={36} // Increased from 32
              className="rounded-md"
            />
            <span className="text-xl font-bold text-primary hidden sm:inline-block"> {/* Changed text-lg to text-xl */}
              AirCool Pro
            </span>
            <span className="text-xl font-bold text-primary sm:hidden"> {/* Changed text-lg to text-xl */}
              AirCool
            </span>
          </div>

          <nav className="hidden md:flex gap-16"> {/* Change gap-8 to gap-16 for more spacing */}
            <button
              onClick={() => scrollToSection("home")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-base font-medium hover:text-primary transition-colors" // Changed text-sm to text-base
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="relative p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              <div className="relative w-5 h-5"> {/* Added container div with fixed dimensions */}
                <Sun className="absolute h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              </div>
              <span className="sr-only">Toggle theme</span>
            </button>

            <Link
              href="tel:+27632642657"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +27 63 264 2657
            </Link>

            <Link
              href="tel:+27632642657"
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors hidden sm:flex items-center"
            >
              <Phone className="mr-2 h-4 w-4" /> Call Now
            </Link>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between border-b pb-4">
                    <div className="flex items-center gap-2">
                      <Image
                        src="/banner.svg"
                        alt="AirCool Pro Logo"
                        width={32}
                        height={32}
                        className="rounded-md"
                      />
                      <span className="font-bold text-lg">AirCool Pro</span>
                    </div>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>

                  <nav className="flex flex-col gap-4 py-6">
                    <button
                      onClick={() => scrollToSection("home")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToSection("services")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection("pricing")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Pricing
                    </button>
                    <button
                      onClick={() => scrollToSection("gallery")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Gallery
                    </button>
                    <button
                      onClick={() => scrollToSection("about")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection("contact")}
                      className="flex items-center text-lg font-medium py-2 hover:text-primary transition-colors"
                    >
                      Contact
                    </button>
                  </nav>

                  <div className="mt-auto border-t pt-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="h-5 w-5 text-primary" />
                      <Link href="tel:+27712031347" className="hover:text-primary transition-colors">
                        +27 71 203 1347
                      </Link>
                    </div>
                    <div className="flex items-center gap-3">
                      <Facebook className="h-5 w-5 text-primary" />
                      <Link
                        href="https://www.facebook.com/waynesletcher"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        https://www.facebook.com/waynesletcher
                      </Link>
                    </div>
                    <Button className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white">
                      <Phone className="mr-2 h-4 w-4" /> Call Now
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-8"> {/* Reduced padding from pt-14 to pt-8 */}
        <HeroSection scrollToSection={scrollToSection} />
        <ServicesSection scrollToSection={scrollToSection} />
        <PricingSection />
        <GallerySection />
        <TestimonialsSection />
        <AboutSection />
        <ContactSection />
      </main>

      <footer className="bg-[#1E293B] text-white py-8">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Image
                  src="/banner.svg" // Changed from placeholder.svg
                  alt="AirCool Pro Logo"
                  width={40}
                  height={40}
                  className="rounded-md bg-white/5" // Added subtle background
                  style={{
                    objectFit: 'contain'
                  }}
                />
                <span className="font-bold text-lg">AirCool Pro</span>
              </div>
              <p className="text-sm text-gray-300">
                A Professional HVAC Solutions Template by Sletcher Systems
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Home
                </button>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Services
                </button>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Pricing
                </button>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Gallery
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <ChevronRight className="h-3 w-3 mr-1" /> Contact
                </button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="space-y-2">
                <Link
                  href="tel:+27632642657"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <Phone className="h-4 w-4" /> +27 63 264 2657
                </Link>
                <Link
                  href="https://www.facebook.com/waynesletcher"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <Facebook className="h-4 w-4" /> facebook.com/waynesletcher
                </Link>
                <Link
                  href="https://www.sletchersystems.com"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white flex items-center gap-2"
                >
                  <Globe className="h-4 w-4" /> sletchersystems.com
                </Link>
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-primary" />
                  <Link href="tel:+27632642657" className="hover:text-primary transition-colors">
                    +27 63 264 2657
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Sletcher Systems. All rights reserved. Demo Template.
          </div>
        </div>
      </footer>
    </div>
  )
}


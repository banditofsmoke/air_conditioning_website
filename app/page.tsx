"use client"

import { useState } from "react"
import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"
import { Phone, Facebook, Menu, X, Sun, Moon, ChevronRight } from "lucide-react"

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
        <div className="container mx-auto flex h-14 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Image
              src="/logo.svg" // Update with your actual logo
              alt="Penguin Air-conditioning"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-lg font-bold text-primary hidden sm:inline-block">
              Penguin Air-conditioning
            </span>
            <span className="text-lg font-bold text-primary sm:hidden">
              Penguin AC&R
            </span>
          </div>

          <nav className="hidden md:flex gap-6">
            <button
              onClick={() => scrollToSection("home")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-md hover:bg-accent transition-colors"
              aria-label="Toggle theme"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>

            <Link
              href="tel:+27712031347"
              className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              +27 71 203 1347
            </Link>

            <Link
              href="tel:+27712031347"
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
                        src="/placeholder.svg?height=40&width=40"
                        alt="Penguin Air-conditioning and Refrigeration Logo"
                        width={32}
                        height={32}
                        className="rounded-md"
                      />
                      <span className="font-bold text-lg">Penguin AC&R</span>
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
                        href="https://facebook.com/penguin.ref"
                        target="_blank"
                        className="hover:text-primary transition-colors"
                      >
                        facebook.com/penguin.ref
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
                  src="/placeholder.svg?height=40&width=40"
                  alt="Penguin Air-conditioning and Refrigeration Logo"
                  width={40}
                  height={40}
                  className="rounded-md bg-white"
                />
                <span className="text-xl font-bold">Penguin Air-conditioning</span>
              </div>
              <p className="text-sm text-gray-300">
                Your #1 Choice for Air-Conditioning & Refrigeration in Port Elizabeth/Gqeberha.
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
              <div className="flex items-center gap-3 mb-4">
                <Link href="tel:+27712031347" className="text-sm text-gray-300 hover:text-white flex items-center">
                  <Phone className="h-4 w-4 mr-2" /> +27 71 203 1347
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Link
                  href="https://facebook.com/penguin.ref"
                  target="_blank"
                  className="text-sm text-gray-300 hover:text-white flex items-center"
                >
                  <Facebook className="h-4 w-4 mr-2" /> facebook.com/penguin.ref
                </Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-gray-300 flex flex-col md:flex-row justify-between items-center">
            <p>© {new Date().getFullYear()} Penguin Air-conditioning and Refrigeration. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link href="#" className="hover:text-white">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-white">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}


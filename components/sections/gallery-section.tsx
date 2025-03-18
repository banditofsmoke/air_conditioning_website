"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export default function GallerySection() {
  const [activeGalleryImage, setActiveGalleryImage] = useState<string | null>(null)

  const galleryImages = [
    {
      src: "/gallery/1.jpeg",
      alt: "Residential AC Installation",
      title: "Modern Home AC System",
    },
    {
      src: "/gallery/2.jpeg",
      alt: "Commercial Refrigeration",
      title: "Restaurant Cooling Solution",
    },
    {
      src: "/gallery/3.jpeg",
      alt: "Industrial HVAC",
      title: "Office Building System",
    },
    {
      src: "/gallery/4.jpeg",
      alt: "Coldroom Installation",
      title: "Supermarket Coldroom",
    },
    {
      src: "/gallery/5.jpeg",
      alt: "Split System AC",
      title: "Residential Split System",
    },
    {
      src: "/gallery/6.jpeg",
      alt: "Catering Equipment",
      title: "Commercial Kitchen Cooling",
    },
  ]

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">
            Our Projects
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Gallery of our recent installations and projects
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] rounded-lg overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300"
              onClick={() => setActiveGalleryImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <h3 className="text-white font-bold text-lg">{image.title}</h3>
                <p className="text-white/80 text-sm">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>

        <Dialog open={!!activeGalleryImage} onOpenChange={() => setActiveGalleryImage(null)}>
          <DialogContent className="max-w-4xl w-[90vw] p-1 bg-transparent border-0">
            <div className="relative aspect-[4/3] w-full">
              {activeGalleryImage && (
                <Image
                  src={activeGalleryImage || "/placeholder.svg"}
                  alt="Gallery image"
                  fill
                  className="object-contain rounded-lg"
                />
              )}
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-2 right-2 rounded-full bg-black/50 hover:bg-black/70 text-white"
              onClick={() => setActiveGalleryImage(null)}
            >
              <X className="h-5 w-5" />
            </Button>
          </DialogContent>
        </Dialog>

        <div className="mt-8 text-center">
          <Button
            variant="outline"
            className="group"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            View More Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  )
}


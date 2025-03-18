import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowUpRight } from "lucide-react"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background/80"
    >
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Left side with image - updated image source */}
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/banner2.svg"
              alt="Sletcher Systems - Web Development"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain p-4" // Changed from object-cover and added padding
              style={{
                objectFit: 'contain',
                objectPosition: 'center bottom',
                backgroundColor: '#1E293B'
              }}
              quality={85}
            />
          </div>

          {/* Right side content */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">About the Developer</h2>
            <h3 className="text-xl font-semibold">Sletcher Systems</h3>
            <p className="text-muted-foreground">
              We specialize in creating modern, efficient web solutions for businesses across various industries. With a focus on delivering exceptional user experiences and performance-optimized applications.
            </p>
            <p className="text-muted-foreground">
              This demo template showcases our expertise in building industry-specific websites that help businesses establish a strong online presence and connect with their customers effectively.
            </p>
            
            {/* Badges section - keeping as is */}
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Web Development
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Custom Solutions
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Modern Tech Stack
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Professional Service
              </Badge>
            </div>

            {/* New CTA section */}
            <div className="pt-4 space-y-4">
              <div className="flex flex-wrap gap-4">
                <Link href="https://www.sletchersystems.com/solutions" target="_blank">
                  <Button className="bg-[#3FA9F5] hover:bg-[#3FA9F5]/90 text-white">
                    View Our Services
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="https://www.sletchersystems.com" target="_blank">
                  <Button variant="outline" className="border-[#3FA9F5] text-[#3FA9F5] hover:bg-[#3FA9F5]/10">
                    Visit Portfolio
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Interested in a custom website for your HVAC business? 
                <Link 
                  href="https://wa.me/27632642657" 
                  target="_blank"
                  className="text-[#3FA9F5] hover:underline ml-1"
                >
                  Let's chat
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


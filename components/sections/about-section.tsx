import Image from "next/image"
import { Badge } from "@/components/ui/badge"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-b from-background to-muted/50 dark:from-background dark:to-background/80"
    >
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden shadow-xl">
            <Image
              src="/bot1.jpg"
              alt="Johan Kruger - Owner/Manager"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              quality={85}
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">About Us</h2>
            <h3 className="text-xl font-semibold">Meet Johan Kruger</h3>
            <p className="text-muted-foreground">
              Owner/Manager of Penguin Air-conditioning and Refrigeration with a Bachelor of Engineering (BEng) in
              Heating, Air Conditioning, Ventilation and Refrigeration Maintenance Technology/Technician from Neksa
              College.
            </p>
            <p className="text-muted-foreground">
              With years of experience in the industry, Johan has built Penguin Air-conditioning and Refrigeration on
              the foundations of reliability, expertise, and customer satisfaction. We're committed to providing the
              best cooling solutions for homes and businesses throughout Port Elizabeth/Gqeberha and surrounding areas.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Professional
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Reliable
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Experienced
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Certified
              </Badge>
              <Badge
                variant="outline"
                className="text-[#3FA9F5] dark:text-[#5BC0EB] border-[#3FA9F5] dark:border-[#5BC0EB]"
              >
                Local Business
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


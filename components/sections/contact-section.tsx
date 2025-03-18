import Link from "next/link"
import { Phone, Facebook, MapPin, Mail, ExternalLink, Linkedin, Globe } from "lucide-react"

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">Contact Developer</h2>
            <p className="text-muted-foreground">
              Interested in a custom HVAC website for your business? Get in touch for a demo of our web development services.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Globe className="h-5 w-5 text-[#3FA9F5]" />
                <Link
                  href="https://www.sletchersystems.com"
                  target="_blank"
                  className="hover:text-[#3FA9F5] transition-colors flex items-center gap-1"
                >
                  sletchersystems.com
                  <ExternalLink className="h-3 w-3" />
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#3FA9F5]" />
                <Link
                  href="tel:+27632642657"
                  className="hover:text-[#3FA9F5] transition-colors"
                >
                  +27 63 264 2657
                </Link>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-[#3FA9F5]" />
                <Link
                  href="https://www.linkedin.com/in/waynesletcher/"
                  target="_blank"
                  className="hover:text-[#3FA9F5] transition-colors"
                >
                  linkedin.com/in/waynesletcher
                </Link>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <Link
                href="https://wa.me/27632642657"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#25D366]/90"
              >
                <svg
                  className="mr-2 h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                </svg>
                WhatsApp
              </Link>
              <Link
                href="https://www.facebook.com/waynesletcher"
                target="_blank"
                className="inline-flex items-center justify-center rounded-md bg-[#1877F2] px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-[#1877F2]/90"
              >
                <Facebook className="mr-2 h-4 w-4" />
                Facebook
              </Link>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden h-[400px] relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106439.83147298399!2d25.5135!3d-33.9581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e7bad2b9dca2447%3A0x9e2b5258e2d96db3!2sPort%20Elizabeth%2C%20South%20Africa!5e0!3m2!1sen!2sus!4v1710628230000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}


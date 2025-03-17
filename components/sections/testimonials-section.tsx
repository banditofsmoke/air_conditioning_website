import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { TestimonialCard } from "@/components/ui-cards"

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">What Our Clients Say</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Serving Port Elizabeth/Gqeberha & Surrounding Areas with pride.
          </p>
        </div>
        <Tabs defaultValue="testimonial1" className="max-w-3xl mx-auto">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="testimonial1">Residential</TabsTrigger>
            <TabsTrigger value="testimonial2">Commercial</TabsTrigger>
            <TabsTrigger value="testimonial3">Refrigeration</TabsTrigger>
          </TabsList>
          <TabsContent value="testimonial1" className="mt-6">
            <TestimonialCard
              name="Sarah Johnson"
              role="Homeowner"
              testimonial="Penguin Air-conditioning installed our new air conditioning system and we couldn't be happier. The team was professional, efficient, and left our home spotless. The cooling is perfect and our energy bills have actually gone down!"
            />
          </TabsContent>
          <TabsContent value="testimonial2" className="mt-6">
            <TestimonialCard
              name="Michael Pretorius"
              role="Restaurant Owner"
              testimonial="Johan and his team installed a complete HVAC system for our new restaurant. Their expertise and attention to detail ensured our dining area stays comfortable year-round. Highly recommended for any commercial cooling needs."
            />
          </TabsContent>
          <TabsContent value="testimonial3" className="mt-6">
            <TestimonialCard
              name="David Naidoo"
              role="Supermarket Manager"
              testimonial="When our coldroom system failed, Penguin Air-conditioning responded immediately. They not only fixed the issue but also upgraded our system to be more efficient. Their quick response saved us thousands in potential stock losses."
            />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


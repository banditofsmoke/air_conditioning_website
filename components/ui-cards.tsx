"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Star } from "lucide-react"

export function ServiceCard({
  title,
  description,
  icon,
  onClick,
}: {
  title: string
  description: string
  icon: string
  onClick: () => void
}) {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          {icon} {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full group" onClick={onClick}>
          Learn More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export function PricingCard({
  btu,
  price,
  onClick,
}: {
  btu: string
  price: string
  onClick: () => void
}) {
  return (
    <Card className="group cursor-pointer hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{btu}</CardTitle>
        <CardDescription>Avalanche Inverter R410A</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-4xl font-bold">{price}</div>
        <p className="text-muted-foreground">Incl. 3m pipe kit & cables</p>
      </CardContent>
      <CardFooter>
        <Button className="w-full bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white group" onClick={onClick}>
          Get This Deal <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  )
}

export function TestimonialCard({
  name,
  role,
  testimonial,
}: {
  name: string
  role: string
  testimonial: string
}) {
  return (
    <Card className="bg-muted/50 dark:bg-muted/30">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-4 w-4 text-yellow-500" /> {name}
        </CardTitle>
        <CardDescription>{role}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{testimonial}"</p>
      </CardContent>
    </Card>
  )
}


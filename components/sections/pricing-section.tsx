"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Info } from "lucide-react"

const products = {
  avalanche: [
    {
      type: "Air Conditioner",
      brand: "Avalanche",
      model: "AVL-BRZ-9IN-INV / AVL-BRZ-9OUT-INV (AVL-BRZ-9)",
      btu: "9000",
      price: "R7442",
      features: ["Inverter", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Avalanche",
      model: "AVL-BRZ-12IN-INV / AVL-BRZ-12OUT-INV (AVL-BRZ-12)",
      btu: "12000",
      price: "R7929",
      features: ["Inverter", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Avalanche",
      model: "AVL-BRZ-18IN-INV / AVL-BRZ-18OUT-INV (AVL-BRZ-18)",
      btu: "18000",
      price: "R10533",
      features: ["Inverter", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Avalanche",
      model: "AVL-BRZ-24IN-INV / AVL-BRZ-24OUT-INV (AVL-BRZ-24)",
      btu: "24000",
      price: "R14131",
      features: ["Inverter", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Avalanche",
      model: "AVL-BRZ-30IN-INV / AVL-BRZ-30OUT-INV (AVL-BRZ-30)",
      btu: "30000",
      price: "R17185",
      features: ["Inverter", "R410A", "Includes 3m pipe kit and connecting cables"]
    }
  ],
  kuhl: [
    {
      type: "Air Conditioner",
      brand: "Kuhl",
      model: "KUHL-MWS-9 / KUHL-MWS-9OUT (KUHL-MWS-9)",
      btu: "9000",
      price: "R5699",
      features: ["Fixed Speed", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Kuhl",
      model: "KUHL-MWS-12IN / KUHL-MWS-12OUT (KUHL-MWS-12)",
      btu: "12000",
      price: "R6049",
      features: ["Fixed Speed", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Kuhl",
      model: "KUHL-MWS-18IN / KUHL-MWS-18OUT (KUHL-MWS-18)",
      btu: "18000",
      price: "R8699",
      features: ["Fixed Speed", "R410A", "Includes 3m pipe kit and connecting cables"]
    },
    {
      type: "Air Conditioner",
      brand: "Kuhl",
      model: "KUHL-MWS-24IN / KUHL-MWS-24OUT (KUHL-MWS-24)",
      btu: "24000",
      price: "R11599",
      features: ["Fixed Speed", "R410A", "Includes 3m pipe kit and connecting cables"]
    }
  ],
  smartK: [
    {
      type: "Air Conditioner",
      brand: "Smart K",
      model: "K09INKH",
      btu: "9000",
      price: "Contact for pricing",
      specs: {
        cooling: "2500W",
        heating: "2700W",
        noise: "34-39 dBA",
      }
    },
    {
      type: "Air Conditioner",
      brand: "Smart K",
      model: "K12INKH",
      btu: "12000",
      specs: {
        cooling: "3100W",
        heating: "3200W",
        noise: "34-40 dBA",
        dimensions: "830x256x200mm",
        weight: "7.5kg indoor / 21kg outdoor"
      },
      features: ["EER Cooling: 3.00", "COP Heating: 2.61", "R410A"]
    },
    {
      type: "Air Conditioner",
      brand: "Smart K",
      model: "K18INKH",
      btu: "18000",
      specs: {
        cooling: "4800W",
        heating: "5100W",
        noise: "36-44 dBA",
        dimensions: "937x300x222mm",
        weight: "10kg indoor / 28.5kg outdoor"
      },
      features: ["EER Cooling: 3.00", "COP Heating: 3.61", "R410A"]
    },
    {
      type: "Air Conditioner",
      brand: "Smart K",
      model: "K24INKH",
      btu: "24000",
      specs: {
        cooling: "6100W",
        heating: "6400W",
        noise: "Coming soon",
        dimensions: "Coming soon",
        weight: "Coming soon"
      },
      features: ["Power Input Cooling: 1995W", "R410A"]
    }
  ]
}

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 bg-muted/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#3FA9F5] dark:text-[#5BC0EB]">
            Air Conditioning Units
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Browse our selection of quality air conditioning systems from trusted brands
          </p>
        </div>

        <Tabs defaultValue="avalanche" className="w-full">
          <TabsList className="grid w-full grid-cols-3 max-w-[400px] mx-auto mb-8">
            <TabsTrigger value="avalanche">Avalanche</TabsTrigger>
            <TabsTrigger value="kuhl">Kuhl</TabsTrigger>
            <TabsTrigger value="smartk">Smart K</TabsTrigger>
          </TabsList>

          <TabsContent value="avalanche">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.avalanche.map((product, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{product.model.split('/')[0]}</span>
                      <Badge variant="secondary">{product.btu} BTU</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-2xl font-bold mb-4">{product.price}</div>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="kuhl">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.kuhl.map((product, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{product.model.split('/')[0]}</span>
                      <Badge variant="secondary">{product.btu} BTU</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-2xl font-bold mb-4">{product.price}</div>
                    <ul className="space-y-2">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="smartk">
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {products.smartK.map((product, index) => (
                <Card key={index} className="flex flex-col">
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span className="text-lg">{product.model.split('/')[0]}</span>
                      <Badge variant="secondary">{product.btu} BTU</Badge>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="flex-1">
                    <div className="text-2xl font-bold mb-4">{product.price}</div>
                    <ul className="space-y-2">
                      {product.features?.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className="w-full">Request Quote</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}


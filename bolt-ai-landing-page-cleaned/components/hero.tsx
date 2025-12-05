"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const [query, setQuery] = useState("")

  const handleGenerate = () => {
    const encodedQuery = encodeURIComponent(query.trim())
    window.open(`https://boltai.dev/?query=${encodedQuery}`, "_blank", "noopener,noreferrer")
  }

  return (
    <section className="min-h-screen flex flex-col py-12 px-6 md:py-20 md:justify-center md:px-12 lg:px-20 bg-gradient-to-b from-background to-muted/20">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
          Build Amazing Web Apps with Bolt AI
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
          Generate complete web applications instantly with AI. No coding experience required.
        </p>

        <div className="mx-auto max-w-[530px] max-w-full bg-muted/50 rounded-2xl p-4 shadow-lg border border-border/50">
          <textarea
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Describe your web app..."
            className="w-full h-[120px] px-4 py-3 bg-background rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
            aria-label="Enter your web app description"
          />
          <Button onClick={handleGenerate} size="lg" className="w-full h-12 mt-3 rounded-xl">
            Generate Web App
          </Button>
        </div>
      </div>
    </section>
  )
}

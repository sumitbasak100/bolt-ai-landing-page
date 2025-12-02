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
 <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-gradient-to-b from-muted/50 to-background">
 <div className="max-w-3xl mx-auto text-center">
 <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-balance leading-tight">
 Design Amazing UIs and Prototypes with BoltAI
 </h1>

 <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-xl mx-auto">
 Generate stunning UI designs instantly with AI. No design skills required.
 </p>

 <div className="mx-auto w-[530px] max-w-full bg-muted/50 rounded-2xl p-4 shadow-lg border border-border/50">
 <textarea
 value={query}
 onChange={(e) => setQuery(e.target.value)}
 placeholder="Describe your UI design..."
 className="w-full h-[120px] px-4 py-3 bg-background rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none resize-none"
 aria-label="Enter your UI design prompt"
 />
 <Button onClick={handleGenerate} size="lg" className="w-full h-12 mt-3 rounded-xl">
 Generate UI
 </Button>
 </div>
 </div>
 </section>
 )
}

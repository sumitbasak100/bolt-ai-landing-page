import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Bolt new - AI Web App Builder | Generate Web Applications Instantly",
  description:
    "Bolt new is an AI-powered platform for building web applications. Generate complete web apps, dashboards, and interactive tools in seconds. No coding experience required. Export to Figma, PNG, SVG, JPG.",
  keywords: [
    "AI web app builder",
    "AI app generator",
    "web application builder",
    "AI development tool",
    "no-code web app",
    "automated web development",
    "Bolt new",
    "AI app creator",
    "web app generator",
    "dashboard builder",
    "interactive app maker",
    "Figma export",
    "AI-powered development",
    "instant web apps",
    "no-code platform",
  ],
  authors: [{ name: "Bolt new" }],
  creator: "Bolt new",
  publisher: "Bolt new",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://bolt.new",
    siteName: "Bolt new",
    title: "Bolt new - AI Web App Builder | Generate Web Applications Instantly",
    description:
      "Generate complete web applications, dashboards, and interactive tools instantly with AI. Export to Figma or images. No coding skills needed.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bolt new - AI Web App Builder",
    description: "Generate web applications instantly with AI. Export to Figma, PNG, SVG, or JPG.",
  },
  alternates: {
    canonical: "https://bolt.new",
  },
  generator: ''
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "SoftwareApplication",
                  name: "Bolt new",
                  applicationCategory: "DeveloperApplication",
                  operatingSystem: "Web",
                  description:
                    "AI-powered web application builder that generates complete web apps, dashboards, and interactive tools instantly.",
                  url: "https://bolt.new",
                  offers: {
                    "@type": "Offer",
                    price: "0",
                    priceCurrency: "USD",
                  },
                  aggregateRating: {
                    "@type": "AggregateRating",
                    ratingValue: "4.9",
                    ratingCount: "2500",
                  },
                  featureList: [
                    "AI-powered web app generation",
                    "Dashboard creation",
                    "Interactive tool builder",
                    "Export to Figma",
                    "Export as PNG, SVG, JPG",
                    "No-code development",
                  ],
                },
                {
                  "@type": "Organization",
                  name: "Bolt new",
                  url: "https://bolt.new",
                  sameAs: [],
                },
                {
                  "@type": "WebSite",
                  name: "Bolt new",
                  url: "https://bolt.new",
                  potentialAction: {
                    "@type": "SearchAction",
                    target: "https://bolt.new/?query={search_term_string}",
                    "query-input": "required name=search_term_string",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}

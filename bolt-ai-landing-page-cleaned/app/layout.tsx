import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
 title: "BoltAI - AI UI Designer | Generate Wireframes, Prototypes & Web Designs Instantly",
 description:
 "BoltAI is an AI-powered platform for creating UI/UX designs, wireframes, and interactive prototypes. Generate website layouts, mobile app designs, dashboards, and landing pages in seconds. No design experience required. Export to Figma, Sketch, PNG, SVG.",
 keywords: [
 "AI UI designer",
 "AI UX design tool",
 "AI wireframe generator",
 "AI prototype generator",
 "AI web design",
 "UI generator",
 "no-code design tool",
 "automated UI design",
 "BoltAI",
 "AI interface builder",
 "website layout generator",
 "mobile app design AI",
 "dashboard design tool",
 "landing page generator",
 "Figma alternative",
 "AI design platform",
 "drag and drop editor",
 "design collaboration tool",
 "clickable prototype maker",
 "AI-powered wireframes",
 ],
 authors: [{ name: "BoltAI" }],
 creator: "BoltAI",
 publisher: "BoltAI",
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
 url: "https://boltai.dev",
 siteName: "BoltAI",
 title: "BoltAI - AI UI Designer | Wireframes, Prototypes & Web Designs",
 description:
 "Generate beautiful UI/UX designs, wireframes, and interactive prototypes instantly with AI. Export to Figma, Sketch, or code. No design skills needed.",
 },
 twitter: {
 card: "summary_large_image",
 title: "BoltAI - AI UI Designer | Wireframes & Prototypes",
 description: "Generate UI/UX designs, wireframes, and prototypes instantly with AI. Export to Figma or code.",
 },
 alternates: {
 canonical: "https://boltai.dev",
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
 <html lang="en">
 <head>
 <script
 type="application/ld+json"
 dangerouslySetInnerHTML={{
 __html: JSON.stringify({
 "@context": "https://schema.org",
 "@graph": [
 {
 "@type": "SoftwareApplication",
 name: "BoltAI",
 applicationCategory: "DesignApplication",
 operatingSystem: "Web",
 description:
 "AI-powered UI/UX design platform that generates wireframes, prototypes, website layouts, mobile app designs, and dashboards instantly.",
 url: "https://boltai.dev",
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
 "AI-powered UI generation",
 "Wireframe creation",
 "Interactive prototypes",
 "Export to Figma and Sketch",
 "Real-time collaboration",
 "Drag-and-drop editor",
 ],
 },
 {
 "@type": "Organization",
 name: "BoltAI",
 url: "https://boltai.dev",
 sameAs: [],
 },
 {
 "@type": "WebSite",
 name: "BoltAI",
 url: "https://boltai.dev",
 potentialAction: {
 "@type": "SearchAction",
 target: "https://boltai.dev/?query={search_term_string}",
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

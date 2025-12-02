import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { FAQ } from "@/components/faq"
import { BlogArticles } from "@/components/blog-articles"
import { Footer } from "@/components/footer"

export default function Home() {
 return (
 <main>
 <Header />
 <Hero />
 <Features />
 <FAQ />
 <BlogArticles />
 <Footer />
 </main>
 )
}

export function Features() {
 const features = [
 {
 title: "AI-Powered UI/UX Generation",
 description:
 "Describe your vision in plain English and watch BoltAI create pixel-perfect interfaces instantly. Our generative AI models are trained on thousands of design patterns and best practices.",
 },
 {
 title: "Wireframe & Prototype Creator",
 description:
 "Generate functional wireframes and clickable prototypes ready for presentation or development handoff. Build interactive prototypes in minutes instead of hours.",
 },
 {
 title: "Export to Figma, Sketch & Code",
 description:
 "Export your AI-generated designs in multiple formats including Figma, Sketch, Adobe XD, PNG, SVG, and production-ready HTML/CSS code.",
 },
 {
 title: "No Design Skills Required",
 description:
 "Anyone can create professional UI designs. BoltAI's user-friendly interface lets beginners generate high-quality UI concepts within minutes using simple text prompts.",
 },
 ]

 return (
 <section id="features" className="py-16 px-4 bg-secondary">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-bold text-center text-foreground mb-4">
 Why Choose BoltAI for AI-Powered UI Design
 </h2>
 <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
 BoltAI combines artificial intelligence with design best practices to help designers, developers, and startups
 create beautiful interfaces faster than ever.
 </p>
 <div className="grid md:grid-cols-2 gap-6">
 {features.map((feature, index) => (
 <article key={index} className="p-6 bg-background border border-border rounded-lg">
 <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
 <p className="text-muted-foreground text-sm">{feature.description}</p>
 </article>
 ))}
 </div>
 <div className="text-center mt-10">
 <a
 href="https://boltai.dev"
 target="_blank"
 rel="noopener noreferrer"
 className="text-primary font-medium hover:underline"
 >
 Start Designing with BoltAI →
 </a>
 </div>
 </div>
 </section>
 )
}

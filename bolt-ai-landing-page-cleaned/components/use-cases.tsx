export function UseCases() {
 const useCases = [
 {
 title: "Startup Landing Pages",
 description: "Launch your product faster with AI-generated landing pages that convert visitors into customers.",
 },
 {
 title: "SaaS Dashboards",
 description: "Design complex admin panels and analytics dashboards with charts, tables, and data visualizations.",
 },
 {
 title: "E-commerce Interfaces",
 description: "Create product pages, shopping carts, and checkout flows that drive sales.",
 },
 {
 title: "Mobile App Mockups",
 description: "Design responsive mobile interfaces for iOS and Android app prototypes.",
 },
 ]

 return (
 <section id="use-cases" className="py-16 px-4 bg-secondary">
 <div className="max-w-5xl mx-auto">
 <h2 className="text-3xl font-bold text-center text-foreground mb-4">What Can You Design with BoltAI</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
 From simple landing pages to complex web applications, BoltAI handles any UI design challenge.
 </p>
 <div className="grid md:grid-cols-2 gap-6">
 {useCases.map((useCase, index) => (
 <article key={index} className="p-6 bg-background border border-border rounded-lg">
 <h3 className="text-lg font-semibold text-foreground mb-2">{useCase.title}</h3>
 <p className="text-muted-foreground text-sm">{useCase.description}</p>
 </article>
 ))}
 </div>
 </div>
 </section>
 )
}

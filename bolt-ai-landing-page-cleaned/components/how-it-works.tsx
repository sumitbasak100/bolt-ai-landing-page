export function HowItWorks() {
 const steps = [
 {
 step: "1",
 title: "Describe Your Design",
 description:
 "Enter a text description of the UI you want. Include details about layout, colors, and functionality.",
 },
 {
 step: "2",
 title: "AI Generates Your UI",
 description:
 "BoltAI's advanced AI analyzes your prompt and creates a complete, responsive user interface design.",
 },
 {
 step: "3",
 title: "Customize and Export",
 description: "Refine the generated design, then export production-ready code for your web application.",
 },
 ]

 return (
 <section id="how-it-works" className="py-16 px-4">
 <div className="max-w-4xl mx-auto">
 <h2 className="text-3xl font-bold text-center text-foreground mb-4">How BoltAI Works</h2>
 <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
 Create professional UI designs in three simple steps with our AI design generator.
 </p>
 <div className="space-y-8">
 {steps.map((item, index) => (
 <div key={index} className="flex gap-6 items-start">
 <span className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
 {item.step}
 </span>
 <div>
 <h3 className="text-xl font-semibold text-foreground mb-1">{item.title}</h3>
 <p className="text-muted-foreground">{item.description}</p>
 </div>
 </div>
 ))}
 </div>
 </div>
 </section>
 )
}

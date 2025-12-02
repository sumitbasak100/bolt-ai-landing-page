export function FAQ() {
 const faqs = [
 {
 question: "What is BoltAI and how does the AI UI designer work?",
 answer:
 "BoltAI is an advanced online platform that uses artificial intelligence to help designers, developers, and startups create UI/UX designs, wireframes, and interactive prototypes quickly and effortlessly. Simply describe your idea or upload design references, and the platform generates tailored prototypes or wireframes that match your vision using generative AI models trained on thousands of design patterns and best practices.",
 },
 {
 question: "Who can use BoltAI for UI/UX design?",
 answer:
 "BoltAI is designed for product designers, developers, entrepreneurs, agencies, and anyone looking to bring digital product ideas to life—no design experience required. Whether you're a startup founder, freelance developer, or enterprise design team, BoltAI's user-friendly interface lets beginners generate high-quality UI concepts within minutes using simple text prompts.",
 },
 {
 question: "What types of designs can I create with BoltAI's AI design tool?",
 answer:
 "You can generate website layouts, mobile app designs, dashboard interfaces, landing pages, wireframes, and even clickable prototypes ready for presentation or development handoff. BoltAI handles everything from e-commerce interfaces to admin panels and responsive navigation menus.",
 },
 {
 question: "Can I customize AI-generated wireframes and prototypes?",
 answer:
 "Yes! BoltAI provides editable components and an intuitive drag-and-drop editor, allowing you to tweak colors, typography, spacing, and layouts to match your brand style. The AI-generated wireframes are functional, consistent, and ready for refinement to suit your project's needs.",
 },
 {
 question: "Can I export designs from BoltAI to Figma, Sketch, or other formats?",
 answer:
 "Yes, BoltAI allows you to export your projects in multiple formats, including Figma, Sketch, Adobe XD, PNG, SVG, and interactive prototype links. The platform also integrates with developer platforms for smoother design-to-development handoff.",
 },
 {
 question: "Is my design data secure on BoltAI?",
 answer:
 "Your privacy and data security are top priorities. BoltAI uses encrypted connections, secure cloud storage, and strict access controls to keep your projects safe and confidential. Enterprise-grade security ensures your design assets remain protected.",
 },
 ]

 return (
 <section id="faq" className="py-16 px-4 bg-secondary">
 <div className="max-w-3xl mx-auto">
 <h2 className="text-3xl font-bold text-center text-foreground mb-4">Frequently Asked Questions About BoltAI</h2>
 <p className="text-center text-muted-foreground mb-12">
 Everything you need to know about AI-powered UI/UX design, wireframes, and prototype generation with BoltAI.
 </p>
 <div className="space-y-6" itemScope itemType="https://schema.org/FAQPage">
 {faqs.map((faq, index) => (
 <article
 key={index}
 className="border-b border-border pb-6"
 itemScope
 itemProp="mainEntity"
 itemType="https://schema.org/Question"
 >
 <h3 className="text-lg font-semibold text-foreground mb-2" itemProp="name">
 {faq.question}
 </h3>
 <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
 <p className="text-muted-foreground" itemProp="text">
 {faq.answer}
 </p>
 </div>
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
 Have more questions? Visit BoltAI →
 </a>
 </div>
 </div>
 </section>
 )
}

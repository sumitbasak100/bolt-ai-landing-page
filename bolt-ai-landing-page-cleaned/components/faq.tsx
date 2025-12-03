export function FAQ() {
  const faqs = [
    {
      question: "What is Bolt AI and how does the AI web app builder work?",
      answer:
        "Bolt AI is an advanced online platform that uses artificial intelligence to help developers, entrepreneurs, and businesses create web applications quickly and effortlessly. Simply describe your app idea or requirements, and the platform generates tailored web applications using generative AI models trained on thousands of development patterns and best practices.",
    },
    {
      question: "Who can use Bolt AI for web app development?",
      answer:
        "Bolt AI is designed for developers, entrepreneurs, startups, agencies, and anyone looking to bring digital product ideas to life—no extensive coding experience required. Whether you're a solo founder, developer, or enterprise team, Bolt AI's user-friendly interface lets you generate professional web applications within minutes using simple text prompts.",
    },
    {
      question: "What types of web applications can I create with Bolt AI's AI builder?",
      answer:
        "You can generate dashboards, admin panels, interactive tools, data visualizations, web applications, and custom business tools. Bolt AI handles everything from simple utilities to complex multi-page applications with real functionality.",
    },
    {
      question: "Can I customize AI-generated web applications?",
      answer:
        "Yes! Bolt AI provides editable components and an intuitive interface, allowing you to refine functionality, adjust styling, modify layouts, and customize features to match your specific requirements. The AI-generated applications are functional, consistent, and ready for further refinement.",
    },
    {
      question: "Can I export web apps from Bolt AI to Figma or as images?",
      answer:
        "Yes, Bolt AI allows you to export your projects in multiple formats, including Figma for design collaboration, and as PNG, SVG, and JPG images for presentations, documentation, and sharing. This makes it easy to integrate with your existing workflow.",
    },
    {
      question: "Is my web app data secure on Bolt AI?",
      answer:
        "Your privacy and data security are top priorities. Bolt AI uses encrypted connections, secure cloud storage, and strict access controls to keep your projects safe and confidential. Enterprise-grade security ensures your application data remains protected.",
    },
  ]

  return (
    <section id="faq" className="py-16 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">Frequently Asked Questions About Bolt AI</h2>
        <p className="text-center text-muted-foreground mb-12">
          Everything you need to know about AI-powered web app development with Bolt AI.
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
            Have more questions? Visit Bolt AI →
          </a>
        </div>
      </div>
    </section>
  )
}

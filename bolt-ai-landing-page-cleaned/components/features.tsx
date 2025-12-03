export function Features() {
  const features = [
    {
      title: "AI-Powered Web App Generation",
      description:
        "Describe your vision in plain English and watch Bolt AI create fully functional web applications instantly. Our AI models understand your requirements and build complete apps.",
    },
    {
      title: "Dashboard & Tool Builder",
      description:
        "Generate interactive dashboards, admin panels, and custom tools ready for deployment. Build complex applications in minutes instead of weeks.",
    },
    {
      title: "Export to Figma & Images",
      description:
        "Export your AI-generated web apps in multiple formats: Figma for design collaboration, or as PNG, SVG, and JPG images for presentations and documentation.",
    },
    {
      title: "No Coding Skills Required",
      description:
        "Anyone can create professional web applications. Bolt AI's user-friendly interface lets you generate complex apps using simple text descriptions.",
    },
  ]

  return (
    <section id="features" className="py-16 px-4 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-foreground mb-4">
          Why Choose Bolt AI for AI-Powered Web Development
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Bolt AI combines artificial intelligence with modern development practices to help anyone
          create powerful web applications faster than ever.
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
            Start Building with Bolt AI →
          </a>
        </div>
      </div>
    </section>
  )
}

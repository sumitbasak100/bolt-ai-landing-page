export function Footer() {
  return (
    <footer className="py-12 px-4 bg-muted/30 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-bold text-foreground mb-4">Bolt AI</h4>
            <p className="text-sm text-muted-foreground">
              The fastest way to build web applications with artificial intelligence. No coding skills
              required.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground">
                  AI Development Features
                </a>
              </li>
              <li>
                <a href="#faq" className="text-muted-foreground hover:text-foreground">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#blog" className="text-muted-foreground hover:text-foreground">
                  Resources & Guides
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-foreground mb-4">Get Started</h4>
            <p className="text-sm text-muted-foreground mb-4">
              Ready to transform your development workflow? Start creating AI-powered web applications today.
            </p>
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm font-medium text-primary hover:underline"
            >
              Try Bolt AI Free →
            </a>
          </div>
        </div>
        <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Bolt AI. AI-Powered Web App Builder.</p>
        </div>
      </div>
    </footer>
  )
}

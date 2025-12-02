export function Footer() {
 return (
 <footer className="py-12 px-4 bg-secondary border-t border-border">
 <div className="max-w-5xl mx-auto">
 <div className="grid md:grid-cols-3 gap-8 mb-8">
 <div>
 <h4 className="font-bold text-foreground mb-4">BoltAI</h4>
 <p className="text-sm text-muted-foreground">
 The fastest way to design beautiful user interfaces with artificial intelligence. No design skills
 required.
 </p>
 </div>
 <div>
 <h4 className="font-bold text-foreground mb-4">Quick Links</h4>
 <ul className="space-y-2 text-sm">
 <li>
 <a href="#features" className="text-muted-foreground hover:text-foreground">
 AI Design Features
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
 Ready to transform your design workflow? Start creating AI-powered UI designs today.
 </p>
 <a
 href="https://boltai.dev"
 target="_blank"
 rel="noopener noreferrer"
 className="inline-block text-sm font-medium text-primary hover:underline"
 >
 Try BoltAI Free →
 </a>
 </div>
 </div>
 <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
 <p>© {new Date().getFullYear()} BoltAI. AI-Powered UI Design Tool.</p>
 </div>
 </div>
 </footer>
 )
}

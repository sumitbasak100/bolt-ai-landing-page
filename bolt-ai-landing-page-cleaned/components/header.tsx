export function Header() {
  return (
    <header className="border-b border-border">
      <nav className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between" aria-label="Main navigation">
        <a
          href="https://bolt.new"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl font-bold text-foreground"
        >
          Bolt AI
        </a>
        <ul className="flex items-center gap-6 text-sm">
          <li>
            <a href="#features" className="text-muted-foreground hover:text-foreground">
              Features
            </a>
          </li>
          <li>
            <a href="#faq" className="text-muted-foreground hover:text-foreground">
              FAQ
            </a>
          </li>
          <li>
            <a href="#blog" className="text-muted-foreground hover:text-foreground">
              Resources
            </a>
          </li>
          <li>
            <a
              href="https://bolt.new"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary font-medium hover:underline"
            >
              Try Bolt AI
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

import Link from "next/link"

export function Footer() {
  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "Our Vision", href: "#vision" },
    { label: "Manifesto", href: "#manifesto" },
    { label: "Join GJP", href: "#join" },
    { label: "Founder", href: "#founder" },
  ]

  const demands = [
    { label: "Free WiFi", href: "#manifesto" },
    { label: "Pro Recognition", href: "#manifesto" },
    { label: "Audio Freedom", href: "#manifesto" },
    { label: "Modern Education", href: "#manifesto" },
  ]

  const legal = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Cookie Policy", href: "#" },
    { label: "Disclaimer", href: "#" },
  ]

  return (
    <footer className="bg-[#2a2520]">
      {/* Main Footer Content */}
      <div className="px-6 py-16 md:px-12 md:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Column 1: Quick Links */}
            <div>
              <h3 className="mb-6 font-serif text-lg font-bold uppercase tracking-wider text-[#F4EFE6]">
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Our Demands */}
            <div>
              <h3 className="mb-6 font-serif text-lg font-bold uppercase tracking-wider text-[#F4EFE6]">
                Our Demands
              </h3>
              <ul className="space-y-3">
                {demands.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="mb-6 font-serif text-lg font-bold uppercase tracking-wider text-[#F4EFE6]">
                Legal
              </h3>
              <ul className="space-y-3">
                {legal.map((link) => (
                  <li key={link.label}>
                    <Link 
                      href={link.href}
                      className="text-sm text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="px-6 py-6 md:px-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 md:flex-row md:justify-between">
          {/* Left side */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="border-2 border-[#C44536] bg-[#C44536] px-3 py-1 text-xs font-bold uppercase text-[#F4EFE6]">
              Satire
            </span>
            <span className="text-xs text-[#F4EFE6]/60">
              © 2026 GOONERS JANATHA PARTY. ALL RIGHTS IGNORED.
            </span>
          </div>

          {/* Right side - Social Links */}
          <div className="flex items-center gap-6">
            <Link 
              href="#" 
              className="text-xs font-bold uppercase tracking-wider text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
            >
              Twitter
            </Link>
            <Link 
              href="https://instagram.com/thesai.x" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold uppercase tracking-wider text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
            >
              Instagram
            </Link>
            <Link 
              href="#" 
              className="text-xs font-bold uppercase tracking-wider text-[#F4EFE6]/70 transition-colors hover:text-[#C44536]"
            >
              YouTube
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { Instagram } from "lucide-react"

export function FounderSection() {
  return (
    <section className="border-b-4 border-foreground px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block border-2 border-foreground bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
            Leadership
          </span>
          <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
            Meet the <span className="text-primary">Founder</span>
          </h2>
        </div>

        {/* Founder Card */}
        <div 
          className="border-4 border-foreground bg-card p-8 md:p-12"
          style={{ boxShadow: "8px 8px 0 0 #1a1a1a" }}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-start">
            {/* Avatar Placeholder */}
            <div className="flex h-32 w-32 shrink-0 items-center justify-center border-4 border-foreground bg-muted">
              <span className="font-serif text-4xl font-black text-primary">S</span>
            </div>

            {/* Bio Content */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="mb-2 font-serif text-2xl font-black uppercase text-foreground md:text-3xl">
                Sai
              </h3>
              <a 
                href="https://instagram.com/thesai.x" 
                target="_blank" 
                rel="noopener noreferrer"
                className="mb-6 inline-flex items-center gap-2 text-sm font-bold text-primary hover:underline"
              >
                <Instagram className="h-4 w-4" />
                Instagram: @thesai.x
              </a>
              <p className="mt-4 text-lg leading-relaxed text-muted-foreground md:text-xl">
                The visionary who realized the system was rigged. What started as an internet crusade is now a{" "}
                <span className="font-bold text-foreground">revolution for the true sacrificers</span>. Follow for official party mandates.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

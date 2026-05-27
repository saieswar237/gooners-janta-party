const agendas = [
  {
    number: "01",
    title: "Free WiFi & VPN",
    description: "Free WiFi and VPN all year without any restrictions, blocks, or leakage of data."
  },
  {
    number: "02", 
    title: "Professional Recognition",
    description: "Gooning must be recognized as a paid, full-time profession."
  },
  {
    number: "03",
    title: "Audio Freedom",
    description: "Free Spotify Premium for all official candidates because ads ruin the vibe."
  },
  {
    number: "04",
    title: "Modern Education",
    description: "Mandatory Sex Education starting from 8th Standard—because the internet shouldn't be the only teacher."
  }
]

export function AgendasSection() {
  return (
    <section id="manifesto" className="border-b-4 border-foreground px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-2 border-foreground bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            The Manifesto
          </span>
          <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
            The <span className="text-primary">Agendas</span>: Non-negotiable
          </h2>
        </div>

        {/* Agenda Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {agendas.map((agenda) => (
            <div
              key={agenda.number}
              className="group border-4 border-foreground bg-card p-8 transition-all duration-100 hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none lg:p-10"
              style={{ boxShadow: "6px 6px 0 0 #1a1a1a" }}
            >
              <div className="mb-6 flex items-center gap-6">
                <span className="font-serif text-5xl font-black text-primary lg:text-6xl">
                  {agenda.number}
                </span>
                <div className="h-1 flex-1 bg-foreground" />
              </div>
              <h3 className="mb-4 font-serif text-xl font-bold uppercase text-foreground lg:text-2xl">
                {agenda.title}
              </h3>
              <p className="text-base leading-relaxed text-muted-foreground lg:text-lg">
                {agenda.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

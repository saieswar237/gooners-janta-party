export function VisionSection() {
  return (
    <section id="vision" className="border-b-4 border-foreground px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <span className="mb-4 inline-block border-2 border-foreground bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            A Party for the Forgotten
          </span>
          <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
            Our <span className="text-primary">Vision</span>
          </h2>
        </div>

        {/* Vision Content */}
        <div 
          className="border-4 border-foreground bg-card p-8 md:p-12"
          style={{ boxShadow: "8px 8px 0 0 #1a1a1a" }}
        >
          <p className="text-center text-lg leading-relaxed text-foreground md:text-xl lg:text-2xl">
            We are building a political platform that genuinely represents the{" "}
            <span className="font-bold text-primary">chronically online</span>. Society demands productivity, but we demand{" "}
            <span className="font-bold text-secondary">peace, unlimited bandwidth, and absolute freedom</span>{" "}
            for those who sacrifice their sleep. It is time the system counts us.
          </p>
        </div>
      </div>
    </section>
  )
}

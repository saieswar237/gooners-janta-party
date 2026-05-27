import { Check } from "lucide-react"

const criteria = [
  "Must strictly NOT follow No Nut November.",
  "Minimum commitment of 5 sessions per week.",
  "Must respect, support, and protect lesbians.",
  "Must have verified experience starting from age 14."
]

export function EligibilitySection() {
  return (
    <section id="eligibility" className="border-b-4 border-foreground px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-2 border-foreground bg-secondary px-4 py-1 text-xs font-bold uppercase tracking-widest text-secondary-foreground">
            Requirements
          </span>
          <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
            Are You <span className="text-primary">Eligible?</span>
          </h2>
        </div>

        {/* Eligibility Card */}
        <div 
          className="border-4 border-foreground bg-card p-8 md:p-12"
          style={{ boxShadow: "8px 8px 0 0 #1a1a1a" }}
        >
          <h3 className="mb-10 text-center font-serif text-2xl font-bold uppercase text-foreground md:text-3xl">
            Eligibility Criteria
          </h3>
          
          <ul className="space-y-8">
            {criteria.map((criterion, index) => (
              <li key={index} className="flex items-start gap-5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center border-4 border-foreground bg-secondary text-secondary-foreground">
                  <Check className="h-5 w-5" strokeWidth={3} />
                </div>
                <span className="pt-1.5 text-lg leading-relaxed text-foreground md:text-xl">
                  {criterion}
                </span>
              </li>
            ))}
          </ul>

          {/* Asterisk Note */}
          <p className="mt-10 text-center text-sm italic text-muted-foreground">
            * 75% members will be singles because couples get it free.
          </p>
        </div>
      </div>
    </section>
  )
}

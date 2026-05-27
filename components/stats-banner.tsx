"use client"

import { useState, useEffect } from "react"

export function StatsBanner() {
  const [pledgeCount, setPledgeCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setPledgeCount(prev => prev + Math.floor(Math.random() * 3) + 1)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const stats = [
    { value: pledgeCount, label: "Live Pledges", id: "banner-live-counter" },
    { value: 4, label: "Core Demands" },
    { value: 0, label: "Days Touched Grass" },
    { value: 1, label: "Founder: @thesai.x" },
  ]

  return (
    <section className="border-y-4 border-foreground bg-secondary">
      <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x-2 divide-foreground md:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            id={stat.id}
            className="flex flex-col items-center justify-center px-4 py-8 text-center md:py-10"
          >
            <span 
              className="font-serif text-4xl font-black text-secondary-foreground md:text-5xl lg:text-6xl"
              style={{ fontVariantNumeric: "tabular-nums" }}
            >
              {stat.value}
            </span>
            <span className="mt-2 text-xs font-bold uppercase tracking-wider text-secondary-foreground/80 md:text-sm">
              {stat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}

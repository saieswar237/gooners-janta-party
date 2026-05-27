"use client"

import { useState } from "react"
import { Lock } from "lucide-react"

export function JoinForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    age: "",
    gender: "",
    relationshipStatus: ""
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch("https://formspree.io/f/xlgvoydr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        alert("Oops! Something went wrong. Please try again.")
      }
    } catch (error) {
      alert("Error sending data. Check your connection.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  if (submitted) {
    return (
      <section id="join" className="px-6 py-20 md:px-12 md:py-28">
        <div className="mx-auto max-w-2xl text-center">
          <div 
            className="border-4 border-foreground bg-card p-12"
            style={{ boxShadow: "8px 8px 0 0 #1a1a1a" }}
          >
            <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
              Be a Candidate And <span className="text-primary">Be A Proud Gooner</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Your loyalty has been pledged. The revolution welcomes you.
            </p>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="join" className="px-6 py-20 md:px-12 md:py-28">
      <div className="mx-auto max-w-2xl">
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block border-2 border-foreground bg-primary px-4 py-1 text-xs font-bold uppercase tracking-widest text-primary-foreground">
            Registration
          </span>
          <h2 className="font-serif text-4xl font-black uppercase text-foreground md:text-5xl lg:text-6xl">
            Be a Candidate And <span className="text-primary">Be A Proud Gooner</span>
          </h2>
        </div>

        <form 
          onSubmit={handleSubmit}
          className="border-4 border-foreground bg-card p-8 md:p-12"
          style={{ boxShadow: "8px 8px 0 0 #1a1a1a" }}
        >
          <div className="space-y-8">
            <div>
              <label htmlFor="name" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Full Name</label>
              <input type="text" id="name" name="name" required value={formData.name} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]" placeholder="Enter your name" />
            </div>

            <div>
              <label htmlFor="email" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Email Address</label>
              <input type="email" id="email" name="email" required value={formData.email} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]" placeholder="Enter your email" />
            </div>

            <div>
              <label htmlFor="phone" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Phone Number</label>
              <input type="tel" id="phone" name="phone" required value={formData.phone} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]" placeholder="Enter your phone number" />
            </div>

            <div>
              <label htmlFor="instagram" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Instagram Handle</label>
              <input type="text" id="instagram" name="instagram" required value={formData.instagram} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]" placeholder="@yourusername" />
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <label htmlFor="age" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Age</label>
                <input type="number" id="age" name="age" required min="14" value={formData.age} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]" placeholder="Your age" />
              </div>

              <div>
                <label htmlFor="gender" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Gender</label>
                <select id="gender" name="gender" required value={formData.gender} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]">
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="non-binary">Non-binary</option>
                  <option value="prefer-not-to-say">Prefer not to say</option>
                </select>
              </div>
            </div>

            <div>
              <label htmlFor="relationshipStatus" className="mb-3 block text-sm font-bold uppercase tracking-wider text-foreground">Relationship Status</label>
              <select id="relationshipStatus" name="relationshipStatus" required value={formData.relationshipStatus} onChange={handleChange} className="w-full border-4 border-foreground bg-background px-5 py-4 text-foreground outline-none transition-shadow focus:shadow-[4px_4px_0_0_#C44536]">
                <option value="">Select status</option>
                <option value="single">Single</option>
                <option value="taken">Taken</option>
                <option value="complicated">It&apos;s Complicated</option>
                <option value="chronically-online">Chronically Online</option>
              </select>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full border-4 border-foreground bg-primary px-8 py-5 text-lg font-bold uppercase tracking-wider text-primary-foreground transition-all duration-100 hover:translate-x-[6px] hover:translate-y-[6px] hover:shadow-none active:translate-x-[6px] active:translate-y-[6px] active:shadow-none disabled:opacity-50"
              style={{ boxShadow: "6px 6px 0 0 #1a1a1a" }}
            >
              {isSubmitting ? "Pledging..." : "Pledge Your Loyalty"}
            </button>

            <div className="flex items-center justify-center gap-3 border-4 border-foreground bg-muted px-6 py-4">
              <Lock className="h-5 w-5 text-muted-foreground" />
              <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">
                Official Channel Unlocks at 50,000 Candidates
              </span>
            </div>

            <p className="text-center text-sm leading-relaxed text-muted-foreground">
              © 2026 Gooners Janta Party. Yes, we are collecting this for fun. No, we won&apos;t sell your data.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}
import Link from "next/link"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#F4F1E1] text-[#2C2C2C] p-10 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 uppercase tracking-wider border-b-2 border-[#2C2C2C] pb-4">
          Cookie Policy
        </h1>
        
        <p className="mb-8 text-sm italic">
          <strong>Effective Date:</strong> May 2026
        </p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-[#C44536]">
            1. What are cookies?
          </h2>
          <p className="mb-4 leading-relaxed">
            Cookies are small text files that websites place on your device. We use them primarily for Google Analytics so we can stare at our live user map and feel important.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-[#C44536]">
            2. How we use them
          </h2>
          <p className="mb-4 leading-relaxed">
            We use performance cookies to measure site speed and traffic. We do not use advertising cookies because we do not have an ad budget.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-bold uppercase tracking-wide mb-4 text-[#C44536]">
            3. Managing Cookies
          </h2>
          <p className="mb-4 leading-relaxed">
            You can disable cookies in your browser settings, but honestly, it won't stop the revolution. 
          </p>
        </section>
        
        <div className="mt-12 pt-8 border-t-2 border-dashed border-[#2C2C2C]">
          <Link 
            href="/" 
            className="inline-block border-2 border-[#2C2C2C] bg-[#2C2C2C] px-4 py-2 text-sm font-bold uppercase text-[#F4F1E1] transition-colors hover:bg-transparent hover:text-[#2C2C2C]"
          >
            ← Back to Headquarters
          </Link>
        </div>
      </div>
    </main>
  );
}
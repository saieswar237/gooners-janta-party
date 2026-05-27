import Link from "next/link"

export default function CookiePolicy() {
  return (
    <main className="min-h-screen bg-[#F4F1E1] text-[#2C2C2C] p-10 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">What are cookies?</h2>
        <p className="mb-4">
          Cookies are small text files that websites place on your device. We use them primarily for Google Analytics and Vercel Analytics so we can stare at our live user map and feel important.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How we use them</h2>
        <p className="mb-4">
          We use performance cookies to measure site speed and traffic. We do not use advertising cookies because we do not have an ad budget.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Managing Cookies</h2>
        <p className="mb-4">
          You can disable cookies in your browser settings, but honestly, it won't stop the revolution. 
        </p>
        
        <div className="mt-12 pt-8 border-t border-[#2C2C2C]">
          <Link href="/" className="hover:underline">← Back to Headquarters</Link>
        </div>
      </div>
    </main>
  );
}
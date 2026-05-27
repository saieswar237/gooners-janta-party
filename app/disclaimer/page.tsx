import Link from "next/link"

export default function Disclaimer() {
  return (
    <main className="min-h-screen bg-[#F4F1E1] text-[#2C2C2C] p-10 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Official Disclaimer</h1>
        
        <div className="bg-[#C44536] text-[#F4EFE6] p-6 rounded-md mb-8">
          <p className="font-bold text-lg uppercase tracking-widest">
            Read carefully before proceeding.
          </p>
        </div>
        
        <p className="mb-4">
          The Gooners Janta Party (GJP) is a fictional, satirical organization created for entertainment and web development testing purposes. It is not a registered political entity in India or anywhere else on Earth.
        </p>

        <p className="mb-4">
          Any resemblance to real political parties, living or chronically online persons, or actual government policies is entirely coincidental and used for comedic effect. 
        </p>

        <p className="mb-4">
          Do not use our platform to make real-world financial, legal, or life decisions. We are just here for the performance metrics and the memes.
        </p>
        
        <div className="mt-12 pt-8 border-t border-[#2C2C2C]">
          <Link href="/" className="hover:underline">← Back to Headquarters</Link>
        </div>
      </div>
    </main>
  );
}
import Link from "next/link"

export default function TermsOfService() {
  return (
    <main className="min-h-screen bg-[#F4F1E1] text-[#2C2C2C] p-10 md:p-24 font-mono">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
        <p className="mb-4"><strong>Last Updated:</strong> May 2026</p>
        
        <h2 className="text-2xl font-bold mt-8 mb-4">1. Acceptance of Reality</h2>
        <p className="mb-4">
          By accessing this website, you accept that this is a satirical political party. We cannot actually guarantee you free WiFi or a 75% reservation for being single, no matter how much you deserve it.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">2. User Conduct</h2>
        <p className="mb-4">
          You agree to embrace the irony. Taking this website too seriously in WhatsApp group chats is strictly prohibited and highly embarrassing for you.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">3. Liability</h2>
        <p className="mb-4">
          The Gooners Janta Party is not liable for any arguments you get into on X (formerly Twitter) while defending our manifesto. 
        </p>
        
        <div className="mt-12 pt-8 border-t border-[#2C2C2C]">
          <Link href="/" className="hover:underline">← Back to Headquarters</Link>
        </div>
      </div>
    </main>
  );
}
export function Navbar() {
  return (
    <header className="border-b-2 border-black bg-[#F4EFE6] px-6 py-4 z-50 sticky top-0 w-full">
      <div className="mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-3">
          <img src="/gooner-symbol.png" alt="logo" className="w-8 h-8 object-contain" />
          <span className="font-black text-xl tracking-tighter uppercase">GJP - EST. 2026</span>
        </div>

        {/* Right Side: Navigation Links */}
        <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8 font-bold text-sm uppercase">
          <a href="#vision" className="hover:text-[#C44536] transition-colors">Vision</a>
          <a href="#manifesto" className="hover:text-[#C44536] transition-colors">Manifesto</a>
          <a href="#eligibility" className="hover:text-[#C44536] transition-colors">Eligibility</a>
          <a href="#join" className="hover:text-[#C44536] transition-colors">Contact</a>

          <a href="#join" className="bg-black text-[#F4EFE6] px-5 py-2 hover:bg-[#C44536] transition-colors border-2 border-transparent hover:border-black shadow-[2px_2px_0px_0px_rgba(0,0,0,0.5)]">
            JOIN NOW
          </a>
        </nav>

      </div>
    </header>
  );
}
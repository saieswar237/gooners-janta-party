export function HeroSection() {
  return (
    <section className="relative border-b-2 border-black bg-[#F4EFE6] px-6 py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* LEFT COLUMN: Aggressive Text & Buttons */}
        <div className="space-y-6 z-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter font-serif leading-none border-l-8 border-black pl-4">
            <span className="text-[#2D4B2E]">Gooners</span> <br />
            <span className="text-[#C44536]">Janta Party</span>
          </h1>

          <p className="text-xl md:text-2xl font-bold font-sans tracking-wide">
            Voice of the Chronically Online & Unemployed.
          </p>

          <p className="text-lg font-medium font-sans max-w-lg">
            Gooners Janta Party (GJP) is India's #1 satirical political party for those who sacrifice their sleep for the algorithm. Join the revolution!
          </p>

          {/* Yellow Warning Block */}
          <div className="inline-block bg-yellow-400 border-2 border-black px-4 py-2 font-black text-sm md:text-base uppercase transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            ⚠️ WARNING: GRASS TOUCHING STRICTLY PROHIBITED
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6">
            <a href="#join-form" className="bg-[#C44536] text-[#F4EFE6] px-8 py-4 font-black text-xl uppercase border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-1 hover:translate-x-1 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] transition-all cursor-pointer">
              JOIN THE PARTY →
            </a>
            <a href="#manifesto" className="font-bold text-lg underline decoration-2 underline-offset-4 hover:text-[#C44536] transition-colors cursor-pointer">
              READ THE MANIFESTO
            </a>
          </div>
        </div>

        {/* RIGHT COLUMN: The Satirical Poster Frame */}
        <div className="flex justify-center md:justify-end z-10 mt-10 md:mt-0">
          {/* Tilted Frame */}
          <div className="relative bg-[#F4EFE6] border-4 border-black p-6 md:p-8 transform rotate-3 max-w-[380px] w-full shadow-[16px_16px_0px_0px_rgba(0,0,0,1)] hover:rotate-0 transition-transform duration-300">

            {/* Red Official Tag */}
            <div className="absolute -top-5 -right-5 bg-[#C44536] text-[#F4EFE6] border-2 border-black px-4 py-1 font-black text-sm uppercase rotate-[12deg] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              OFFICIAL
            </div>

            {/* YOUR MEME SYMBOL GOES HERE */}
            <div className="border-2 border-dashed border-gray-400 p-2 mb-6">
              <img
                src="/gooner-symbol.png"
                alt="GJP Official Symbol"
                className="w-full h-auto object-contain mix-blend-multiply"
              />
            </div>

            <div className="text-center border-t-4 border-black pt-4">
              <h3 className="font-black text-3xl uppercase tracking-widest text-[#2D4B2E]">GOONERS</h3>
              <h3 className="font-black text-2xl uppercase tracking-widest text-[#C44536]">JANTA PARTY</h3>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
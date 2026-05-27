export function MarqueeBanner() {
  const text = "VOICE OF THE CHRONICALLY ONLINE • "
  const repeatedText = text.repeat(10)

  return (
    <div className="overflow-hidden border-y-4 border-foreground bg-primary py-3">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground md:text-base">
          {repeatedText}
        </span>
        <span className="text-sm font-bold uppercase tracking-widest text-primary-foreground md:text-base">
          {repeatedText}
        </span>
      </div>
    </div>
  )
}

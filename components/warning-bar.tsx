export function WarningBar() {
  const text = "✦ THE REVOLUTION IS HERE ✦ THE SACRIFICERS HAVE AWOKEN ✦ JOIN THE RESISTANCE ✦ "
  const repeatedText = text.repeat(8)

  return (
    <div className="overflow-hidden bg-foreground py-2">
      <div className="animate-marquee flex whitespace-nowrap">
        <span className="text-xs font-bold uppercase tracking-widest text-background">
          {repeatedText}
        </span>
        <span className="text-xs font-bold uppercase tracking-widest text-background">
          {repeatedText}
        </span>
      </div>
    </div>
  )
}

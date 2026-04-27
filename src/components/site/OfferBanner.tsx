import { useEffect, useState } from "react";
import { Flame } from "lucide-react";

function getTimeLeft(target: number) {
  const diff = Math.max(0, target - Date.now());
  const d = Math.floor(diff / (1000 * 60 * 60 * 24));
  const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const m = Math.floor((diff / (1000 * 60)) % 60);
  const s = Math.floor((diff / 1000) % 60);
  return { d, h, m, s };
}

export function OfferBanner() {
  // 7-day rolling countdown for visual urgency
  const [target] = useState(() => Date.now() + 1000 * 60 * 60 * 24 * 7);
  const [time, setTime] = useState(() => getTimeLeft(target));

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const cell = (n: number, l: string) => (
    <span className="inline-flex flex-col items-center px-1.5">
      <span className="font-display text-sm leading-none">{String(n).padStart(2, "0")}</span>
      <span className="text-[9px] tracking-widest text-primary-foreground/80">{l}</span>
    </span>
  );

  return (
    <div className="bg-gradient-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs sm:text-sm font-medium">
        <span className="flex items-center gap-1.5 uppercase tracking-widest">
          <Flame className="h-4 w-4" /> Limited Offer — 50% Off First Month
        </span>
        <span className="hidden sm:inline opacity-70">•</span>
        <span className="flex items-center gap-1">
          Ends in {cell(time.d, "D")} {cell(time.h, "H")} {cell(time.m, "M")} {cell(time.s, "S")}
        </span>
      </div>
    </div>
  );
}

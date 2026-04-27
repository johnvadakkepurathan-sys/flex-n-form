import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Flame } from "lucide-react";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card">
      <div className="absolute inset-0 bg-gradient-primary opacity-10" />
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
        <div>
          <p className="flex items-center gap-2 text-primary font-semibold uppercase tracking-widest text-sm">
            <Flame className="h-4 w-4" /> Free 3-Day Trial
          </p>
          <h2 className="mt-3 font-display text-4xl md:text-5xl tracking-wider">
            Stop Waiting. <span className="text-gradient-primary">Start Forging.</span>
          </h2>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Train with elite coaches. Use world-class equipment. Become the strongest version of yourself — starting today.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Button asChild size="lg" className="bg-gradient-primary shadow-glow uppercase tracking-wider font-semibold">
            <Link to="/membership">Join Now</Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="border-primary/40 hover:bg-primary/10 uppercase tracking-wider font-semibold">
            <Link to="/contact">Free Consultation</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

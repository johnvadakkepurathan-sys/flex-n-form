import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { Gift } from "lucide-react";

const KEY = "ironforge_exit_shown";

export function ExitIntentDialog() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(KEY)) return;

    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        sessionStorage.setItem(KEY, "1");
        setOpen(true);
      }
    };
    const t = setTimeout(() => document.addEventListener("mouseout", onLeave), 8000);
    return () => {
      clearTimeout(t);
      document.removeEventListener("mouseout", onLeave);
    };
  }, []);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="border-primary/50 bg-card max-w-md">
        <DialogHeader>
          <div className="mx-auto mb-2 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-primary shadow-glow">
            <Gift className="h-7 w-7 text-primary-foreground" />
          </div>
          <DialogTitle className="text-center font-display text-2xl tracking-wider">
            Wait — Claim Your <span className="text-primary">Free Trial</span>
          </DialogTitle>
          <DialogDescription className="text-center">
            Get a <span className="text-foreground font-semibold">3-day all-access pass</span> + a free consultation with one of our certified trainers.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <Button asChild size="lg" className="bg-gradient-primary uppercase tracking-wider font-semibold">
            <Link to="/contact" onClick={() => setOpen(false)}>Claim My Free Pass</Link>
          </Button>
          <button
            onClick={() => setOpen(false)}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            No thanks, I'll stay average
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

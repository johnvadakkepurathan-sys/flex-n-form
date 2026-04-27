import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { FloatingActions } from "./FloatingActions";
import { OfferBanner } from "./OfferBanner";
import { ExitIntentDialog } from "./ExitIntentDialog";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="dark min-h-screen flex flex-col bg-background text-foreground">
      <OfferBanner />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingActions />
      <ExitIntentDialog />
    </div>
  );
}

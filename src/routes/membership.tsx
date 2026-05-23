import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, MessageCircle } from "lucide-react";
import { formatINR } from "@/lib/format";

export const Route = createFileRoute("/membership")({
  head: () => ({
    meta: [
      { title: "Membership Plans — Flex & Form Gym" },
      { name: "description", content: "Flexible monthly, quarterly, and yearly plans. No contracts. Cancel anytime. Find the plan that fits your goals." },
      { property: "og:title", content: "Membership — Flex & Form Gym" },
      { property: "og:description", content: "Compare plans and join today. 50% off your first month." },
    ],
    links: [
      { rel: "canonical", href: "/membership" },
    ],
  }),
  component: MembershipPage,
});

const plans = [
  {
    name: "Monthly",
    price: 1000, period: "/mo",
    badge: null,
    features: ["Full gym access", "All group classes", "Locker & showers", "Free WiFi", "Mobile app"],
    excluded: ["Personal training sessions", "Custom diet plan", "Guest passes"],
  },
  {
    name: "Quarterly",
    price: 2700, period: "/qtr",
    badge: "Most Popular",
    features: ["Full gym access", "All group classes", "Locker & showers", "Free WiFi", "Mobile app", "1 PT session/month", "Nutrition basics", "2 guest passes"],
    excluded: ["Custom 1:1 diet plan"],
  },
  {
    name: "Yearly",
    price: 10000, period: "/yr",
    badge: "Best Value",
    features: ["Full gym access", "All group classes", "Locker & showers", "Free WiFi", "Mobile app", "4 PT sessions/month", "Custom 1:1 diet plan", "Unlimited guest passes", "Priority booking", "24/7 access"],
    excluded: [],
  },
];

const compareRows = [
  { f: "Gym & equipment access", v: [true, true, true] },
  { f: "Group classes", v: [true, true, true] },
  { f: "Locker & showers", v: [true, true, true] },
  { f: "Personal trainer sessions", v: ["—", "1/mo", "4/mo"] },
  { f: "Custom diet plan", v: [false, "Basic", "Full"] },
  { f: "Guest passes", v: ["—", "2/mo", "Unlimited"] },
  { f: "24/7 access", v: [false, false, true] },
];

const wa = `https://wa.me/15551234567?text=${encodeURIComponent("Hi, I want to join your gym")}`;

function Mark({ v }: { v: boolean | string }) {
  if (v === true) return <Check className="h-5 w-5 text-primary mx-auto" />;
  if (v === false) return <X className="h-5 w-5 text-muted-foreground mx-auto" />;
  return <span className="text-foreground">{v}</span>;
}

function MembershipPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Membership"
        title={<>Choose Your <span className="text-gradient-primary">Weapon.</span></>}
        subtitle="No contracts. No hidden fees. Just real training and real results. Save 50% on your first month — limited time."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-3 gap-5">
          {plans.map((p, i) => (
            <Card key={p.name} className={`relative p-7 bg-card border-border ${i === 1 ? "border-primary shadow-glow md:scale-[1.03]" : ""}`}>
              {p.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {p.badge}
                </span>
              )}
              <h2 className="font-display text-2xl tracking-wider">{p.name}</h2>
              <div className="mt-3 flex items-end gap-1">
                <span className="font-display text-5xl">{formatINR(p.price)}</span>
                <span className="text-muted-foreground mb-1">{p.period}</span>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Billed as {p.name.toLowerCase()}.</p>
              <ul className="mt-5 space-y-2 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex gap-2"><Check className="h-4 w-4 text-primary shrink-0 mt-0.5" />{f}</li>
                ))}
                {p.excluded.map((f) => (
                  <li key={f} className="flex gap-2 text-muted-foreground line-through"><X className="h-4 w-4 shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <div className="mt-6 space-y-2">
                <Button asChild className={`w-full uppercase tracking-wider font-semibold ${i === 1 ? "bg-gradient-primary" : ""}`} variant={i === 1 ? "default" : "outline"}>
                  <Link to="/contact">Join Now</Link>
                </Button>
                <Button asChild variant="ghost" className="w-full text-[oklch(0.7_0.18_145)] hover:text-[oklch(0.7_0.18_145)] hover:bg-[oklch(0.7_0.18_145)]/10 uppercase tracking-wider">
                  <a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> Chat on WhatsApp</a>
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Compare table */}
        <div className="mt-16">
          <h2 className="font-display text-3xl tracking-wider text-center mb-8">Feature <span className="text-gradient-primary">Comparison</span></h2>
          <Card className="bg-card border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-secondary/50">
                    <th className="text-left p-4 font-display tracking-wider">Feature</th>
                    {plans.map((p) => (
                      <th key={p.name} className="p-4 text-center font-display tracking-wider">{p.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {compareRows.map((r, i) => (
                    <tr key={r.f} className={i % 2 ? "bg-secondary/20" : ""}>
                      <td className="p-4 text-foreground">{r.f}</td>
                      {r.v.map((v, idx) => (
                        <td key={idx} className="p-4 text-center"><Mark v={v} /></td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Card } from "@/components/ui/card";
import { Instagram, Linkedin, Twitter, Award } from "lucide-react";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

export const Route = createFileRoute("/trainers")({
  head: () => ({
    meta: [
      { title: "Our Trainers — Flex & Form Gym" },
      { name: "description", content: "Meet our certified, world-class trainers in strength, conditioning, fat loss, and powerlifting." },
      { property: "og:title", content: "Trainers — Flex & Form Gym" },
      { property: "og:description", content: "Certified coaches with proven results." },
    ],
  }),
  component: TrainersPage,
});

const trainers = [
  { img: t1, name: "Alex Rivera", spec: "Strength & Hypertrophy", years: 9, certs: ["NSCA-CSCS", "ACE-CPT"], bio: "Former collegiate athlete turned coach. Specializes in body recomposition and strength building." },
  { img: t2, name: "Sasha Brooks", spec: "Fat Loss & Conditioning", years: 7, certs: ["NASM-CPT", "Pn1 Nutrition"], bio: "HIIT and metabolic training specialist. Helped 500+ clients lose fat sustainably." },
  { img: t3, name: "Marcus Cole", spec: "Powerlifting Coach", years: 12, certs: ["USAPL Coach", "NSCA-CSCS"], bio: "National-level powerlifter. Trains lifters from beginner to elite competition." },
  { img: t1, name: "Jordan Lee", spec: "Mobility & Recovery", years: 6, certs: ["FRC Mobility", "NASM-CES"], bio: "Bulletproofs joints, fixes posture, and keeps you training pain-free for life." },
  { img: t2, name: "Riley Cruz", spec: "Olympic Weightlifting", years: 8, certs: ["USAW L2", "CrossFit L2"], bio: "Snatch and clean & jerk technician. Builds explosive, athletic power." },
  { img: t3, name: "Devon Hart", spec: "Bodybuilding Prep", years: 11, certs: ["IFBB Pro Coach"], bio: "Stage prep coach with multiple pro card winners. Knows what it takes to step on stage." },
];

function TrainersPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Meet The Crew"
        title={<>The Coaches Who <span className="text-gradient-primary">Forge Champions.</span></>}
        subtitle="Certified, experienced, relentless. Our trainers don't just write programs — they build athletes."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {trainers.map((t, i) => (
            <Card key={i} className="overflow-hidden bg-card border-border group">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                <div className="absolute bottom-4 left-5 right-5">
                  <h3 className="font-display text-2xl tracking-wider">{t.name}</h3>
                  <p className="text-primary text-sm uppercase tracking-widest">{t.spec}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{t.bio}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {t.certs.map((c) => (
                    <span key={c} className="inline-flex items-center gap-1 text-[11px] uppercase tracking-widest px-2 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Award className="h-3 w-3" /> {c}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">{t.years}+ yrs experience</span>
                  <div className="flex gap-2">
                    <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary"><Instagram className="h-4 w-4" /></a>
                    <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-primary"><Twitter className="h-4 w-4" /></a>
                    <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="h-4 w-4" /></a>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

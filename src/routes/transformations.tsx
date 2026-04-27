import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";
import tr1 from "@/assets/transform-1.jpg";
import tr2 from "@/assets/transform-2.jpg";
import tr3 from "@/assets/transform-3.jpg";

export const Route = createFileRoute("/transformations")({
  head: () => ({
    meta: [
      { title: "Transformations — Iron Forge Gym" },
      { name: "description", content: "Real members, real results. Browse our wall of transformations and success stories." },
      { property: "og:title", content: "Transformations — Iron Forge Gym" },
      { property: "og:description", content: "Proof that the Forge works." },
      { property: "og:image", content: tr1 },
    ],
  }),
  component: TransformationsPage,
});

const stories = [
  { img: tr1, name: "James M.", goal: "Body Recomp", duration: "6 months", lost: "−18 lbs fat", gained: "+9 lbs muscle", quote: "I came in skinny-fat and lost. Six months later I'm leaner, stronger, and more confident than ever." },
  { img: tr2, name: "Lina P.", goal: "Fat Loss", duration: "8 months", lost: "−42 lbs", gained: "Confidence", quote: "I had tried everything. Iron Forge gave me a coach who actually cared and a plan that actually worked." },
  { img: tr3, name: "Chris D.", goal: "Muscle Gain", duration: "12 months", lost: "Bad habits", gained: "+22 lbs muscle", quote: "Doubled my bench, gained real size, and built discipline that carries into everything I do." },
  { img: tr1, name: "Omar K.", goal: "Strength", duration: "9 months", lost: "−12 lbs", gained: "Powerlifting PRs", quote: "Hit a 500 deadlift for the first time. The coaching and the community are unmatched." },
  { img: tr2, name: "Maya R.", goal: "Postpartum Comeback", duration: "5 months", lost: "−24 lbs", gained: "Strength back", quote: "Got my body and my energy back. The trainers met me exactly where I was." },
  { img: tr3, name: "Tyler B.", goal: "Stage Prep", duration: "16 weeks", lost: "−15 lbs", gained: "Pro card", quote: "Stepped on stage in the best shape of my life. Forever grateful to my coach." },
];

function TransformationsPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Real Members. Real Results."
        title={<>Built in the <span className="text-gradient-primary">Forge.</span></>}
        subtitle="Every body here was built by hard work and smart coaching. You're next."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map((s, i) => (
            <Card key={i} className="overflow-hidden bg-card border-border">
              <div className="relative">
                <img src={s.img} alt={`${s.name} before and after`} loading="lazy" className="w-full aspect-[4/3] object-cover" />
                <span className="absolute top-3 left-3 bg-gradient-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                  {s.goal}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3 flex-wrap">
                  <div>
                    <h3 className="font-display text-2xl tracking-wider">{s.name}</h3>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{s.duration} program</p>
                  </div>
                  <div className="flex gap-3 text-xs uppercase tracking-widest">
                    <span className="text-[oklch(0.7_0.18_145)]">{s.lost}</span>
                    <span className="text-primary">{s.gained}</span>
                  </div>
                </div>
                <Quote className="mt-4 h-5 w-5 text-primary" />
                <p className="text-muted-foreground mt-1">"{s.quote}"</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

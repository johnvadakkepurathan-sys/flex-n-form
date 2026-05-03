import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Card } from "@/components/ui/card";
import { Target, Eye, Heart, Award } from "lucide-react";
import gymInterior from "@/assets/gym-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Flex & Form Gym" },
      { name: "description", content: "15 years forging champions. Meet the team, our mission, and why thousands choose Flex & Form to transform their bodies and lives." },
      { property: "og:title", content: "About Flex & Form Gym" },
      { property: "og:description", content: "Our story, mission, and the relentless philosophy behind our results." },
    ],
  }),
  component: AboutPage,
});

const stats = [
  { n: "10,000+", l: "Members Trained" },
  { n: "2,500+", l: "Transformations" },
  { n: "50+", l: "Expert Coaches" },
  { n: "15", l: "Years Strong" },
];

const values = [
  { icon: Target, title: "Discipline", text: "Show up. Put in the work. Repeat. Discipline beats motivation every time." },
  { icon: Heart, title: "Community", text: "Train with a tribe that pushes you to the next level — every single session." },
  { icon: Award, title: "Excellence", text: "Best-in-class equipment. Best-in-class coaches. No compromises." },
  { icon: Eye, title: "Vision", text: "We help you see who you can become, then build the path to get you there." },
];

function AboutPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Our Story"
        title={<>Forged in <span className="text-gradient-primary">Iron.</span> Built for Warriors.</>}
        subtitle="For 15 years, Flex & Form has been the home of the relentless. We're not for everyone — we're for those who refuse to stay average."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <img src={gymInterior} alt="Flex & Form gym floor" loading="lazy" className="rounded-lg shadow-elevated w-full object-cover aspect-[4/3]" />
          <div className="absolute -bottom-5 -right-5 bg-gradient-primary text-primary-foreground p-5 rounded-lg shadow-glow hidden md:block">
            <p className="font-display text-3xl">Est. 2010</p>
            <p className="text-xs uppercase tracking-widest">Forging Champions</p>
          </div>
        </div>
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Our Mission</p>
          <h2 className="mt-2 font-display text-4xl tracking-wider">Build Stronger Bodies. <span className="text-gradient-primary">Build Stronger Minds.</span></h2>
          <p className="mt-4 text-muted-foreground">
            Flex & Form was born out of a simple belief: greatness is forged, not given. We built this gym to give relentless people the tools, coaches, and community they need to become the strongest version of themselves — physically and mentally.
          </p>
          <p className="mt-3 text-muted-foreground">
            From first-time lifters to competitive athletes, we treat every member like a champion in the making. Because that's what you are.
          </p>
        </div>
      </section>

      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {stats.map((s) => (
              <div key={s.l} className="p-6 rounded-lg border border-border bg-card">
                <p className="font-display text-4xl md:text-5xl text-gradient-primary">{s.n}</p>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Why Choose Us</p>
          <h2 className="mt-2 font-display text-4xl tracking-wider">The <span className="text-gradient-primary">Forge Code</span></h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v) => (
            <Card key={v.title} className="p-6 bg-card border-border hover:border-primary/60 transition-colors">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4">
                <v.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl tracking-wider">{v.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{v.text}</p>
            </Card>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

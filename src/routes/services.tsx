import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import { Card } from "@/components/ui/card";
import weightsImg from "@/assets/weights.jpg";
import cardioImg from "@/assets/cardio.jpg";
import ptImg from "@/assets/personal-training.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import groupImg from "@/assets/group-class.jpg";
import gymInterior from "@/assets/gym-interior.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Flex & Form Gym" },
      { name: "description", content: "Weight training, personal training, cardio, fat loss, muscle gain, nutrition, and group classes — all under one roof." },
      { property: "og:title", content: "Services — Flex & Form Gym" },
      { property: "og:description", content: "Comprehensive fitness programs led by certified coaches." },
    ],
    links: [
      { rel: "canonical", href: "/services" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { img: weightsImg, title: "Weight Training", text: "Structured strength programs across squat, bench, deadlift and more. Build raw, functional strength.", points: ["Olympic lifting", "Powerlifting", "Bodybuilding splits"] },
  { img: ptImg, title: "Personal Training", text: "1-on-1 coaching, custom programming, accountability. The fastest way to results.", points: ["Goal assessment", "Custom programming", "Form correction"] },
  { img: cardioImg, title: "Cardio Programs", text: "HIIT, steady-state, Zone 2 — engineered to burn fat and build a championship engine.", points: ["Treadmills & bikes", "Rowers & SkiErgs", "Heart-rate zones"] },
  { img: nutritionImg, title: "Fat Loss Program", text: "Caloric strategy + structured training that strips fat without sacrificing muscle.", points: ["12-week plan", "Weekly check-ins", "Meal templates"] },
  { img: weightsImg, title: "Muscle Gain Program", text: "Progressive overload, strategic volume, and recovery to build serious size.", points: ["Hypertrophy splits", "Progress tracking", "Supplement guidance"] },
  { img: nutritionImg, title: "Diet & Nutrition", text: "Custom meal plans built around your lifestyle, training, and goals.", points: ["Macro coaching", "Meal prep guides", "Education sessions"] },
  { img: groupImg, title: "Group Classes", text: "HIIT, Spin, Strength, Mobility — train with a tribe and push harder than you would alone.", points: ["Daily schedule", "All levels", "Energy & accountability"] },
  { img: gymInterior, title: "Open Gym Access", text: "Train freely on premium equipment, anytime that suits your schedule.", points: ["24/7 access", "Lockers + showers", "Free WiFi"] },
];

function ServicesPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Programs & Services"
        title={<>Every Goal. <span className="text-gradient-primary">One Gym.</span></>}
        subtitle="Whether you want to lose fat, build muscle, or compete at the highest level — we have the program, the coach, and the equipment to get you there."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <Card key={i} className="overflow-hidden bg-card border-border group">
              <div className="relative h-52 overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                <h2 className="absolute bottom-3 left-4 font-display text-2xl tracking-wider">{s.title}</h2>
              </div>
              <div className="p-5">
                <p className="text-sm text-muted-foreground">{s.text}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {s.points.map((p) => (
                    <li key={p} className="flex gap-2"><span className="text-primary">▸</span>{p}</li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

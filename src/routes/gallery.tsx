import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { CtaBanner } from "@/components/site/CtaBanner";
import gymInterior from "@/assets/gym-interior.jpg";
import weightsImg from "@/assets/weights.jpg";
import cardioImg from "@/assets/cardio.jpg";
import ptImg from "@/assets/personal-training.jpg";
import groupImg from "@/assets/group-class.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import heroImg from "@/assets/hero-gym.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Flex & Form Gym" },
      { name: "description", content: "Step inside Flex & Form. See our equipment, classes, members in action, and transformation moments." },
      { property: "og:title", content: "Gallery — Flex & Form Gym" },
      { property: "og:description", content: "A look inside the forge." },
    ],
    links: [
      { rel: "canonical", href: "/gallery" },
    ],
  }),
  component: GalleryPage,
});

const images = [
  { src: heroImg, alt: "Athlete performing heavy barbell lift", span: "lg:col-span-2 lg:row-span-2" },
  { src: gymInterior, alt: "Spacious modern gym floor with equipment", span: "" },
  { src: weightsImg, alt: "Organized free weights and dumbbell rack", span: "" },
  { src: cardioImg, alt: "Cardio machines and treadmills area", span: "" },
  { src: ptImg, alt: "Coach conducting personal training session", span: "lg:col-span-2" },
  { src: groupImg, alt: "Energetic group fitness class in session", span: "" },
  { src: nutritionImg, alt: "Healthy meal prep and nutrition coaching", span: "" },
];

function GalleryPage() {
  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Inside The Forge"
        title={<>Where <span className="text-gradient-primary">Iron</span> Meets Will.</>}
        subtitle="Our space is built for one thing: results. Cinematic lighting, premium equipment, relentless energy."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 auto-rows-[200px] gap-3">
          {images.map((img, i) => (
            <div key={i} className={`relative overflow-hidden rounded-lg group ${img.span}`}>
              <img src={img.src} alt={img.alt} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="font-display tracking-wider text-foreground">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

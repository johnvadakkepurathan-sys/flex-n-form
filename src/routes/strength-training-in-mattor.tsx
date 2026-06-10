import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import weightsImg from "@/assets/weights.jpg?format=webp&quality=72&w=1200&as=src";

const SITE_URL = "https://flexandformfitness-in.lovable.app";

export const Route = createFileRoute("/strength-training-in-mattor")({
  head: () => ({
    meta: [
      { title: "Strength Training in Mattoor | Family Fitness Centre" },
      { name: "description", content: "Strength training in Mattoor with proper coaching, full free-weight setup and structured programs. Build real strength at Family Fitness Centre, Kerala." },
      { property: "og:title", content: "Strength Training in Mattoor | Family Fitness Centre" },
      { property: "og:description", content: "Build real strength in Mattoor with structured programs, full free-weight setup and certified coaches." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/strength-training-in-mattor` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/strength-training-in-mattor` }],
  }),
  component: STPage,
});

function STPage() {
  return (
    <LocalServicePage
      eyebrow="Strength Training in Mattoor"
      title={<>Strength <span className="text-gradient-primary">Training in Mattoor</span></>}
      intro="Build raw strength under expert coaching with a full free-weight, plate-loaded and rack setup — right here in Mattoor."
      image={weightsImg}
      imageAlt="Strength training and free weights area in Mattoor at Family Fitness Centre"
      highlights={[
        { title: "Full Free-Weight Setup", text: "Olympic bars, plates, dumbbells up to 50 kg and dedicated squat racks." },
        { title: "Programmed Training", text: "Linear progression, 5/3/1 and hypertrophy blocks programmed by coaches." },
        { title: "Form-First Coaching", text: "Squat, deadlift and bench technique reviewed every session." },
        { title: "All Levels Welcome", text: "Beginners learn from scratch — no judgement, just progress." },
      ]}
      relatedLinks={[
        { to: "/gym-in-mattor", label: "Gym in Mattoor" },
        { to: "/personal-training-in-mattor", label: "Personal Training in Mattoor" },
        { to: "/weight-loss-programs-in-mattor", label: "Weight Loss Programs in Mattoor" },
        { to: "/services", label: "All services" },
        { to: "/contact", label: "Try a free strength session" },
      ]}
      body={
        <>
          <p>
            <strong>Strength training in Mattoor</strong> at Family Fitness Centre is built on
            barbell fundamentals — squat, bench, deadlift, overhead press and row. Every member,
            beginner or experienced, is coached through the lifts to protect joints and unlock
            long-term progress.
          </p>
          <p>
            Our strength programs follow proven templates — linear progression for beginners,
            hypertrophy blocks for intermediates, and conjugate-style work for advanced lifters. You
            will know exactly what to lift, when, and why.
          </p>
          <p>
            Members from Mattoor, Kalady, Angamaly, Kanjoor and Thuravoor train here to get stronger,
            healthier and more confident — for life and for sport.
          </p>
        </>
      }
    />
  );
}

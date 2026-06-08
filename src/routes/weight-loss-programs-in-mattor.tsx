import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import nutritionImg from "@/assets/nutrition.jpg";

const SITE_URL = "https://flexandformfitness-in.lovable.app";

export const Route = createFileRoute("/weight-loss-programs-in-mattor")({
  head: () => ({
    meta: [
      { title: "Weight Loss Gym in Mattor | Family Fitness Centre" },
      { name: "description", content: "Proven weight loss programs in Mattor, Kerala. Structured workouts, diet plans and coaching to help you lose fat sustainably at Family Fitness Centre." },
      { property: "og:title", content: "Weight Loss Programs in Mattor | Family Fitness Centre" },
      { property: "og:description", content: "Sustainable weight loss in Mattor — workouts, nutrition and coaching that actually work." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/weight-loss-programs-in-mattor` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/weight-loss-programs-in-mattor` }],
  }),
  component: WLPage,
});

function WLPage() {
  return (
    <LocalServicePage
      eyebrow="Weight Loss Gym in Mattor"
      title={<>Weight Loss <span className="text-gradient-primary">Programs in Mattor</span></>}
      intro="A structured 12-week weight loss program in Mattor combining training, nutrition and accountability — no crash diets, no shortcuts."
      image={nutritionImg}
      imageAlt="Healthy Kerala meal plan for weight loss program in Mattor"
      highlights={[
        { title: "Structured Workouts", text: "Strength + cardio combos that burn fat without losing muscle." },
        { title: "Custom Diet Plans", text: "Practical Kerala-style meal plans built around your daily routine." },
        { title: "Weekly Check-ins", text: "Track weight, measurements, energy and sleep — adjust as you go." },
        { title: "Group Support", text: "Train alongside other members on the same journey." },
      ]}
      relatedLinks={[
        { to: "/gym-in-mattor", label: "Gym in Mattor" },
        { to: "/personal-training-in-mattor", label: "Personal Training in Mattor" },
        { to: "/strength-training-in-mattor", label: "Strength Training in Mattor" },
        { to: "/services", label: "All services" },
        { to: "/contact", label: "Start your weight loss journey" },
      ]}
      body={
        <>
          <p>
            Our <strong>weight loss programs in Mattor</strong> are designed for long-term, healthy
            fat loss — not quick fixes. Members typically see 4–8 kg of sustainable weight loss in
            the first 12 weeks when they commit to the program.
          </p>
          <p>
            Every program starts with a body composition assessment, a goal-setting session and a
            customised plan. You'll train 3–5 times per week with a mix of strength and conditioning,
            and follow a nutrition plan tailored to your food preferences and budget.
          </p>
          <p>
            Suitable for working professionals, homemakers, college students and seniors from Mattor,
            Chalakudy, Kodakara, Mala, Potta and surrounding areas.
          </p>
        </>
      }
    />
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import ptImg from "@/assets/personal-training.jpg";

const SITE_URL = "https://flexandformfitness-in.lovable.app";

export const Route = createFileRoute("/personal-training-in-mattor")({
  head: () => ({
    meta: [
      { title: "Personal Training in Mattoor | Family Fitness Centre" },
      { name: "description", content: "Personal training in Mattoor with certified coaches. 1-on-1 sessions, custom workout plans, nutrition guidance and accountability at Family Fitness Centre, Kerala." },
      { property: "og:title", content: "Personal Training in Mattoor | Family Fitness Centre" },
      { property: "og:description", content: "Get results faster with 1-on-1 personal training in Mattoor. Custom plans, expert coaches, real accountability." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/personal-training-in-mattor` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/personal-training-in-mattor` }],
  }),
  component: PTPage,
});

function PTPage() {
  return (
    <LocalServicePage
      eyebrow="Personal Training in Mattoor"
      title={<>Expert <span className="text-gradient-primary">Personal Training</span> in Mattoor</>}
      intro="One-on-one coaching designed around your body, goals and schedule — right here in Mattoor, Kerala."
      image={ptImg}
      imageAlt="Personal training session in Mattoor at Family Fitness Centre"
      highlights={[
        { title: "Custom Programs", text: "Plans built around your goals — fat loss, muscle gain, sports, or rehab." },
        { title: "Nutrition Coaching", text: "Kerala-friendly meal guidance that fits everyday family cooking." },
        { title: "Progress Tracking", text: "Monthly assessments, measurements and strength benchmarks." },
        { title: "Flexible Scheduling", text: "Morning, evening and weekend slots across Mattoor." },
      ]}
      relatedLinks={[
        { to: "/gym-in-mattor", label: "Gym in Mattoor" },
        { to: "/weight-loss-programs-in-mattor", label: "Weight Loss Programs in Mattoor" },
        { to: "/strength-training-in-mattor", label: "Strength Training in Mattoor" },
        { to: "/trainers", label: "Meet our trainers" },
        { to: "/contact", label: "Book a free PT consultation" },
      ]}
      body={
        <>
          <p>
            Our <strong>personal training in Mattoor</strong> is built on three principles —
            personalisation, progression and accountability. Every session is led by a certified
            coach who understands the lifestyle, food habits and training history of members across
            Mattoor and nearby areas.
          </p>
          <p>
            Whether your goal is weight loss, muscle building, post-injury recovery or improving
            stamina for sport, a Family Fitness Centre coach will program your training, refine your
            form, and adjust your plan as you progress. You will never train alone, and you will
            never train without a plan.
          </p>
          <p>
            Sessions can be booked individually or as part of our Quarterly and Yearly memberships,
            which include monthly PT sessions and personalised diet plans.
          </p>
        </>
      }
    />
  );
}

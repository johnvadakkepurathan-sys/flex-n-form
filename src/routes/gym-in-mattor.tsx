import { createFileRoute } from "@tanstack/react-router";
import { LocalServicePage } from "@/components/site/LocalServicePage";
import gymInterior from "@/assets/gym-interior.jpg";

const SITE_URL = "https://flexandformfitness-in.lovable.app";

export const Route = createFileRoute("/gym-in-mattor")({
  head: () => ({
    meta: [
      { title: "Gym in Mattoor | Family Fitness Centre — Best Gym Near You" },
      { name: "description", content: "Looking for a gym in Mattoor? Family Fitness Centre offers modern equipment, expert trainers, and proven results for members across Mattoor, Kalady, Angamaly, Kanjoor and Thuravoor." },
      { property: "og:title", content: "Gym in Mattoor | Family Fitness Centre" },
      { property: "og:description", content: "The best-equipped gym in Mattoor, Kerala. Strength training, cardio, group classes and personal coaching under one roof." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/gym-in-mattor` },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}/gym-in-mattor` }],
  }),
  component: GymInMattorPage,
});

function GymInMattorPage() {
  return (
    <LocalServicePage
      eyebrow="Gym in Mattoor, Kerala"
      title={<>The Best <span className="text-gradient-primary">Gym in Mattoor</span></>}
      intro="Family Fitness Centre is a modern, fully-equipped gym in Mattoor, Kerala — built for serious results and beginner-friendly support."
      image={gymInterior}
      imageAlt="Gym in Mattoor — Family Fitness Centre training floor"
      highlights={[
        { title: "Modern Equipment", text: "Plate-loaded machines, free weights, functional rigs and pro cardio." },
        { title: "Certified Trainers", text: "Local Kerala trainers with years of competitive and coaching experience." },
        { title: "Flexible Hours", text: "Early-morning and late-evening slots that fit Mattoor work schedules." },
        { title: "Affordable Plans", text: "Monthly, quarterly and yearly memberships with no hidden fees." },
      ]}
      relatedLinks={[
        { to: "/personal-training-in-mattor", label: "Personal Training in Mattoor" },
        { to: "/weight-loss-programs-in-mattor", label: "Weight Loss Programs in Mattoor" },
        { to: "/strength-training-in-mattor", label: "Strength Training in Mattoor" },
        { to: "/membership", label: "Membership Plans" },
        { to: "/contact", label: "Visit our gym in Mattoor" },
      ]}
      body={
        <>
          <p>
            Family Fitness Centre is recognised as one of the <strong>best gyms in Mattoor</strong>,
            offering members a clean, spacious training floor packed with the equipment they need to
            build strength, burn fat and improve overall fitness. Whether you are stepping into a
            gym in Mattoor for the first time or you are an experienced lifter, our team will design
            a plan that matches your goals.
          </p>
          <p>
            Our <strong>fitness centre in Mattoor</strong> is built around four pillars — strength,
            conditioning, mobility and recovery. Members get access to certified trainers, group
            classes, structured programs, and free fitness assessments to track progress month over
            month.
          </p>
          <p>
            We welcome members from Mattoor town and the wider Thrissur belt — including
            <strong> Kalady, Angamaly, Kanjoor, Thuravoor</strong> and nearby villages. If you have been
            searching for a <em>gym near Mattoor</em>, walk in for a free tour and trial workout.
          </p>
        </>
      }
    />
  );
}

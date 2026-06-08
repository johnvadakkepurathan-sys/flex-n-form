import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BmiCalculator } from "@/components/site/BmiCalculator";
import { formatINR } from "@/lib/format";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Dumbbell, Users, Trophy, Flame, HeartPulse, Quote, ChevronRight, Star, Mail, MapPin, Phone, Clock,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import heroImg from "@/assets/hero-gym.jpg";
import gymInterior from "@/assets/gym-interior.jpg";
import weightsImg from "@/assets/weights.jpg";
import cardioImg from "@/assets/cardio.jpg";
import ptImg from "@/assets/personal-training.jpg";
import nutritionImg from "@/assets/nutrition.jpg";
import groupImg from "@/assets/group-class.jpg";
import t1 from "@/assets/trainer-1.jpg";
import t2 from "@/assets/trainer-2.jpg";
import t3 from "@/assets/trainer-3.jpg";

const SITE_URL = "https://flexandformfitness-in.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Best Gym in Mattor | Family Fitness Centre" },
      { name: "description", content: "Family Fitness Centre is a leading gym in Mattor, Kerala offering personal training, strength training, weight loss programs, modern equipment, and expert fitness coaching." },
      { name: "keywords", content: "gym in Mattor, best gym in Mattor, fitness centre in Mattor, personal training in Mattor, weight loss gym in Mattor, gym near Mattor, fitness classes in Mattor, best fitness centre near Mattor" },
      { property: "og:title", content: "Best Gym in Mattor | Family Fitness Centre" },
      { property: "og:description", content: "Leading gym in Mattor, Kerala — personal training, weight loss, strength training and modern equipment." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:locale", content: "en_IN" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["LocalBusiness", "HealthClub", "ExerciseGym"],
          name: "Family Fitness Centre",
          image: `${SITE_URL}/og-image.jpg`,
          url: SITE_URL,
          telephone: "+91-9876543210",
          email: "hello@familyfitnesscentre.in",
          priceRange: "₹₹",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Main Road, Mattor",
            addressLocality: "Mattor",
            addressRegion: "Kerala",
            postalCode: "680308",
            addressCountry: "IN",
          },
          areaServed: [
            { "@type": "Place", name: "Mattor" },
            { "@type": "Place", name: "Chalakudy" },
            { "@type": "Place", name: "Kodakara" },
            { "@type": "Place", name: "Mala" },
            { "@type": "Place", name: "Potta" },
          ],
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "05:00", closes: "22:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:00", closes: "21:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "13:00" },
          ],
          sameAs: [
            "https://www.instagram.com/",
            "https://www.facebook.com/",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Which is the best gym in Mattor?", acceptedAnswer: { "@type": "Answer", text: "Family Fitness Centre is widely recognised as the best gym in Mattor, Kerala — offering modern equipment, certified trainers, personal training, weight loss programs and group fitness classes." } },
            { "@type": "Question", name: "Do you offer personal training in Mattor?", acceptedAnswer: { "@type": "Answer", text: "Yes. We offer 1-on-1 personal training in Mattor with certified coaches, customised workout plans, nutrition guidance and weekly progress tracking." } },
            { "@type": "Question", name: "What are your membership plans?", acceptedAnswer: { "@type": "Answer", text: "We offer Monthly, Quarterly and Yearly memberships. Quarterly and Yearly plans include personal training sessions and personalised nutrition guidance." } },
            { "@type": "Question", name: "Do beginners receive fitness guidance?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. Every new member at Family Fitness Centre receives a free orientation, a beginner-friendly program and ongoing coaching support — no prior gym experience required." } },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Dumbbell, title: "Modern Equipment", text: "Premium plate-loaded machines, free weights, racks and pro cardio in Mattor." },
  { icon: Users, title: "Certified Coaches", text: "Local Kerala trainers with deep expertise in strength, fat loss and conditioning." },
  { icon: Trophy, title: "Proven Local Results", text: "Hundreds of members across Mattor, Chalakudy and Kodakara have transformed with us." },
  { icon: HeartPulse, title: "Flexible Hours", text: "Early-morning and late-evening slots that fit your work and family routine." },
];

const services = [
  { img: weightsImg, title: "Strength Training", text: "Build raw strength with structured programs.", to: "/strength-training-in-mattor" as const },
  { img: ptImg, title: "Personal Training", text: "1-on-1 coaching tailored to your goals.", to: "/personal-training-in-mattor" as const },
  { img: cardioImg, title: "Cardio & Fat Loss", text: "Burn fat, build engine, push limits.", to: "/weight-loss-programs-in-mattor" as const },
  { img: nutritionImg, title: "Diet & Nutrition", text: "Kerala-friendly meal plans that work.", to: "/weight-loss-programs-in-mattor" as const },
  { img: groupImg, title: "Group Classes", text: "HIIT, Spin, Strength — train as a tribe.", to: "/services" as const },
  { img: gymInterior, title: "Open Gym Floor", text: "Train freely with premium equipment.", to: "/gym-in-mattor" as const },
];

const memberships = [
  { name: "Monthly", price: 1000, period: "/mo", features: ["Full gym access", "Group classes", "Locker room", "Free WiFi"], popular: false },
  { name: "Quarterly", price: 2700, period: "/qtr", features: ["Everything in Monthly", "1 PT session/month", "Nutrition basics", "Guest passes (2)"], popular: true },
  { name: "Yearly", price: 10000, period: "/yr", features: ["Everything in Quarterly", "4 PT sessions/month", "Custom diet plan", "Unlimited guest passes"], popular: false },
];

const testimonials = [
  { name: "Arjun M., Mattor", role: "Lost 12 kg in 4 months", quote: "Best gym in Mattor by far. The coaches actually care about your progress." },
  { name: "Priya S., Chalakudy", role: "Gained 5 kg of muscle", quote: "Drove from Chalakudy and it was worth every km. Equipment and coaching are top class." },
  { name: "Daniel K., Kodakara", role: "Strength member", quote: "Hit a 180 kg deadlift here. The local community alone is worth the membership." },
];

const trainers = [
  { img: t1, name: "Alex Rivera", spec: "Strength & Hypertrophy" },
  { img: t2, name: "Sasha Brooks", spec: "Fat Loss & Conditioning" },
  { img: t3, name: "Marcus Cole", spec: "Powerlifting Coach" },
];

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Best gym in Mattor — Family Fitness Centre training floor"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em]">
              <Flame className="h-3.5 w-3.5" /> Mattor, Kerala
            </p>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95]">
              Best Gym in <span className="text-gradient-primary">Mattor</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Family Fitness Centre is a leading gym in Mattor, Kerala — offering personal training,
              strength training, weight loss programs and modern equipment under expert fitness coaching.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary shadow-glow uppercase tracking-wider font-semibold text-base">
                <Link to="/membership">Join Now <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/10 uppercase tracking-wider font-semibold text-base">
                <Link to="/contact">Free Trial Visit</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "500+", l: "Local Members" },
                { n: "15+", l: "Certified Coaches" },
                { n: "10+", l: "Years in Mattor" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <BmiCalculator />
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 border-y border-border bg-background/80 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 font-display text-lg tracking-[0.3em] text-muted-foreground">
                {["Mattor", "Chalakudy", "Kodakara", "Mala", "Potta", "Thrissur"].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    {w} <Flame className="h-4 w-4 text-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Why Family Fitness Centre</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">
            Why Choose <span className="text-gradient-primary">Family Fitness Centre</span> in Mattor
          </h2>
          <p className="mt-4 text-muted-foreground">
            We are more than a gym in Mattor — we are a fitness community built around results, accountability and care.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {highlights.map((h) => (
            <Card key={h.title} className="bg-card border-border p-6 hover:border-primary/60 transition-colors group">
              <div className="flex h-12 w-12 items-center justify-center rounded-md bg-primary/10 text-primary mb-4 group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all">
                <h.icon className="h-6 w-6" />
              </div>
              <h3 className="font-display text-xl tracking-wider">{h.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{h.text}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* EXPERT PERSONAL TRAINING */}
      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-[1fr_1.1fr] gap-10 items-center">
          <img
            src={ptImg}
            alt="Expert personal training session in Mattor at Family Fitness Centre"
            loading="lazy"
            className="w-full rounded-md object-cover aspect-[4/3]"
          />
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Personalised Coaching</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">
              Expert <span className="text-gradient-primary">Personal Training</span>
            </h2>
            <p className="mt-4 text-muted-foreground">
              Our certified coaches design 1-on-1 training plans for fat loss, strength, muscle
              building and rehab. You will train smarter, recover better and see real progress —
              tracked month over month at our gym in Mattor.
            </p>
            <ul className="mt-5 space-y-2 text-sm">
              {[
                "Customised workouts built around your goals",
                "Kerala-friendly nutrition guidance",
                "Weekly progress check-ins",
                "Beginner-friendly form coaching",
              ].map((f) => (
                <li key={f} className="flex gap-2"><Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />{f}</li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild className="bg-gradient-primary uppercase tracking-wider font-semibold">
                <Link to="/personal-training-in-mattor">Personal Training in Mattor</Link>
              </Button>
              <Button asChild variant="outline" className="border-primary/40 uppercase tracking-wider">
                <Link to="/trainers">Meet The Coaches</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">What We Offer</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">
              Fitness Services in <span className="text-gradient-primary">Mattor</span>
            </h2>
          </div>
          <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10 uppercase tracking-wider">
            <Link to="/services">All Services <ChevronRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <Link key={s.title} to={s.to} className="group">
              <Card className="overflow-hidden bg-card border-border h-full">
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={s.img}
                    alt={`${s.title} in Mattor at Family Fitness Centre`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl tracking-wider">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* MEMBERSHIP PLANS */}
      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Pricing</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">Membership Plans</h2>
            <p className="mt-3 text-muted-foreground">Transparent pricing. No contracts. Cancel anytime.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {memberships.map((m) => (
              <Card key={m.name} className={`relative p-7 bg-card border-border ${m.popular ? "border-primary shadow-glow" : ""}`}>
                {m.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
                <h3 className="font-display text-2xl tracking-wider">{m.name}</h3>
                <div className="mt-3 flex items-end gap-1">
                  <span className="font-display text-5xl">{formatINR(m.price)}</span>
                  <span className="text-muted-foreground mb-1">{m.period}</span>
                </div>
                <ul className="mt-5 space-y-2 text-sm">
                  {m.features.map((f) => (
                    <li key={f} className="flex gap-2"><Star className="h-4 w-4 text-primary shrink-0 mt-0.5" />{f}</li>
                  ))}
                </ul>
                <Button asChild className={`mt-6 w-full uppercase tracking-wider font-semibold ${m.popular ? "bg-gradient-primary" : ""}`} variant={m.popular ? "default" : "outline"}>
                  <Link to="/membership">Join Now</Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* LOCAL AREAS SERVED */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <Card className="p-8 bg-card border-border">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="font-display text-2xl md:text-3xl tracking-wider">Serving Mattor &amp; Nearby Areas</h2>
          </div>
          <p className="mt-4 text-muted-foreground max-w-3xl">
            Family Fitness Centre proudly serves members from Mattor and nearby areas including
            Chalakudy, Kodakara, Mala, Potta, and surrounding locations. Whether you are searching
            for the <strong>best gym in Mattor</strong>, a <strong>fitness centre near Mattor</strong>,
            or <strong>personal training in Mattor</strong>, you will find a welcoming community here.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs uppercase tracking-widest">
            {["Mattor", "Chalakudy", "Kodakara", "Mala", "Potta", "Annamanada", "Koratty", "Thrissur"].map((a) => (
              <span key={a} className="px-3 py-1 rounded-full border border-primary/30 bg-primary/5 text-primary">
                {a}
              </span>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild className="bg-gradient-primary uppercase tracking-wider"><Link to="/gym-in-mattor">Gym in Mattor</Link></Button>
            <Button asChild variant="outline" className="border-primary/40 uppercase tracking-wider"><Link to="/weight-loss-programs-in-mattor">Weight Loss Programs</Link></Button>
            <Button asChild variant="outline" className="border-primary/40 uppercase tracking-wider"><Link to="/strength-training-in-mattor">Strength Training</Link></Button>
          </div>
        </Card>
      </section>

      {/* TRAINERS PREVIEW */}
      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Meet Your Coaches</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">Our <span className="text-gradient-primary">Trainers in Mattor</span></h2>
            </div>
            <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10 uppercase tracking-wider"><Link to="/trainers">All Trainers <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trainers.map((t) => (
              <Card key={t.name} className="overflow-hidden bg-card border-border group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={`${t.name} — ${t.spec} trainer in Mattor`} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-card via-card/70 to-transparent p-5">
                    <h3 className="font-display text-xl tracking-wider">{t.name}</h3>
                    <p className="text-sm text-primary uppercase tracking-widest">{t.spec}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Real Local Members. Real Results.</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">What Our <span className="text-gradient-primary">Mattor Members</span> Say</h2>
          <div className="mt-6 space-y-4">
            {testimonials.map((t) => (
              <Card key={t.name} className="p-5 bg-card border-border">
                <Quote className="h-6 w-6 text-primary" />
                <p className="mt-2 text-foreground">"{t.quote}"</p>
                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />

      {/* FAQ */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">FAQ</p>
          <h2 className="mt-2 font-display text-4xl tracking-wider">Frequently Asked <span className="text-gradient-primary">Questions</span></h2>
          <Accordion type="single" collapsible className="mt-6">
            {[
              { q: "Which is the best gym in Mattor?", a: "Family Fitness Centre is widely recognised as the best gym in Mattor, Kerala — offering modern equipment, certified trainers, personal training, weight loss programs and group fitness classes under one roof." },
              { q: "Do you offer personal training in Mattor?", a: "Yes. We offer 1-on-1 personal training in Mattor with certified coaches, customised workout plans, nutrition guidance and weekly progress tracking. Sessions can be booked individually or as part of Quarterly and Yearly memberships." },
              { q: "What are your membership plans?", a: "We offer Monthly (₹1,000), Quarterly (₹2,700) and Yearly (₹10,000) memberships. Quarterly and Yearly plans include personal training sessions and personalised diet plans." },
              { q: "Do beginners receive fitness guidance?", a: "Absolutely. Every new member at Family Fitness Centre receives a free orientation, a beginner-friendly program and ongoing coaching support — no prior gym experience required." },
              { q: "Do you serve members from outside Mattor?", a: "Yes — we welcome members from Chalakudy, Kodakara, Mala, Potta, Annamanada, Koratty and surrounding areas across Thrissur district." },
            ].map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-border">
                <AccordionTrigger className="text-left font-display tracking-wider">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <Card className="p-6 bg-card border-border self-start">
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-primary shadow-glow">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-wider">Newsletter</h3>
              <p className="text-sm text-muted-foreground">Workouts, tips, exclusive Mattor offers.</p>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed. Welcome to Family Fitness Centre."); (e.target as HTMLFormElement).reset(); }}
            className="space-y-3"
          >
            <Input required type="email" placeholder="Your email" aria-label="Email address for newsletter" />
            <Button type="submit" className="w-full bg-gradient-primary uppercase tracking-wider font-semibold">Subscribe</Button>
          </form>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Inside the gym</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { img: weightsImg, alt: "Free weights at gym in Mattor" },
                { img: cardioImg, alt: "Cardio machines at fitness centre in Mattor" },
                { img: ptImg, alt: "Personal training session in Mattor" },
                { img: groupImg, alt: "Fitness classes in Mattor — group HIIT" },
                { img: gymInterior, alt: "Family Fitness Centre Mattor interior" },
                { img: nutritionImg, alt: "Healthy meal prep — weight loss in Mattor" },
              ].map((item, i) => (
                <img key={i} src={item.img} alt={item.alt} loading="lazy" className="aspect-square w-full object-cover rounded-md" />
              ))}
            </div>
          </div>
        </Card>
      </section>

      {/* CONTACT */}
      <section className="bg-gradient-dark border-t border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Visit Us</p>
            <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">
              Contact <span className="text-gradient-primary">Family Fitness Centre</span>
            </h2>
            <p className="mt-3 text-muted-foreground">
              Walk in for a free tour and trial workout at our gym in Mattor, Kerala.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { icon: MapPin, title: "Address", text: "Main Road, Mattor, Kerala 680308, India" },
              { icon: Phone, title: "Phone", text: "+91 98765 43210", href: "tel:+919876543210" },
              { icon: Clock, title: "Hours", text: "Mon–Fri 5AM–10PM · Sat 6AM–9PM · Sun 7AM–1PM" },
            ].map((b) => (
              <Card key={b.title} className="p-6 bg-card border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-primary mb-3">
                  <b.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wider">{b.title}</h3>
                {b.href ? (
                  <a href={b.href} className="mt-1 block text-sm text-muted-foreground hover:text-primary">{b.text}</a>
                ) : (
                  <p className="mt-1 text-sm text-muted-foreground">{b.text}</p>
                )}
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Button asChild size="lg" className="bg-gradient-primary uppercase tracking-wider font-semibold">
              <Link to="/contact">Get Directions &amp; Book a Visit</Link>
            </Button>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

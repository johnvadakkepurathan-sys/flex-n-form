import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BmiCalculator } from "@/components/site/BmiCalculator";
import { formatINR } from "@/lib/format";
import { CtaBanner } from "@/components/site/CtaBanner";
import {
  Dumbbell, Users, Trophy, Flame, Apple, HeartPulse, Quote, ChevronRight, Star, Mail,
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

const SITE_URL = "https://flex-n-form.lovable.app";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Flex & Form Gym — Transform Your Body & Life" },
      { name: "description", content: "Premium gym with elite trainers, world-class equipment, and proven transformation programs. Free 3-day trial. Join now." },
      { property: "og:title", content: "Flex & Form Gym — Push Your Limits." },
      { property: "og:description", content: "Elite coaching. Real results. Start your transformation today." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ExerciseGym",
          name: "Flex & Form Gym",
          url: `${SITE_URL}/`,
          telephone: "+1-555-123-4567",
          email: "hello@flexandform.gym",
          address: {
            "@type": "PostalAddress",
            streetAddress: "221B Forge Street",
            addressLocality: "Downtown",
            postalCode: "10001",
            addressCountry: "US",
          },
          openingHoursSpecification: [
            { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "05:00", closes: "23:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "06:00", closes: "22:00" },
            { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "07:00", closes: "20:00" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            { "@type": "Question", name: "Do you offer a free trial?", acceptedAnswer: { "@type": "Answer", text: "Yes — every new member gets a 3-day all-access pass plus a free consultation with one of our coaches." } },
            { "@type": "Question", name: "What are your opening hours?", acceptedAnswer: { "@type": "Answer", text: "We're open Mon–Fri 5 AM–11 PM, Sat 6 AM–10 PM, Sun 7 AM–8 PM. Premium members get 24/7 access." } },
            { "@type": "Question", name: "Are personal trainers included?", acceptedAnswer: { "@type": "Answer", text: "PT sessions are included in Quarterly and Yearly plans. You can also book extra sessions any time." } },
            { "@type": "Question", name: "Can I cancel anytime?", acceptedAnswer: { "@type": "Answer", text: "Absolutely. No long-term contracts, no hidden fees. Cancel from your member portal." } },
            { "@type": "Question", name: "Do you provide diet plans?", acceptedAnswer: { "@type": "Answer", text: "Yes — our coaches build personalized nutrition plans tailored to your goals." } },
          ],
        }),
      },
    ],
  }),
  component: HomePage,
});

const highlights = [
  { icon: Dumbbell, title: "Elite Equipment", text: "Premium plate-loaded and free weights, cable systems, and pro cardio." },
  { icon: Users, title: "Certified Coaches", text: "World-class trainers in strength, conditioning, and nutrition." },
  { icon: Trophy, title: "Proven Results", text: "10,000+ transformations and counting. Your turn is next." },
  { icon: HeartPulse, title: "24/7 Access", text: "Train when it suits you — anytime, day or night." },
];

const services = [
  { img: weightsImg, title: "Weight Training", text: "Build raw strength with structured programs." },
  { img: ptImg, title: "Personal Training", text: "1-on-1 coaching tailored to your goals." },
  { img: cardioImg, title: "Cardio Programs", text: "Burn fat, build engine, push limits." },
  { img: nutritionImg, title: "Diet & Nutrition", text: "Custom meal plans that actually work." },
  { img: groupImg, title: "Group Classes", text: "HIIT, Spin, Strength — train as a tribe." },
  { img: gymInterior, title: "Open Gym Floor", text: "Train freely with premium equipment." },
];

const memberships = [
  { name: "Monthly", price: 1000, period: "/mo", features: ["Full gym access", "Group classes", "Locker room", "Free WiFi"], popular: false },
  { name: "Quarterly", price: 2700, period: "/qtr", features: ["Everything in Monthly", "1 PT session/month", "Nutrition basics", "Guest passes (2)"], popular: true },
  { name: "Yearly", price: 10000, period: "/yr", features: ["Everything in Quarterly", "4 PT sessions/month", "Custom diet plan", "Unlimited guest passes"], popular: false },
];

const testimonials = [
  { name: "Marcus T.", role: "Lost 28 lbs in 4 months", quote: "Flex & Form changed my life. The coaches push you in the best way possible." },
  { name: "Priya S.", role: "Gained 12 lbs of muscle", quote: "Best gym I've ever trained at. Equipment, vibe, coaching — all 10/10." },
  { name: "Daniel K.", role: "Powerlifting member", quote: "Hit a 500lb deadlift here. The community alone is worth the price." },
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
          alt="Athlete lifting heavy in dark gym"
          width={1920}
          height={1080}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/40 bg-primary/10 text-primary text-xs uppercase tracking-[0.3em]">
              <Flame className="h-3.5 w-3.5" /> No Excuses. Only Results.
            </p>
            <h1 className="mt-5 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider leading-[0.95]">
              Transform Your <span className="text-gradient-primary">Body.</span><br />
              Transform Your Life.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-muted-foreground">
              Premium training. Elite coaching. Real transformations. Step into the forge and become the strongest version of yourself.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild size="lg" className="bg-gradient-primary shadow-glow uppercase tracking-wider font-semibold text-base">
                <Link to="/membership">Join Now <ChevronRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-foreground/30 hover:bg-foreground/10 uppercase tracking-wider font-semibold text-base">
                <Link to="/contact">Start Today — Free Trial</Link>
              </Button>
            </div>
            <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
              {[
                { n: "10K+", l: "Members" },
                { n: "50+", l: "Coaches" },
                { n: "15", l: "Years Strong" },
              ].map((s) => (
                <div key={s.l}>
                  <p className="font-display text-3xl text-primary">{s.n}</p>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          {/* BMI Calculator above the fold */}
          <BmiCalculator />
        </div>

        {/* Marquee */}
        <div className="absolute bottom-0 left-0 right-0 border-y border-border bg-background/80 backdrop-blur-sm overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-3">
            {Array.from({ length: 2 }).map((_, i) => (
              <div key={i} className="flex items-center gap-12 px-6 font-display text-lg tracking-[0.3em] text-muted-foreground">
                {["Push Your Limits", "Build Strength", "Forge Discipline", "Earn Your Body", "No Excuses", "Outwork Yesterday"].map((w) => (
                  <span key={w} className="flex items-center gap-12">
                    {w} <Flame className="h-4 w-4 text-primary" />
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Why Flex &amp; Form</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">Train Without <span className="text-gradient-primary">Limits</span></h2>
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

      {/* SERVICES */}
      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">What We Offer</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">Train Smarter. <span className="text-gradient-primary">Hit Harder.</span></h2>
            </div>
            <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10 uppercase tracking-wider"><Link to="/services">All Services <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Card key={s.title} className="overflow-hidden bg-card border-border group">
                <div className="relative h-52 overflow-hidden">
                  <img src={s.img} alt={s.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-xl tracking-wider">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBERSHIP PREVIEW */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Membership</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">Choose Your <span className="text-gradient-primary">Plan</span></h2>
          <p className="mt-3 text-muted-foreground">No contracts. No fluff. Cancel anytime.</p>
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
      </section>

      {/* TRAINERS PREVIEW */}
      <section className="bg-gradient-dark border-y border-border py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Meet Your Coaches</p>
              <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">The <span className="text-gradient-primary">Forge Crew</span></h2>
            </div>
            <Button asChild variant="outline" className="border-primary/40 hover:bg-primary/10 uppercase tracking-wider"><Link to="/trainers">All Trainers <ChevronRight className="ml-1 h-4 w-4" /></Link></Button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {trainers.map((t) => (
              <Card key={t.name} className="overflow-hidden bg-card border-border group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={t.img} alt={t.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
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
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">Real Members. Real Results.</p>
          <h2 className="mt-2 font-display text-4xl md:text-5xl tracking-wider">What Our <span className="text-gradient-primary">Tribe</span> Says</h2>
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

      {/* FAQ + Newsletter */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.3fr_1fr] gap-10">
        <div>
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.3em]">FAQ</p>
          <h2 className="mt-2 font-display text-4xl tracking-wider">Got <span className="text-gradient-primary">Questions?</span></h2>
          <Accordion type="single" collapsible className="mt-6">
            {[
              { q: "Do you offer a free trial?", a: "Yes — every new member gets a 3-day all-access pass plus a free consultation with one of our coaches." },
              { q: "What are your opening hours?", a: "We're open Mon–Fri 5 AM–11 PM, Sat 6 AM–10 PM, Sun 7 AM–8 PM. Premium members get 24/7 access." },
              { q: "Are personal trainers included?", a: "PT sessions are included in Quarterly and Yearly plans. You can also book extra sessions any time." },
              { q: "Can I cancel anytime?", a: "Absolutely. No long-term contracts, no hidden fees. Cancel from your member portal." },
              { q: "Do you provide diet plans?", a: "Yes — our coaches build personalized nutrition plans tailored to your goals." },
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
              <p className="text-sm text-muted-foreground">Workouts, tips, exclusive offers.</p>
            </div>
          </div>
          <form
            onSubmit={(e) => { e.preventDefault(); toast.success("Subscribed. Welcome to the forge."); (e.target as HTMLFormElement).reset(); }}
            className="space-y-3"
          >
            <Input required type="email" placeholder="Your email" aria-label="Email address for newsletter" />
            <Button type="submit" className="w-full bg-gradient-primary uppercase tracking-wider font-semibold">Subscribe</Button>
          </form>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">Follow @flex & form</p>
            <div className="grid grid-cols-3 gap-2">
              {[
                { img: weightsImg, alt: "Free weights and barbells area" },
                { img: cardioImg, alt: "Treadmills and cardio machines" },
                { img: ptImg, alt: "Personal training session" },
                { img: groupImg, alt: "High intensity group fitness class" },
                { img: gymInterior, alt: "Modern gym interior with equipment" },
                { img: nutritionImg, alt: "Healthy meal prep and nutrition" },
              ].map((item, i) => (
                <img key={i} src={item.img} alt={item.alt} loading="lazy" className="aspect-square w-full object-cover rounded-md" />
              ))}
            </div>
          </div>
        </Card>
      </section>
    </SiteLayout>
  );
}

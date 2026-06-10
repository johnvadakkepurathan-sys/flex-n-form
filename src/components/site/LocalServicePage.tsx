import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CtaBanner } from "@/components/site/CtaBanner";
import { CheckCircle2, MapPin } from "lucide-react";

export interface LocalServicePageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  highlights: { title: string; text: string }[];
  body: ReactNode;
  relatedLinks: { to: string; label: string }[];
  image: string;
  imageAlt: string;
}

export function LocalServicePage(props: LocalServicePageProps) {
  return (
    <SiteLayout>
      <PageHeader eyebrow={props.eyebrow} title={props.title} subtitle={props.intro} />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 grid lg:grid-cols-[1.2fr_1fr] gap-10">
        <div>
          <div className="prose prose-invert max-w-none text-muted-foreground space-y-5">{props.body}</div>

          <div className="mt-8 grid sm:grid-cols-2 gap-4">
            {props.highlights.map((h) => (
              <Card key={h.title} className="bg-card border-border p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display tracking-wider">{h.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{h.text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <Card className="mt-8 p-6 bg-card border-border">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <h2 className="font-display text-xl tracking-wider">Serving Mattoor, Kalady &amp; Angamaly</h2>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Family Fitness Centre proudly serves members from Mattoor and nearby areas including
              Kalady, Angamaly, Kanjoor, Thuravoor and Nayathode.
            </p>
          </Card>
        </div>

        <aside className="space-y-6">
          <Card className="overflow-hidden bg-card border-border">
            <img src={props.image} alt={props.imageAlt} loading="lazy" className="aspect-[4/3] w-full object-cover" />
          </Card>
          <Card className="p-6 bg-card border-border">
            <h2 className="font-display text-xl tracking-wider">Explore More</h2>
            <ul className="mt-4 space-y-2 text-sm">
              {props.relatedLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-muted-foreground hover:text-primary">
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Button asChild className="mt-5 w-full bg-gradient-primary uppercase tracking-wider font-semibold">
              <Link to="/contact">Book A Free Visit</Link>
            </Button>
          </Card>
        </aside>
      </section>

      <CtaBanner />
    </SiteLayout>
  );
}

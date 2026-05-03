import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHeader } from "@/components/site/PageHeader";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Flex & Form Gym" },
      { name: "description", content: "Get in touch. Visit, call, or message us — and claim your free 3-day pass." },
      { property: "og:title", content: "Contact — Flex & Form Gym" },
      { property: "og:description", content: "Visit us, call, or claim your free trial." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  phone: z.string().trim().min(7, "Valid phone required").max(20).regex(/^[+\d\s()-]+$/, "Invalid phone"),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(5, "Tell us a bit more").max(1000),
});

const wa = `https://wa.me/15551234567?text=${encodeURIComponent("Hi, I want to join your gym")}`;

function ContactPage() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) errs[String(issue.path[0])] = issue.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    toast.success("Message sent! We'll be in touch within 24 hours.");
    e.currentTarget.reset();
  };

  return (
    <SiteLayout>
      <PageHeader
        eyebrow="Get In Touch"
        title={<>Ready To <span className="text-gradient-primary">Start?</span></>}
        subtitle="Drop us a message, give us a call, or come visit. Your transformation starts the moment you decide."
      />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-[1.2fr_1fr] gap-8">
        <Card className="p-6 sm:p-8 bg-card border-border">
          <h2 className="font-display text-2xl tracking-wider">Send Us A Message</h2>
          <p className="text-sm text-muted-foreground mt-1">We'll get back to you within 24 hours.</p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4" noValidate>
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" name="name" placeholder="John Doe" maxLength={80} required />
              {errors.name && <p className="mt-1 text-xs text-primary">{errors.name}</p>}
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" type="tel" placeholder="+1 555 123 4567" maxLength={20} required />
                {errors.phone && <p className="mt-1 text-xs text-primary">{errors.phone}</p>}
              </div>
              <div>
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} required />
                {errors.email && <p className="mt-1 text-xs text-primary">{errors.email}</p>}
              </div>
            </div>
            <div>
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Tell us about your goals..." rows={5} maxLength={1000} required />
              {errors.message && <p className="mt-1 text-xs text-primary">{errors.message}</p>}
            </div>
            <div className="flex flex-wrap gap-3">
              <Button type="submit" size="lg" className="bg-gradient-primary uppercase tracking-wider font-semibold">Send Message</Button>
              <Button asChild type="button" size="lg" variant="outline" className="border-[oklch(0.7_0.18_145)]/40 text-[oklch(0.7_0.18_145)] hover:bg-[oklch(0.7_0.18_145)]/10 uppercase tracking-wider font-semibold">
                <a href={wa} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-4 w-4" /> WhatsApp Us</a>
              </Button>
            </div>
          </form>
        </Card>

        <div className="space-y-5">
          {[
            { icon: MapPin, title: "Visit Us", text: "221B Forge Street, Downtown, City 10001" },
            { icon: Phone, title: "Call Us", text: "+1 (555) 123-4567", href: "tel:+15551234567" },
            { icon: Mail, title: "Email Us", text: "hello@flex & form.gym", href: "mailto:hello@flex & form.gym" },
            { icon: Clock, title: "Hours", text: "Mon–Fri 5AM–11PM • Sat 6AM–10PM • Sun 7AM–8PM" },
          ].map((b) => (
            <Card key={b.title} className="p-5 bg-card border-border flex gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-md bg-gradient-primary shrink-0">
                <b.icon className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display tracking-wider">{b.title}</h3>
                {b.href ? (
                  <a href={b.href} className="text-sm text-muted-foreground hover:text-primary">{b.text}</a>
                ) : (
                  <p className="text-sm text-muted-foreground">{b.text}</p>
                )}
              </div>
            </Card>
          ))}

          <Card className="overflow-hidden bg-card border-border">
            <iframe
              title="Flex & Form Location"
              src="https://www.google.com/maps?q=Times+Square,New+York&output=embed"
              className="w-full h-72 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Card>
        </div>
      </section>
    </SiteLayout>
  );
}

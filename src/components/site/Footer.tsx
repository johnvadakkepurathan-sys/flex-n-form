import { Link } from "@tanstack/react-router";
import { Flame, Instagram, Facebook, Youtube, MapPin, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/50 mt-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-md bg-gradient-primary shadow-glow">
                <Flame className="h-5 w-5 text-primary-foreground" />
              </span>
              <span className="font-display text-xl tracking-widest">
                FAMILY <span className="text-primary">FITNESS</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              The best gym in Mattoor — modern equipment, expert coaching, real results. Serving Mattoor, Kalady &amp; Angamaly.
            </p>
            <div className="mt-4 flex gap-3">
              <a href="#" aria-label="Instagram" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" aria-label="YouTube" className="p-2 rounded-md border border-border hover:border-primary hover:text-primary transition-colors">
                <Youtube className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Local Pages</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/gym-in-mattor" className="hover:text-primary">Gym in Mattoor</Link></li>
              <li><Link to="/personal-training-in-mattor" className="hover:text-primary">Personal Training in Mattoor</Link></li>
              <li><Link to="/weight-loss-programs-in-mattor" className="hover:text-primary">Weight Loss Training</Link></li>
              <li><Link to="/strength-training-in-mattor" className="hover:text-primary">Strength Training</Link></li>
              <li><Link to="/membership" className="hover:text-primary">Gym Membership in Mattoor</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> Main Road, Mattoor, Kerala 683574</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="mailto:hello@familyfitnesscentre.in" className="hover:text-primary">hello@familyfitnesscentre.in</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 5:00 AM – 10:00 PM</li>
              <li>Saturday: 6:00 AM – 9:00 PM</li>
              <li>Sunday: 7:00 AM – 1:00 PM</li>
            </ul>
            <p className="mt-4 text-xs text-muted-foreground">
              Serving Mattoor, Kalady, Angamaly, Kanjoor, Thuravoor &amp; Nayathode.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Family Fitness Centre, Mattoor. All rights reserved.</p>
          <p className="uppercase tracking-widest text-primary">Best Gym in Mattoor · Near Kalady &amp; Angamaly</p>
        </div>
      </div>
    </footer>
  );
}

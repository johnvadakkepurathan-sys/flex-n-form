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
                FLEX <span className="text-primary">&amp; FORM</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              No excuses. Only results. Forge the strongest version of yourself.
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
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Explore</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/services" className="hover:text-primary">Services</Link></li>
              <li><Link to="/membership" className="hover:text-primary">Membership</Link></li>
              <li><Link to="/trainers" className="hover:text-primary">Trainers</Link></li>
              <li><Link to="/transformations" className="hover:text-primary">Transformations</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Visit Us</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2"><MapPin className="h-4 w-4 text-primary shrink-0 mt-0.5" /> 221B Forge Street, Downtown</li>
              <li className="flex gap-2"><Phone className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="tel:+15551234567" className="hover:text-primary">+1 (555) 123-4567</a></li>
              <li className="flex gap-2"><Mail className="h-4 w-4 text-primary shrink-0 mt-0.5" /> <a href="mailto:hello@flex & form.gym" className="hover:text-primary">hello@flex & form.gym</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm tracking-widest text-foreground mb-4">Hours</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Mon – Fri: 5:00 AM – 11:00 PM</li>
              <li>Saturday: 6:00 AM – 10:00 PM</li>
              <li>Sunday: 7:00 AM – 8:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Flex & Form Gym. All rights reserved.</p>
          <p className="uppercase tracking-widest text-primary">Push Your Limits.</p>
        </div>
      </div>
    </footer>
  );
}

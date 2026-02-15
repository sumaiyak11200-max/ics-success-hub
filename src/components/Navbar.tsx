import { Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Results", href: "/#results" },
  { label: "Faculty", href: "/#faculty" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/book-demo" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur border-b">
      <div className="container flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-heading font-bold text-lg">I</span>
          </div>
          <div className="leading-tight">
            <span className="font-heading font-bold text-foreground text-base">ICS Coaching</span>
            <span className="block text-[10px] text-muted-foreground -mt-0.5">Sonipat</span>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <Link key={l.label} to={l.href} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919876543210" className="flex items-center gap-1.5 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            98765 43210
          </a>
          <Button asChild>
            <Link to="/book-demo">Book Free Demo</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t bg-card pb-4">
          <nav className="flex flex-col px-4 pt-2 gap-1">
            {navLinks.map((l) => (
              <Link key={l.label} to={l.href} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-muted-foreground hover:text-foreground">
                {l.label}
              </Link>
            ))}
            <Button asChild className="mt-2">
              <Link to="/book-demo" onClick={() => setOpen(false)}>Book Free Demo</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

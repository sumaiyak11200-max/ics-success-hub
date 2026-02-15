import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-primary-foreground">
    <div className="container section-padding pb-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center">
              <span className="text-accent-foreground font-heading font-bold text-lg">I</span>
            </div>
            <span className="font-heading font-bold text-lg">ICS Coaching Centre</span>
          </div>
          <p className="text-sm opacity-70 leading-relaxed">Sonipat's most trusted coaching institute for SSC, HSSC, Banking, CET, Police & Teacher exams.</p>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <Link to="/courses" className="hover:opacity-100 transition-opacity">Courses</Link>
            <Link to="/book-demo" className="hover:opacity-100 transition-opacity">Book Demo</Link>
            <Link to="/#results" className="hover:opacity-100 transition-opacity">Results</Link>
            <Link to="/#faculty" className="hover:opacity-100 transition-opacity">Faculty</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Exams We Cover</h4>
          <nav className="flex flex-col gap-2 text-sm opacity-70">
            <span>SSC CGL / CHSL / MTS</span>
            <span>HSSC Group D / C</span>
            <span>Haryana CET</span>
            <span>Banking PO / Clerk</span>
            <span>Haryana Police</span>
          </nav>
        </div>

        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm opacity-70">
            <a href="tel:+919876543210" className="flex items-center gap-2 hover:opacity-100"><Phone className="w-4 h-4" /> 98765 43210</a>
            <a href="mailto:info@icscoaching.in" className="flex items-center gap-2 hover:opacity-100"><Mail className="w-4 h-4" /> info@icscoaching.in</a>
            <span className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 shrink-0" /> Near Bus Stand, Sonipat, Haryana</span>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 pt-6 text-center text-xs opacity-50">
        © {new Date().getFullYear()} ICS Coaching Centre, Sonipat. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;

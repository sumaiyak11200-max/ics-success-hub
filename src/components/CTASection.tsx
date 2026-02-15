import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const CTASection = () => (
  <section className="section-padding bg-accent">
    <div className="container text-center">
      <h2 className="text-2xl md:text-3xl font-heading font-bold text-accent-foreground mb-3">
        Ready to Start Your Preparation?
      </h2>
      <p className="text-accent-foreground/80 text-sm mb-6 max-w-md mx-auto">
        Book a free demo class and experience the ICS difference. Your government job is just one decision away.
      </p>
      <div className="flex flex-wrap justify-center gap-3">
        <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 font-semibold" asChild>
          <Link to="/book-demo">
            Book Free Demo <ArrowRight className="ml-2 w-4 h-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" className="border-accent-foreground/30 text-accent-foreground hover:bg-accent-foreground/10" asChild>
          <Link to="/courses">View All Courses</Link>
        </Button>
      </div>
    </div>
  </section>
);

export default CTASection;

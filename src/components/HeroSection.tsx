import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Trophy, BookOpen } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { icon: Trophy, value: "10,000+", label: "Selections" },
  { icon: Users, value: "50,000+", label: "Students Trained" },
  { icon: BookOpen, value: "15+", label: "Years Experience" },
];

const HeroSection = () => (
  <section className="relative overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="ICS Coaching students" className="w-full h-full object-cover" loading="eager" />
      <div className="absolute inset-0 bg-hero opacity-85" />
    </div>

    <div className="relative container section-padding py-20 md:py-28 lg:py-32">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl"
      >
        <span className="inline-block bg-accent/20 text-accent-foreground backdrop-blur-sm border border-accent/30 text-xs font-semibold px-3 py-1.5 rounded-full mb-5">
          🏆 Sonipat's #1 Govt. Exam Coaching
        </span>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-heading font-extrabold text-primary-foreground leading-tight mb-5">
          Your Government Job <br className="hidden md:block" />
          <span className="text-accent">Starts Here.</span>
        </h1>

        <p className="text-primary-foreground/80 text-base md:text-lg leading-relaxed mb-8 max-w-lg">
          Expert coaching for SSC, HSSC, CET, Banking, Police & Teacher exams. Join thousands of successful candidates.
        </p>

        <div className="flex flex-wrap gap-3 mb-12">
          <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" asChild>
            <Link to="/courses">
              Explore Courses <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button size="lg" className="bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 hover:bg-primary-foreground/25 font-semibold" asChild>
            <Link to="/book-demo">Book Free Demo</Link>
          </Button>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <s.icon className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-heading font-bold text-primary-foreground text-lg">{s.value}</p>
                <p className="text-primary-foreground/60 text-xs">{s.label}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;

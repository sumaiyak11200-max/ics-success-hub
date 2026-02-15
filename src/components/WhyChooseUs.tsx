import { motion } from "framer-motion";
import { CheckCircle, Shield, Users, BookOpen, Clock, Award } from "lucide-react";

const reasons = [
  { icon: Award, title: "Proven Track Record", desc: "10,000+ selections across SSC, HSSC, Banking & more" },
  { icon: Users, title: "Expert Faculty", desc: "Experienced teachers with deep knowledge of exam patterns" },
  { icon: BookOpen, title: "Complete Study Material", desc: "Curated notes, practice sets & previous year papers" },
  { icon: Clock, title: "1.5 Years Course Validity", desc: "Learn at your own pace with extended course access" },
  { icon: Shield, title: "Online + Offline Mode", desc: "Attend classes from anywhere or join us at our centre" },
  { icon: CheckCircle, title: "Daily Practice Tests", desc: "Regular mock tests with detailed performance analysis" },
];

const WhyChooseUs = () => (
  <section id="about" className="section-padding bg-secondary">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Why Choose ICS Coaching?</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Trusted by thousands of students across Haryana</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="flex gap-4 p-5 bg-card rounded-xl card-elevated"
          >
            <div className="w-10 h-10 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
              <r.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="font-heading font-semibold text-foreground text-sm mb-1">{r.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{r.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

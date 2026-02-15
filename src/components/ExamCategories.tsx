import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Shield, BookOpen, Landmark, Banknote, GraduationCap, Siren } from "lucide-react";

const categories = [
  { icon: BookOpen, label: "SSC", desc: "CGL, CHSL, MTS, GD", color: "bg-primary/10 text-primary" },
  { icon: Landmark, label: "HSSC", desc: "Group C & D Exams", color: "bg-success/10 text-success" },
  { icon: GraduationCap, label: "CET", desc: "Haryana Common Entrance", color: "bg-accent/10 text-accent" },
  { icon: Banknote, label: "Banking", desc: "PO, Clerk, SO", color: "bg-primary/10 text-primary" },
  { icon: Siren, label: "Police", desc: "Haryana & Central", color: "bg-destructive/10 text-destructive" },
  { icon: Shield, label: "Teacher", desc: "TET, HTET, CTET", color: "bg-success/10 text-success" },
];

const ExamCategories = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Exams We Prepare You For</h2>
        <p className="text-muted-foreground text-sm max-w-md mx-auto">Comprehensive coaching for all major government competitive examinations</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {categories.map((c, i) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
          >
            <Link
              to="/courses"
              className="flex flex-col items-center p-5 rounded-xl bg-card card-elevated text-center hover:scale-[1.03] transition-transform"
            >
              <div className={`w-12 h-12 rounded-lg ${c.color} flex items-center justify-center mb-3`}>
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="font-heading font-semibold text-foreground text-sm">{c.label}</h3>
              <p className="text-muted-foreground text-xs mt-1">{c.desc}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ExamCategories;

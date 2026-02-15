import { motion } from "framer-motion";
import { Trophy } from "lucide-react";

const results = [
  { name: "Vikash Rana", post: "SSC CGL - Tax Assistant", year: "2024" },
  { name: "Sunita Kumari", post: "HSSC Clerk", year: "2024" },
  { name: "Deepak Singh", post: "Banking PO - SBI", year: "2023" },
  { name: "Pooja Sharma", post: "Haryana Police SI", year: "2024" },
  { name: "Rajesh Kumar", post: "SSC CHSL - LDC", year: "2023" },
  { name: "Anita Rani", post: "HTET Level 2", year: "2024" },
];

const ResultsSection = () => (
  <section id="results" className="section-padding bg-hero">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-2">Our Proud Results</h2>
        <p className="text-primary-foreground/70 text-sm">Selections that speak louder than words</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
        {results.map((r, i) => (
          <motion.div
            key={r.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className="p-4 bg-primary-foreground/10 backdrop-blur rounded-xl text-center border border-primary-foreground/10"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-3">
              <Trophy className="w-5 h-5 text-accent" />
            </div>
            <p className="font-heading font-semibold text-primary-foreground text-sm">{r.name}</p>
            <p className="text-primary-foreground/70 text-xs mt-0.5">{r.post}</p>
            <p className="text-accent text-xs font-semibold mt-1">{r.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ResultsSection;

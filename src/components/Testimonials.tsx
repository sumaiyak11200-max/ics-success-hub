import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  { name: "Rahul Sharma", exam: "SSC CGL 2024", text: "ICS Coaching changed my life. The teachers guided me at every step. Got selected in my first attempt!", rating: 5 },
  { name: "Priya Yadav", exam: "HSSC Clerk", text: "Best coaching in Sonipat! The study material and test series were exactly what I needed.", rating: 5 },
  { name: "Amit Kumar", exam: "Haryana Police", text: "The mock tests and physical training support helped me crack the police exam. Thank you ICS!", rating: 5 },
  { name: "Neha Devi", exam: "Banking PO", text: "Joined online mode from home. The video lectures and doubt sessions were very helpful.", rating: 5 },
];

const Testimonials = () => (
  <section className="section-padding bg-background">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">What Our Students Say</h2>
        <p className="text-muted-foreground text-sm">Real stories from real achievers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="p-5 bg-card rounded-xl card-elevated"
          >
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <p className="text-foreground text-sm leading-relaxed mb-4">"{t.text}"</p>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">{t.name}</p>
              <p className="text-muted-foreground text-xs">{t.exam}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;

import { motion } from "framer-motion";

const faculty = [
  { name: "Dr. Rajesh Verma", subject: "General Studies & Current Affairs", exp: "18 years" },
  { name: "Sunita Chauhan", subject: "Mathematics & Reasoning", exp: "14 years" },
  { name: "Anil Kumar Sharma", subject: "English & Hindi", exp: "12 years" },
  { name: "Dr. Meena Rani", subject: "Science & Computer", exp: "10 years" },
];

const FacultySection = () => (
  <section id="faculty" className="section-padding bg-secondary">
    <div className="container">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-2">Our Expert Faculty</h2>
        <p className="text-muted-foreground text-sm">Learn from the best in the field</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 max-w-4xl mx-auto">
        {faculty.map((f, i) => (
          <motion.div
            key={f.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="text-center p-5 bg-card rounded-xl card-elevated"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
              <span className="font-heading font-bold text-primary text-xl">{f.name.charAt(0)}</span>
            </div>
            <h3 className="font-heading font-semibold text-foreground text-sm">{f.name}</h3>
            <p className="text-muted-foreground text-xs mt-1">{f.subject}</p>
            <p className="text-primary text-xs font-semibold mt-1">{f.exp} exp.</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FacultySection;

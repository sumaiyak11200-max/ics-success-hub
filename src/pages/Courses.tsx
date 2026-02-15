import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, Monitor, MapPin, ArrowRight } from "lucide-react";

const courses = [
  { title: "SSC Complete", exams: "CGL, CHSL, MTS, GD Constable", duration: "1.5 Years", mode: "Online + Offline", price: "₹15,000", features: ["500+ Hours Video", "Daily Tests", "Complete Notes", "Doubt Support"] },
  { title: "HSSC Master", exams: "Group C, Group D, All Haryana Exams", duration: "1.5 Years", mode: "Online + Offline", price: "₹12,000", features: ["Haryana GK Special", "Previous Papers", "Mock Tests", "Interview Prep"] },
  { title: "CET Foundation", exams: "Haryana Common Eligibility Test", duration: "1 Year", mode: "Online + Offline", price: "₹10,000", features: ["Full Syllabus", "Weekly Tests", "Performance Tracking", "Study Planner"] },
  { title: "Banking Pro", exams: "IBPS PO, Clerk, SBI, RBI", duration: "1.5 Years", mode: "Online + Offline", price: "₹18,000", features: ["Sectional Tests", "Speed Math", "English Mastery", "Current Affairs"] },
  { title: "Police Selection", exams: "Haryana Police, SSC GD, CAPF", duration: "1 Year", mode: "Online + Offline", price: "₹12,000", features: ["Physical Guidance", "Written Prep", "Mock Tests", "Reasoning Focus"] },
  { title: "Teacher's Path", exams: "HTET, CTET, DSSSB", duration: "1 Year", mode: "Online + Offline", price: "₹10,000", features: ["Pedagogy", "Subject Mastery", "Practice Sets", "Previous Years"] },
];

const Courses = () => (
  <>
    <Navbar />
    <main className="section-padding bg-background">
      <div className="container">
        <div className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-2">Our Courses</h1>
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">
            Comprehensive preparation programs designed for maximum results. All courses include 1.5 years validity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-card rounded-xl card-elevated overflow-hidden flex flex-col"
            >
              <div className="bg-hero p-5">
                <h3 className="font-heading font-bold text-primary-foreground text-lg">{c.title}</h3>
                <p className="text-primary-foreground/70 text-xs mt-1">{c.exams}</p>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-4">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {c.duration}</span>
                  <span className="flex items-center gap-1"><Monitor className="w-3.5 h-3.5" /> {c.mode}</span>
                  <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" /> Sonipat</span>
                </div>

                <ul className="space-y-2 mb-5 flex-1">
                  {c.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-success shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-end justify-between pt-4 border-t">
                  <div>
                    <p className="text-xs text-muted-foreground">Starting from</p>
                    <p className="font-heading font-bold text-foreground text-xl">{c.price}</p>
                  </div>
                  <Button size="sm" asChild>
                    <Link to="/book-demo">
                      Enroll Now <ArrowRight className="ml-1 w-3.5 h-3.5" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Courses;

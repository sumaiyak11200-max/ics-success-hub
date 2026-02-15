import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "sonner";
import { Calendar, Phone, User, Target } from "lucide-react";

const timeSlots = [
  "9:00 AM - 10:00 AM",
  "10:00 AM - 11:00 AM",
  "11:00 AM - 12:00 PM",
  "2:00 PM - 3:00 PM",
  "3:00 PM - 4:00 PM",
  "5:00 PM - 6:00 PM",
];

const examGoals = [
  "SSC (CGL / CHSL / MTS)",
  "HSSC (Group C / D)",
  "Haryana CET",
  "Banking (PO / Clerk)",
  "Haryana Police",
  "Teacher (HTET / CTET)",
  "Other",
];

const BookDemo = () => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;

    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      toast.success("Demo class booked successfully! Our team will call you within 24 hours.");

      // Open WhatsApp with the message
      const message = encodeURIComponent(
        "Hey their dear aspirant, we would be loved to connect with you. Our team will call you within 24 hours. Looking forward to help you out dear."
      );
      window.open(`https://wa.me/919876543210?text=${message}`, "_blank");

      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <>
      <Navbar />
      <main className="section-padding bg-background min-h-screen">
        <div className="container max-w-lg">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-heading font-bold text-foreground mb-2">Book a Free Demo Class</h1>
            <p className="text-muted-foreground text-sm">Experience our teaching quality first-hand. No charges, no commitment.</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-card rounded-xl card-elevated p-6 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-1.5 text-sm font-medium">
                <User className="w-4 h-4 text-muted-foreground" /> Full Name
              </Label>
              <Input id="name" name="name" placeholder="Enter your full name" required maxLength={100} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-1.5 text-sm font-medium">
                <Phone className="w-4 h-4 text-muted-foreground" /> Mobile Number
              </Label>
              <Input id="phone" name="phone" type="tel" placeholder="Enter 10-digit mobile number" required pattern="[0-9]{10}" maxLength={10} />
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-sm font-medium">
                <Target className="w-4 h-4 text-muted-foreground" /> Exam Goal
              </Label>
              <Select name="exam" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select your target exam" />
                </SelectTrigger>
                <SelectContent>
                  {examGoals.map((g) => (
                    <SelectItem key={g} value={g}>{g}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-1.5 text-sm font-medium">
                <Calendar className="w-4 h-4 text-muted-foreground" /> Preferred Slot
              </Label>
              <Select name="slot" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select a time slot" />
                </SelectTrigger>
                <SelectContent>
                  {timeSlots.map((s) => (
                    <SelectItem key={s} value={s}>{s}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Button type="submit" className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold" size="lg" disabled={loading}>
              {loading ? "Booking..." : "Book My Free Demo Class"}
            </Button>

            <p className="text-center text-xs text-muted-foreground">
              By booking, you agree to receive a call and WhatsApp message from our team.
            </p>
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BookDemo;

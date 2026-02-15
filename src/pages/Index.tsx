import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExamCategories from "@/components/ExamCategories";
import WhyChooseUs from "@/components/WhyChooseUs";
import ResultsSection from "@/components/ResultsSection";
import FacultySection from "@/components/FacultySection";
import Testimonials from "@/components/Testimonials";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <ExamCategories />
      <WhyChooseUs />
      <ResultsSection />
      <FacultySection />
      <Testimonials />
      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;

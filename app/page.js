import Navbar from "@/components/Navbar/Navbar";
import Hero from "@/components/Hero/Hero";
import StackStrip from "@/components/StackStrip/StackStrip";
import Services from "@/components/Services/Services";
import Projects from "@/components/Projects/Projects";
import Process from "@/components/Process/Process";
import About from "@/components/About/About";
import Testimonials from "@/components/Testimonials/Testimonials";
import Faq from "@/components/Faq/Faq";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <StackStrip />
      <Projects />
      <Services />
      <Process />
      <About />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </>
  );
}

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Clubs from "../components/Clubs";
import Events from "../components/Events";
import Mentors from "../components/Mentors";
import Footer from "../components/Footer";
import ScrollReveal from "../components/ScrollReveal";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ScrollReveal className="reveal-section">
        <About />
      </ScrollReveal>
      <ScrollReveal className="reveal-section" delay={60}>
        <Clubs />
      </ScrollReveal>
      <ScrollReveal className="reveal-section" delay={80}>
        <Events />
      </ScrollReveal>
      <ScrollReveal className="reveal-section" delay={100}>
        <Mentors />
      </ScrollReveal>
      <ScrollReveal className="reveal-section" delay={120}>
        <Footer />
      </ScrollReveal>
    </div>
  );
}

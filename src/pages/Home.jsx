import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Clubs from "../components/Clubs";
import Events from "../components/Events";
import Mentors from "../components/Mentors";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Clubs />
      <Events />
      <Mentors />
      <Footer />
    </div>
  );
}

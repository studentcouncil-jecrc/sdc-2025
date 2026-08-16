import { hero, clubs } from "../data/content";
import { img } from "../lib/images";
import { FaArrowDown, FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-grid" />
      <div className="hero-glow hero-glow-one" />
      <div className="hero-glow hero-glow-two" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[760px] lg:min-h-[900px] flex items-end pb-14 lg:pb-20 pt-32">
          <div className="w-full grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-end">
            <div>
              <div className="eyebrow mb-7">
                <span className="eyebrow-dot" />
                <span>EST. 2022</span>
                <span className="text-white/30">/</span>
                <span>JECRC FOUNDATION · JAIPUR</span>
              </div>

              <h1 className="hero-title">
                <span>STUDENTS</span>
                <span className="outline-text">WHO</span>
                <span>MAKE IT</span>
                <span className="accent-word">HAPPEN<span>.</span></span>
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:items-center">
                <p className="max-w-md text-sm sm:text-base leading-7 text-white/60">
                  A student-led collective building culture, creativity, leadership and unforgettable campus experiences at JECRC.
                </p>
                <a href="/#clubs" className="hero-arrow-link">
                  <span>Explore the council</span><FaArrowRight />
                </a>
              </div>
            </div>

            <div className="hero-art-wrap">
              <div className="hero-art-main">
                <img src={img("event-img/navrang-2.webp")} alt="Students celebrating at a JECRC event" />
              </div>
              <div className="hero-art-small">
                <img src={img("event-img/freshers-3.webp")} alt="JECRC student event" />
              </div>
              <div className="hero-art-card">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">Active network</span>
                <strong>{clubs.length}</strong>
                <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-white/50">student communities</span>
              </div>
              <div className="hero-stamp">JSC<br /><span>22—26</span></div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <div className="marquee-track">
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
        </div>
        <a href="/#about" className="scroll-cue"><FaArrowDown /> SCROLL TO DISCOVER</a>
      </div>
    </section>
  );
}

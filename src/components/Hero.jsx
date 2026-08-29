import { hero } from "../data/content";
import heroVideo from "../assets/Media1.mp4";
import studentCouncilLogo from "../assets/logos/logoss-02.png";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero-video" aria-hidden="true">
        <video
          className="hero-video-media"
          src={heroVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-video-overlay" />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-logo-sketch" aria-hidden="true">
        <span className="hero-logo-sketch-label">SDC / FIELD NOTE 22</span>
        <img src={studentCouncilLogo} alt="" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[760px] lg:min-h-[900px] flex items-end pb-14 lg:pb-20 pt-32">
          <div className="w-full grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="hero-title hero-reveal hero-reveal-2">
                <span>STUDENTS</span>
                <span className="outline-text">WHO</span>
                <span>MAKE IT</span>
                <span className="accent-word">HAPPEN<span>.</span></span>
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:items-center hero-reveal hero-reveal-3">
                <p className="max-w-md text-sm sm:text-base leading-7 text-white/60">
                  A student-led collective building culture, creativity, leadership and unforgettable campus experiences at JECRC.
                </p>
                <a href="/#clubs" className="hero-arrow-link">
                  <span>Explore the council</span><FaArrowRight />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <div className="marquee-track">
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
        </div>
      </div>
    </section>
  );
}

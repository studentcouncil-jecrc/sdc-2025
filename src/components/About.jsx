import { about } from "../data/content";
import { FaArrowRight } from "react-icons/fa";
import EngineeringDoodle from "./EngineeringDoodle";
import EngineeringDoodleField from "./EngineeringDoodleField";

export default function About() {
  return (
    <section id="about" className="section-light about-section relative overflow-hidden">
      <EngineeringDoodleField theme="light" />
      <EngineeringDoodle variant="about" />
      <EngineeringDoodle variant="about-secondary" />
      <div className="section-doodle section-doodle-about" aria-hidden="true">
        <svg viewBox="0 0 180 120" fill="none">
          <path d="M18 78c18-45 69-58 106-38 30 16 38 47 18 63-20 16-59 5-61-18-2-22 28-35 48-20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M128 28l9 10 16-16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M24 22h38v16H24zM32 22v-8M45 22v-8M58 22v-8M24 46h18M42 46l8-8h22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="72" cy="38" r="3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="about-kicker-row">
          <p className="section-kicker"><span className="about-kicker-dot" />{about.eyebrow}</p>
          <span className="about-kicker-note">The organizing force</span>
        </div>

        <div className="about-editorial-grid">
          <div className="about-main-copy">
            <div className="about-quote-lockup">
              <span className="about-quote-mark" aria-hidden="true">“</span>
              <p className="display-quote">{about.quote}</p>
            </div>
            <div className="about-rule" aria-hidden="true"><span /></div>
            <div className="about-details-grid">
              <p className="body-large">{about.body}</p>
              <div className="stat-panel">
                <div><strong>2022</strong><span>Established</span></div>
                <div><strong>9</strong><span>Communities</span></div>
                <div><strong>∞</strong><span>Possibilities</span></div>
              </div>
            </div>
            <a href="/#clubs" className="about-action inline-flex items-center gap-3 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] border-b border-black pb-3 hover:text-coral transition-colors">
              Meet our communities <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
      <div className="section-edge section-edge-dark" aria-hidden="true" />
    </section>
  );
}

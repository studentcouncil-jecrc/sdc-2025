import { about } from "../data/content";
import { FaArrowRight } from "react-icons/fa";

export default function About() {
  return (
    <section id="about" className="section-light relative overflow-hidden">
      <div className="section-number">01</div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
        <div className="grid lg:grid-cols-[.32fr_1fr] gap-10 lg:gap-20">
          <div>
            <p className="section-kicker">About the council</p>
            <div className="mt-8 hidden lg:block h-px w-28 bg-black/15" />
          </div>

          <div>
            <p className="display-quote">
              “{about.quote}”
            </p>
            <div className="mt-12 grid md:grid-cols-[1fr_280px] gap-12 items-start">
              <p className="body-large">{about.body}</p>
              <div className="stat-panel">
                <div><strong>2022</strong><span>Established</span></div>
                <div><strong>13</strong><span>Communities</span></div>
                <div><strong>∞</strong><span>Possibilities</span></div>
              </div>
            </div>
            <a href="/#clubs" className="inline-flex items-center gap-3 mt-10 font-mono text-[10px] uppercase tracking-[0.18em] border-b border-black pb-3 hover:text-coral transition-colors">
              Meet our communities <FaArrowRight />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { clubs } from "../data/content";
import { img } from "../lib/images";
import { FaArrowRight, FaLayerGroup } from "react-icons/fa6";
import EngineeringDoodle from "./EngineeringDoodle";
import EngineeringDoodleField from "./EngineeringDoodleField";

const filters = ["All", "Creative", "Culture", "Tech"];

function getCategory(tag) {
  if (/robotics|automobile/i.test(tag)) return "Tech";
  if (/cultural|bhangra/i.test(tag)) return "Culture";
  return "Creative";
}

export default function Clubs() {
  const [active, setActive] = useState("All");

  const visibleClubs = useMemo(
    () => clubs.filter((club) => active === "All" || getCategory(club.tag) === active),
    [active]
  );

  useEffect(() => {
    const cards = document.querySelectorAll(".bento-club");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    }, { threshold: 0.16, rootMargin: "0px 0px -8% 0px" });
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [active]);

  return (
    <section id="clubs" className="section-dark relative overflow-hidden communities-section">
      <EngineeringDoodleField theme="dark" />
      <EngineeringDoodle variant="clubs" />
      <EngineeringDoodle variant="clubs-secondary" />
      <div className="community-orb community-orb-one" />
      <div className="community-orb community-orb-two" />

      <div className="section-doodle section-doodle-clubs" aria-hidden="true">
        <svg viewBox="0 0 180 110" fill="none">
          <path d="M15 75c17-37 49-53 78-40 22 10 26 31 15 43-12 13-38 10-43-5-5-15 13-29 30-22" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M120 25l8 10 17-15" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 24h26l8 8h25M54 32v18h19l8-8h17M73 50v12M88 32v-9h18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="20" cy="24" r="3" fill="currentColor"/><circle cx="102" cy="32" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="club-doodle club-doodle-one" aria-hidden="true">
        <svg viewBox="0 0 180 180" fill="none">
          <path d="M35 92c24-43 86-51 112-7 18 30-4 64-38 68-38 5-74-19-74-61Z" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M72 54c12 9 20 20 24 35" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M115 91l12 7-10 9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="92" cy="93" r="4" fill="currentColor" />
        </svg>
      </div>
      <div className="club-doodle club-doodle-two" aria-hidden="true">
        <svg viewBox="0 0 220 120" fill="none">
          <path d="M8 76c19-45 32 22 51-16 18-36 32 30 51-3 20-35 35 27 52-8 16-31 28 17 50-14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M158 27l11 11 18-20" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        <div className="community-heading">
          <div>
            <p className="section-kicker dark-kicker"><FaLayerGroup /></p>
            <h2 className="section-title dark-title mt-5">Find your <span>people.</span></h2>
            <p className="community-lead">Nine communities. One campus.</p>
          </div>
        </div>

        <div className="community-toolbar">
          <div className="community-filters" role="tablist" aria-label="Filter communities">
            {filters.map((filter) => (
              <button key={filter} type="button" role="tab" aria-selected={active === filter}
                className={`community-filter ${active === filter ? "is-active" : ""}`}
                onClick={() => setActive(filter)}>
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="club-bento" key={active}>
          {visibleClubs.map((club, i) => {
            const originalIndex = clubs.findIndex((item) => item.slug === club.slug);
            return (
              <Link key={club.slug} to={`/${club.slug}`} onClick={() => window.scrollTo(0, 0)}
                className={`bento-club bento-club-${originalIndex % 3} bento-variant-${originalIndex % 4} ${i % 2 === 0 ? "from-left" : "from-right"}`}>
                <div className="bento-flip-inner">
                  <div className="bento-face bento-front">
                    <div className="bento-category">{getCategory(club.tag)}</div>
                    <div className={`bento-logo ${club.logoTone === "dark" ? "bento-logo-dark" : "bento-logo-light"}`}>
                      <img src={img(club.icon)} alt={club.name} loading="lazy" />
                    </div>
                    <div className="bento-content"><h3>{club.name}</h3></div>
                    <div className="bento-shine" aria-hidden="true" />
                  </div>
                  <div className="bento-face bento-back">
                    <div><span className="bento-back-kicker">{getCategory(club.tag)}</span><h3>{club.name}</h3><p>{club.description}</p></div>
                    <div className="bento-back-footer"><span>Explore</span><span className="bento-back-arrow"><FaArrowRight /></span></div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      <div className="section-edge section-edge-light" aria-hidden="true" />
    </section>
  );
}

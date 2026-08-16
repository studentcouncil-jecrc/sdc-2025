import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { clubs } from "../data/content";
import { img } from "../lib/images";
import { FaArrowRight, FaArrowUpRightFromSquare, FaLayerGroup } from "react-icons/fa6";

const filters = ["All", "Creative", "Culture", "Tech", "Social"];

function getCategory(tag) {
  if (/robotics|automobile/i.test(tag)) return "Tech";
  if (/social|awareness/i.test(tag)) return "Social";
  if (/cultural|bhangra/i.test(tag)) return "Culture";
  return "Creative";
}

export default function Clubs() {
  const [active, setActive] = useState("All");

  const visibleClubs = useMemo(
    () => clubs.filter((club) => active === "All" || getCategory(club.tag) === active),
    [active]
  );

  return (
    <section id="clubs" className="section-dark relative overflow-hidden communities-section">
      <div className="community-orb community-orb-one" />
      <div className="community-orb community-orb-two" />
      <div className="section-number dark">02</div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        <div className="community-heading">
          <div>
            <p className="section-kicker dark-kicker"><FaLayerGroup /> The ecosystem</p>
            <h2 className="section-title dark-title mt-5">Find your <span>people.</span></h2>
            <p className="community-lead">
              Thirteen communities. Different passions. One campus. Pick a world that feels like yours.
            </p>
          </div>

          <div className="community-side-note">
            <span className="community-side-number">13</span>
            <span>active communities</span>
          </div>
        </div>

        <div className="community-toolbar">
          <div className="community-filters" role="tablist" aria-label="Filter communities">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={active === filter}
                className={`community-filter ${active === filter ? "is-active" : ""}`}
                onClick={() => setActive(filter)}
              >
                {filter}
              </button>
            ))}
          </div>
          <span className="community-count">Showing {visibleClubs.length.toString().padStart(2, "0")} / {clubs.length.toString().padStart(2, "0")}</span>
        </div>

        <div className="club-bento" key={active}>
          {visibleClubs.map((club, i) => {
            const originalIndex = clubs.findIndex((item) => item.slug === club.slug);
            return (
              <Link
                key={club.slug}
                to={`/${club.slug}`}
                onClick={() => window.scrollTo(0, 0)}
                className={`bento-club bento-club-${originalIndex % 7}`}
              >
                <div className="bento-no">{String(originalIndex + 1).padStart(2, "0")}</div>
                <div className="bento-category">{getCategory(club.tag)}</div>

                <div className={`bento-logo ${club.logoTone === "dark" ? "bento-logo-dark" : "bento-logo-light"}`}>
                  <img src={img(club.icon)} alt={club.name} loading="lazy" />
                </div>

                <div className="bento-content">
                  <p>{club.tag}</p>
                  <h3>{club.name}</h3>
                  <span className="bento-description">{club.description}</span>
                </div>

                <span className="bento-action">
                  <span>Explore</span><FaArrowUpRightFromSquare />
                </span>

                <div className="bento-shine" aria-hidden="true" />
              </Link>
            );
          })}
        </div>

        <div className="community-footer-note">
          <span>Every community has its own rhythm.</span>
          <span>Tap a card to enter the world <FaArrowRight /></span>
        </div>
      </div>
    </section>
  );
}

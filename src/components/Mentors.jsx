import { useState } from "react";
import { mentors } from "../data/content";
import { img } from "../lib/images";
import { FaInstagram, FaLinkedinIn, FaRotate } from "react-icons/fa6";
import EngineeringDoodle from "./EngineeringDoodle";
import EngineeringDoodleField from "./EngineeringDoodleField";

export default function Mentors() {
  const [flipped, setFlipped] = useState(null);

  const toggleCard = (index) => setFlipped((current) => (current === index ? null : index));

  return (
    <section id="mentors" className="section-dark relative overflow-hidden mentors-section">
      <EngineeringDoodleField theme="dark" />
      <EngineeringDoodle variant="mentors" />
      <EngineeringDoodle variant="mentors-secondary" />
      <div className="section-doodle section-doodle-mentors" aria-hidden="true">
        <svg viewBox="0 0 240 150" fill="none">
          <path d="M12 111c38-58 62-63 91-28 25 30 40 35 58 8 17-25 35-30 67-8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <circle cx="12" cy="111" r="5" fill="currentColor"/>
          <circle cx="103" cy="83" r="5" fill="currentColor"/>
          <circle cx="161" cy="91" r="5" fill="currentColor"/>
          <circle cx="228" cy="83" r="5" fill="currentColor"/>
          <path d="M35 42h36l12 12h28M71 42V24M83 54v23M111 54h30v-17h27" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="35" cy="42" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="167" cy="37" r="3" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      </div>
      <div className="mentor-glow mentor-glow-one" />
      <div className="mentor-glow mentor-glow-two" />

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        <div className="mentors-intro">
          <div>
            <p className="section-kicker dark-kicker">Guided by experience</p>
            <h2 className="section-title dark-title mentors-title mt-5">
              People who <span>back us.</span>
            </h2>
          </div>
        </div>

        <div className="mentor-cards">
          {mentors.map((mentor, i) => (
            <article
              key={mentor.name}
              className={`mentor-card mentor-card-${i} ${flipped === i ? "is-flipped" : ""}`}
              onClick={(e) => { if (e.target.closest("a")) return; toggleCard(i); }}
              onMouseLeave={() => setFlipped((current) => (current === i ? null : current))}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleCard(i); } }}
              tabIndex={0}
              role="button"
              aria-label={`${mentor.name}: ${flipped === i ? "show front" : "show social links"}`}
            >
              <div className="mentor-card-inner">
                <div className="mentor-card-face mentor-card-front">
                  <div className="mentor-card-image">
                    <img src={img(mentor.image)} alt={mentor.name} loading="lazy" decoding="async" />
                    <div className="mentor-card-shade" />
                    <div className="mentor-front-copy">
                      <h3>{mentor.name}</h3>
                      <p>{mentor.title}</p>
                    </div>
                  </div>
                  <div className="mentor-card-info">
                    <h3>{mentor.name}</h3>
                  </div>
                </div>

                <div className="mentor-card-face mentor-card-back">
                  <h3>{mentor.name}</h3>
                  <p>{mentor.title}</p>
                  <div className="mentor-socials" onClick={(e) => e.stopPropagation()} onKeyDown={(e) => e.stopPropagation()}>
                    {mentor.linkedin && (
                      <a href={mentor.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()} aria-label={`LinkedIn - ${mentor.name}`}>
                        <FaLinkedinIn /> <span>LinkedIn</span>
                      </a>
                    )}
                    {mentor.instagram && (
                      <a href={mentor.instagram} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} onPointerDown={(e) => e.stopPropagation()} aria-label={`Instagram - ${mentor.name}`}>
                        <FaInstagram /> <span>Instagram</span>
                      </a>
                    )}
                  </div>
                  <span className="mentor-flip-back"><FaRotate /></span>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
      <div className="section-edge section-edge-dark" aria-hidden="true" />
    </section>
  );
}

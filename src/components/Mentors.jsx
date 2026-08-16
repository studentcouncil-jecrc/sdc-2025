import { mentors } from "../data/content";
import { img } from "../lib/images";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Mentors() {
  return (
    <section id="mentors" className="section-dark relative overflow-hidden mentors-section">
      <div className="section-number dark">04</div>
      <div className="mentor-glow mentor-glow-one" />
      <div className="mentor-glow mentor-glow-two" />
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36 relative z-10">
        <div className="mentors-intro">
          <div>
            <p className="section-kicker dark-kicker">Guided by experience</p>
            <h2 className="section-title dark-title mt-5">People who <span>back us.</span></h2>
          </div>
          <div className="mentors-intro-copy">
            <span>05 / MENTORS</span>
            <p>
              The council grows because students lead — and because experienced mentors give those ideas room to become real.
            </p>
          </div>
        </div>

        <div className="mentor-cards">
          {mentors.map((mentor, i) => (
            <article key={mentor.name} className={`mentor-card mentor-card-${i}`}>
              <div className="mentor-card-image mentor-credential-trigger">
                <img src={img(mentor.image)} alt={mentor.name} loading="lazy" />
                <div className="mentor-card-shade" />

                <div className="mentor-card-top">
                  <span className="mentor-card-no">0{i + 1}</span>
                  <span className="mentor-hover-hint">Hover for credentials</span>
                </div>

                <div className="mentor-credential-overlay">
                  <span className="mentor-credential-kicker">Credential / Role</span>
                  <h3>{mentor.name}</h3>
                  <p>{mentor.title}</p>
                  <span className="mentor-credential-line" />
                  <span className="mentor-credential-cta"><FaArrowUpRightFromSquare /> Council Mentor</span>
                </div>
              </div>

              <div className="mentor-card-info">
                <h3>{mentor.name}</h3>
                <p>Hover to reveal credentials</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mentor-bottom-line">
          <span>People behind the people.</span>
          <span>JECRC Student Council / Student Development Cell</span>
        </div>
      </div>
    </section>
  );
}

import { FaInstagram, FaGlobe, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { footer } from "../data/content";
import EngineeringDoodle from "./EngineeringDoodle";
import EngineeringDoodleField from "./EngineeringDoodleField";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <EngineeringDoodleField theme="dark" />
      <EngineeringDoodle variant="footer" />
      <EngineeringDoodle variant="footer-secondary" />
      <div className="section-doodle section-doodle-footer" aria-hidden="true">
        <svg viewBox="0 0 220 140" fill="none">
          <path d="M25 105c20-53 68-76 112-61 31 10 48 34 38 57-10 22-44 22-53 1-9-21 15-41 38-30" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
          <path d="M155 57l22 2-8 20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M32 26h42M32 21v10M42 23v6M52 23v6M62 23v6M74 26l14 14M88 40h22v18h-22z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="110" cy="58" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="footer-top">
          <div>
            <h2 className="footer-title">Let’s make the<br /><span>next thing.</span></h2>
          </div>
          <div className="footer-contact">
            <a href={`mailto:${footer.email}`} className="email-link"><FaEnvelope />{footer.email}</a>
            <div className="mt-8 text-sm leading-7 text-white/45">
              {footer.address.map((line) => <p key={line}>{line}</p>)}
            </div>
            <div className="flex gap-3 mt-8">
              <a href={footer.instagram} target="_blank" rel="noreferrer" className="social-button"><FaInstagram /></a>
              <a href={footer.siteLink} target="_blank" rel="noreferrer" className="social-button"><FaGlobe /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} JECRC Student Council</span>
        <a href="/#home" aria-label="Back to top"><FaArrowUp /></a>
      </div>
    </footer>
  );
}

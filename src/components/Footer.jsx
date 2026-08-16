import { FaInstagram, FaGlobe, FaArrowUp, FaEnvelope } from "react-icons/fa";
import { footer } from "../data/content";

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="footer-top">
          <div>
            <p className="section-kicker dark-kicker">05 / Contact</p>
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
        <span className="hidden sm:inline">Designed for students. Built for moments.</span>
        <a href="/#home" aria-label="Back to top"><FaArrowUp /></a>
      </div>
    </footer>
  );
}

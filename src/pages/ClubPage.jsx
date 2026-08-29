import { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft, FaArrowRight, FaCheck, FaXmark } from "react-icons/fa6";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { clubs, eventGalleries } from "../data/content";
import { img } from "../lib/images";

const clubMeta = {
  adaa: { eyebrow: "Fashion / Style", manifesto: "Confidence is the first outfit.", focus: ["Runway & styling", "Editorial shoots", "Campus showcases"], gallery: ["navrang", "freshers", "annualFest"] },
  atrangi: { eyebrow: "Culture / Arts", manifesto: "Different colours. One campus.", focus: ["Cultural showcases", "Poetry & writing", "Festive experiences"], gallery: ["navrang", "kalakriti", "laFiesta"] },
  avyaan: { eyebrow: "Music / Performance", manifesto: "Turn silence into a story.", focus: ["Live performances", "Vocal & instrumental", "Campus concerts"], gallery: ["annualFest", "freshers", "laFiesta"] },
  enigma: { eyebrow: "Dance / Performance", manifesto: "Let movement say what words cannot.", focus: ["Choreography", "Stage performances", "Dance battles"], gallery: ["navrang", "annualFest", "freshers"] },
  fnf: { eyebrow: "Drama / Theatre", manifesto: "Every stage deserves a story.", focus: ["Acting & theatre", "Stage direction", "Live productions"], gallery: ["freshers", "annualFest", "parichay"] },
  fotogra: { eyebrow: "Photography / Visuals", manifesto: "Freeze the moments that matter.", focus: ["Event coverage", "Portraits", "Visual storytelling"], gallery: ["freshers", "renaissance", "annualFest"] },
  khalas: { eyebrow: "Bhangra / Culture", manifesto: "Energy you can hear before the music starts.", focus: ["Bhangra performances", "Punjabi culture", "Campus showcases"], gallery: ["navrang", "annualFest", "laFiesta"] },
  moonriders: { eyebrow: "Automobile / Engineering", manifesto: "Build it. Tune it. Move it.", focus: ["Automotive innovation", "Engineering builds", "Motorsport culture"], gallery: ["athletics", "annualFest", "freshers"] },
  xananoids: { eyebrow: "Robotics / Technology", manifesto: "Build tomorrow with your own hands.", focus: ["Robotics", "Automation", "Technical projects"], gallery: ["annualFest", "athletics", "freshers"] },
};

const fallbackMeta = { eyebrow: "Student Community", manifesto: "Find your people. Make your mark.", focus: ["Community", "Creativity", "Campus life"], gallery: ["freshers", "annualFest", "navrang"] };

export default function ClubPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activePhoto, setActivePhoto] = useState(null);
  const club = clubs.find((c) => c.slug === slug);
  const meta = clubMeta[slug] || fallbackMeta;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const galleryItems = useMemo(() => {
    return meta.gallery.flatMap((key) => {
      const event = eventGalleries[key];
      return event ? event.images.map((src, index) => ({ src, label: event.label, year: event.year, index })) : [];
    });
  }, [meta.gallery]);

  if (!club) return <Navigate to="/" replace />;

  return (
    <div className="club-page club-page-v2">
      <Navbar />
      <main>
        <section className="club-detail-hero">
          <div className="club-detail-grid" />
          <div className="club-detail-glow" />
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-32 pb-20 lg:pt-40 lg:pb-28 relative z-10">
            <button className="club-back-button" onClick={() => navigate("/")} type="button">
              <FaArrowLeft /> Back to homepage
            </button>

            <div className="club-detail-top">
              <div className={`club-detail-logo ${club.logoTone === "dark" ? "is-dark" : "is-light"}`}>
                <img src={img(club.icon)} alt={club.name} />
                <span className="club-detail-logo-number">{String(clubs.findIndex((item) => item.slug === club.slug) + 1).padStart(2, "0")}</span>
              </div>

              <div className="club-detail-copy-wrap">
                <p className="eyebrow"><span className="eyebrow-dot" />{meta.eyebrow}</p>
                <h1 className="club-detail-title">{club.name}<span>.</span></h1>
                <p className="club-detail-manifesto">“{meta.manifesto}”</p>
                <p className="club-detail-description">{club.description}</p>
                <div className="club-detail-actions">
                  <a href="/#contact" className="hero-arrow-link">Connect with the council <FaArrowRight /></a>
                  <span className="club-detail-status"><span /> Active community</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="club-detail-intro section-light">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="club-detail-intro-grid">
              <div>
                <p className="section-kicker"><span className="kicker-line" /> Inside the community</p>
                <h2 className="club-detail-section-title">More than a <span>club.</span></h2>
              </div>
              <div>
                <p className="club-detail-section-copy">A student-led space where people with shared interests meet, collaborate, perform, build and create. Every community adds a different rhythm to JECRC campus life.</p>
                <div className="club-focus-grid">
                  {meta.focus.map((item, i) => <div key={item} className="club-focus"><span>0{i + 1}</span><strong>{item}</strong><FaCheck /></div>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="club-detail-gallery section-dark">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="club-gallery-heading">
              <div>
                <p className="section-kicker dark-kicker"><span className="kicker-line" /> From the archive</p>
                <h2 className="section-title dark-title mt-5">Moments that <span>move.</span></h2>
              </div>
              <p>Explore a selection from the council's campus archive. Click any image to open it full screen.</p>
            </div>

            <div className="club-photo-grid">
              {galleryItems.slice(0, 9).map((photo, i) => (
                <button key={`${photo.src}-${i}`} type="button" className={`club-photo club-photo-${i % 5}`} onClick={() => setActivePhoto({ photo, index: i })}>
                  <img src={img(photo.src)} alt={`${photo.label} campus moment`} loading="lazy" />
                  <span className="club-photo-overlay"><span>{photo.label}</span><strong>{photo.year}</strong></span>
                </button>
              ))}
            </div>
          </div>
        </section>

        <section className="club-detail-cta">
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
            <div className="club-cta-card">
              <div>
                <p className="section-kicker dark-kicker"><span className="kicker-line" /> Your next chapter</p>
                <h2>Ready to find<br /><span>your people?</span></h2>
              </div>
              <Link to="/#clubs" className="club-cta-link">Explore all communities <FaArrowRight /></Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {activePhoto && (
        <div className="club-lightbox" role="dialog" aria-modal="true" onClick={() => setActivePhoto(null)}>
          <button className="club-lightbox-close" onClick={() => setActivePhoto(null)} type="button" aria-label="Close"><FaXmark /></button>
          <div className="club-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <img src={img(activePhoto.photo.src)} alt={`${activePhoto.photo.label} campus moment`} />
            <div className="club-lightbox-caption"><span>{activePhoto.photo.label}</span><strong>{activePhoto.photo.year}</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}

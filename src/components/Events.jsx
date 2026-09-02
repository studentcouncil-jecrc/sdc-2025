import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { img } from "../lib/images";
import { FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight, FaXmark } from "react-icons/fa6";
import EngineeringDoodle from "./EngineeringDoodle";
import EngineeringDoodleField from "./EngineeringDoodleField";

const featured = [
  { gallery: "navrang", file: "event-img/navrang-2.webp", label: "Navrang", type: "Cultural", year: "2026" },
  { gallery: "freshers", file: "event-img/freshers-3.webp", label: "Freshers", type: "Welcome Week", year: "2026" },
  { gallery: "annualFest", file: "event-img/af3.webp", label: "After Party", type: "Campus Life", year: "2025" },
  { gallery: "kalakriti", file: "event-img/ka2.webp", label: "Karvaan", type: "Arts & Culture", year: "2025" },
  { gallery: "athletics", file: "event-img/ath3.webp", label: "Athlon", type: "Sports", year: "2024" },
  { gallery: "renaissance", file: "event-img/ren4.webp", label: "Renaissance", type: "Freshers", year: "2025" },
  { gallery: "halloween", file: "event-img/h3.webp", label: "Halloween", type: "Campus Life", year: "2024" },
  { gallery: "parichay", file: "event-img/pr4.webp", label: "Parichay", type: "Orientation", year: "2025" },
];

const eventGalleries = {
  navrang: { label: "Navrang", type: "Cultural", year: "2026", images: ["event-img/navrang-1.webp", "event-img/navrang-2.webp", "event-img/navrang-3.webp"] },
  freshers: { label: "Freshers", type: "Welcome Week", year: "2026", images: ["event-img/freshers-1.webp", "event-img/freshers-2.webp", "event-img/freshers-3.webp"] },
  annualFest: { label: "After Party", type: "Campus Life", year: "2025", images: ["event-img/af1.webp", "event-img/af2.webp", "event-img/af3.webp"] },
  kalakriti: { label: "Karvaan", type: "Arts & Culture", year: "2025", images: ["event-img/ka1.webp", "event-img/ka2.webp", "event-img/ka3.webp"] },
  athletics: { label: "Athlon", type: "Sports", year: "2024", images: ["event-img/ath1.webp", "event-img/ath2.webp", "event-img/ath3.webp"] },
  renaissance: { label: "Renaissance", type: "Freshers", year: "2025", images: ["gallery/ren1.webp", "gallery/ren3.webp", "event-img/ren4.webp"] },
  halloween: { label: "Halloween", type: "Campus Life", year: "2024", images: ["event-img/h2.webp", "event-img/h3.webp", "event-img/h4.webp"] },
  parichay: { label: "Parichay", type: "Orientation", year: "2025", images: ["event-img/pr2.webp", "event-img/pr4.webp", "event-img/pr5.webp"] },
  scribble: { label: "Scribble Day", type: "Student Life", year: "2025", images: ["event-img/sc3.webp", "event-img/sc4.webp", "event-img/sc5.webp"] },
};

export default function Events() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const openGallery = (galleryKey) => {
    const gallery = eventGalleries[galleryKey];
    if (!gallery) return;
    setActiveGallery(gallery);
    setActiveIndex(0);
  };

  const closeGallery = () => setActiveGallery(null);

  const currentGallery = activeGallery;

  const nextImage = () => {
    if (!currentGallery) return;
    setActiveIndex((index) => (index + 1) % currentGallery.images.length);
  };

  const prevImage = () => {
    if (!currentGallery) return;
    setActiveIndex((index) => (index - 1 + currentGallery.images.length) % currentGallery.images.length);
  };

  useEffect(() => {
    if (!activeGallery) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setActiveGallery(null);
      if (event.key === "ArrowRight") {
        setActiveIndex((index) => (index + 1) % activeGallery.images.length);
      }
      if (event.key === "ArrowLeft") {
        setActiveIndex((index) => (index - 1 + activeGallery.images.length) % activeGallery.images.length);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGallery]);

  return (
    <>
      <section id="events" className="section-light relative overflow-hidden events-section">
      <EngineeringDoodleField theme="light" />
        <EngineeringDoodle variant="events" />
      <EngineeringDoodle variant="events-secondary" />
        <div className="section-doodle section-doodle-events" aria-hidden="true">
          <svg viewBox="0 0 190 130" fill="none">
            <rect x="35" y="34" width="112" height="66" rx="8" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="91" cy="67" r="22" stroke="currentColor" strokeWidth="2.5"/>
            <circle cx="91" cy="67" r="7" stroke="currentColor" strokeWidth="2.5"/>
            <path d="M48 34l10-14h20l8 14M126 47h10M48 91h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M18 111h46M18 106v10M28 108v6M38 108v6M48 108v6M58 108v6M158 21h22M158 17v8M169 17v8M180 17v8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            <path d="M142 105l12-12 12 12-12 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="events-heading">
            <div>
              <p className="section-kicker">From the archive</p>
              <h2 className="section-title mt-5">Moments that <span>stay.</span></h2>
            </div>
            <div className="events-heading-copy">
              <span>JECRC / 2022—26</span>
              <p>Where ideas become action, and moments become memories.<br />The faces, energy, chaos, and stories behind the Student Council.</p>
            </div>
          </div>

          <div className="events-marquee" aria-label="Event archive">
            <div className="events-marquee-track">
              {featured.map((event, index) => (
                <button type="button" key={event.file} className="event-marquee-card event-gallery-trigger" onClick={() => openGallery(event.gallery)} aria-label={`Open ${event.label} gallery`}>
                  <div className="event-marquee-image">
                    <img src={img(event.file)} alt={event.label} loading="lazy" decoding="async" />
                    <span className="event-marquee-index">{String(index + 1).padStart(2, "0")}</span>
                    <span className="event-marquee-open"><FaArrowUpRightFromSquare /></span>
                  </div>
                  <div className="event-marquee-meta">
                    <span>{event.type} · {event.year}</span>
                    <h3>{event.label}</h3>
                  </div>
                </button>
              ))}
            </div>
          </div>

        </div>
        <div className="section-edge section-edge-dark" aria-hidden="true" />
      </section>

      {currentGallery && typeof document !== "undefined" && createPortal((
        <div className="event-lightbox" role="dialog" aria-modal="true" aria-label={`${currentGallery.label} photo gallery`}>
          <button type="button" className="event-lightbox-backdrop" onClick={closeGallery} aria-label="Close gallery" />
          <div className="event-lightbox-panel">
            <div className="event-lightbox-top">
              <div>
                <span>{currentGallery.type} · {currentGallery.year}</span>
                <h2>{currentGallery.label}</h2>
              </div>
              <button type="button" className="event-lightbox-close" onClick={closeGallery} aria-label="Close gallery">
                <FaXmark />
              </button>
            </div>

            <div className="event-lightbox-stage">
              <img src={img(currentGallery.images[activeIndex])} alt={`${currentGallery.label} ${activeIndex + 1}`} />
              <button type="button" className="event-lightbox-nav event-lightbox-prev" onClick={prevImage} aria-label="Previous photo">
                <FaChevronLeft />
              </button>
              <button type="button" className="event-lightbox-nav event-lightbox-next" onClick={nextImage} aria-label="Next photo">
                <FaChevronRight />
              </button>
              <div className="event-lightbox-counter">
                {String(activeIndex + 1).padStart(2, "0")} / {String(currentGallery.images.length).padStart(2, "0")}
              </div>
            </div>

            <div className="event-lightbox-thumbs">
              {currentGallery.images.map((file, index) => (
                <button
                  type="button"
                  key={file}
                  className={`event-lightbox-thumb ${index === activeIndex ? "is-active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                  aria-label={`View photo ${index + 1}`}
                >
                  <img src={img(file)} alt="" />
                </button>
              ))}
            </div>

          </div>
        </div>
      ), document.body)}
    </>
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { img } from "../lib/images";
import { FaArrowRight, FaArrowUpRightFromSquare, FaChevronLeft, FaChevronRight, FaPlay, FaXmark } from "react-icons/fa6";

const featured = [
  { gallery: "navrang", file: "event-img/navrang-2.webp", label: "Navrang", type: "Cultural", year: "2026" },
  { gallery: "freshers", file: "event-img/freshers-3.webp", label: "Freshers", type: "Welcome Week", year: "2026" },
  { gallery: "annualFest", file: "event-img/af3.webp", label: "Annual Fest", type: "Campus Life", year: "2025" },
  { gallery: "kalakriti", file: "event-img/ka2.webp", label: "Kalakriti", type: "Arts & Culture", year: "2025" },
  { gallery: "laFiesta", file: "event-img/la3.webp", label: "La Fiesta", type: "Celebration", year: "2025" },
  { gallery: "athletics", file: "event-img/ath3.webp", label: "Athletics", type: "Sports", year: "2024" },
  { gallery: "renaissance", file: "event-img/ren4.webp", label: "Renaissance", type: "Freshers", year: "2025" },
  { gallery: "halloween", file: "event-img/h3.webp", label: "Halloween", type: "Campus Life", year: "2024" },
  { gallery: "parichay", file: "event-img/pr4.webp", label: "Parichay", type: "Orientation", year: "2025" },
];

const eventGalleries = {
  navrang: { label: "Navrang", type: "Cultural", year: "2026", images: ["event-img/navrang-1.webp", "event-img/navrang-2.webp", "event-img/navrang-3.webp"] },
  freshers: { label: "Freshers", type: "Welcome Week", year: "2026", images: ["event-img/freshers-1.webp", "event-img/freshers-2.webp", "event-img/freshers-3.webp"] },
  annualFest: { label: "Annual Fest", type: "Campus Life", year: "2025", images: ["event-img/af1.webp", "event-img/af2.webp", "event-img/af3.webp", "event-img/af4.webp", "event-img/af5.webp"] },
  kalakriti: { label: "Kalakriti", type: "Arts & Culture", year: "2025", images: ["event-img/ka1.webp", "event-img/ka2.webp", "event-img/ka3.webp"] },
  laFiesta: { label: "La Fiesta", type: "Celebration", year: "2025", images: ["event-img/la1.webp", "event-img/la2.webp", "event-img/la3.webp"] },
  athletics: { label: "Athletics", type: "Sports", year: "2024", images: ["event-img/ath1.webp", "event-img/ath2.webp", "event-img/ath3.webp"] },
  renaissance: { label: "Renaissance", type: "Freshers", year: "2025", images: ["gallery/ren1.webp", "gallery/ren3.webp", "event-img/ren4.webp"] },
  halloween: { label: "Halloween", type: "Campus Life", year: "2024", images: ["event-img/h2.webp", "event-img/h3.webp", "event-img/h4.webp"] },
  parichay: { label: "Parichay", type: "Orientation", year: "2025", images: ["event-img/pr2.webp", "event-img/pr4.webp", "event-img/pr5.webp"] },
  scribble: { label: "Scribble Day", type: "Student Life", year: "2025", images: ["event-img/sc3.webp", "event-img/sc4.webp", "event-img/sc5.webp"] },
};

export default function Events() {
  const [activeGallery, setActiveGallery] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const hero = featured[0];
  const sideEvents = featured.slice(1, 3);
  const stripEvents = featured.slice(3);

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
      if (event.key === "Escape") closeGallery();
      if (event.key === "ArrowRight") nextImage();
      if (event.key === "ArrowLeft") prevImage();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [activeGallery, currentGallery]);

  return (
    <>
      <section id="events" className="section-light relative overflow-hidden events-section">
        <div className="section-number">03</div>
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="events-heading">
            <div>
              <p className="section-kicker">From the archive</p>
              <h2 className="section-title mt-5">Moments that <span>stay.</span></h2>
            </div>
            <div className="events-heading-copy">
              <span>JECRC / 2022—26</span>
              <p>Big stages. Small moments. Everything in between — captured by the people who made it happen.</p>
            </div>
          </div>

          <div className="events-featured-grid">
            <button type="button" className="event-feature event-feature-main event-gallery-trigger" onClick={() => openGallery(hero.gallery)} aria-label={`Open ${hero.label} gallery`}>
              <img src={img(hero.file)} alt={hero.label} />
              <div className="event-image-shade" />
              <div className="event-feature-top">
                <span>Featured moment · Click to explore</span>
                <span>{hero.year}</span>
              </div>
              <div className="event-feature-bottom">
                <div>
                  <span>{hero.type}</span>
                  <h3>{hero.label}</h3>
                </div>
                <span className="event-round-action"><FaArrowUpRightFromSquare /></span>
              </div>
            </button>

            <div className="event-side-stack">
              {sideEvents.map((event, index) => (
                <button type="button" key={event.file} className="event-side-card event-gallery-trigger" onClick={() => openGallery(event.gallery)} aria-label={`Open ${event.label} gallery`}>
                  <img src={img(event.file)} alt={event.label} loading="lazy" />
                  <div className="event-side-shade" />
                  <div className="event-side-no">0{index + 2}</div>
                  <div className="event-side-copy">
                    <span>{event.type} · {event.year}</span>
                    <h3>{event.label}</h3>
                  </div>
                  <span className="event-side-arrow"><FaArrowUpRightFromSquare /></span>
                </button>
              ))}
            </div>
          </div>

          <div className="events-rail-label">
            <span>More from the archive</span>
            <span><i /> Click any event to see all its moments</span>
          </div>

          <div className="events-horizontal-rail">
            {stripEvents.map((event, index) => (
              <button type="button" key={event.file} className="event-rail-card event-gallery-trigger" onClick={() => openGallery(event.gallery)} aria-label={`Open ${event.label} gallery`}>
                <div className="event-rail-image">
                  <img src={img(event.file)} alt={event.label} loading="lazy" />
                  <span className="event-rail-play"><FaPlay /></span>
                </div>
                <div className="event-rail-meta">
                  <span>0{index + 4} / {event.year}</span>
                  <h3>{event.label}</h3>
                  <p>{event.type} · View gallery</p>
                </div>
              </button>
            ))}
          </div>

          <div className="events-bottom-cta">
            <div>
              <span>YOUR EVENT COULD BE NEXT</span>
              <strong>Make something people remember.</strong>
            </div>
            <a href="/#contact" className="text-link">Bring the next moment to life <FaArrowRight /></a>
          </div>
        </div>
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

            <div className="event-lightbox-hint">
              <span>← → Navigate</span>
              <span>ESC Close</span>
              <span>{currentGallery.images.length} moments captured</span>
            </div>
          </div>
        </div>
      ), document.body)}
    </>
  );
}

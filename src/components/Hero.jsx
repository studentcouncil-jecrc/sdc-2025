import { useEffect, useRef, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {
  const sectionRef = useRef(null);
  const videoRef = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsActive(entry.isIntersecting);

        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="home" className={`hero-section ${isActive ? "is-active" : ""}`}>
      <div className="hero-video" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-video-media"
          src="https://square-band-987d.studentcouncil-4ec.workers.dev/Media1.webm"
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
        <div className="hero-video-overlay" />
      </div>
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-logo-sketch" aria-hidden="true">
        <img src="https://square-band-987d.studentcouncil-4ec.workers.dev/logos/logoss-02.png" alt="" />
      </div>

      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="min-h-[760px]  flex items-end pb-14 lg:pb-20 pt-32">
          <div className="w-full grid lg:grid-cols-[1.1fr_.9fr] gap-10 lg:gap-16 items-end">
            <div>
              <h1 className="hero-title hero-reveal hero-reveal-2">
                <span>STUDENTS</span>
                <span className="outline-text">WHO</span>
                <span>MAKE IT</span>
                <span className="accent-word">HAPPEN</span>
              </h1>

              <div className="mt-8 flex flex-col sm:flex-row gap-5 sm:items-center hero-reveal hero-reveal-3">
                <p className="max-w-md text-sm sm:text-base leading-7 text-white/60">
                  A student-led collective building culture, creativity, leadership and unforgettable campus experiences at JECRC.
                </p>
                <a href="/#clubs" className="hero-arrow-link">
                  <span>Explore the council</span><FaArrowRight />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="hero-bottom-line">
        <div className="marquee-track">
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
          <span>CREATE</span><b>✦</b><span>LEAD</span><b>✦</b><span>PERFORM</span><b>✦</b><span>CONNECT</span><b>✦</b>
        </div>
      </div>
    </section>
  );
}

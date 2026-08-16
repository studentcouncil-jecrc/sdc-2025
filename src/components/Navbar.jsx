import { useEffect, useState } from "react";
import { nav } from "../data/content";
import { FaArrowRight, FaBars, FaTimes } from "react-icons/fa";
import { img } from "../lib/images";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <div className="nav-shell">
          <a href="/#home" className="flex items-center gap-3 min-w-0" onClick={() => setOpen(false)}>
            <img src={img("logos/logoss-02.png")} alt="JECRC Student Council" className="h-11 w-11 object-contain" />
            <div className="hidden sm:block leading-none">
              <span className="block font-display text-sm tracking-tight">JECRC</span>
              <span className="block font-mono text-[9px] uppercase tracking-[0.22em] text-white/55 mt-1">Student Council</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-7 font-mono text-[10px] uppercase tracking-[0.18em] text-white/65">
            {nav.map((item) => (
              <a key={item.label} href={item.href} className="nav-link">
                {item.label}
              </a>
            ))}
          </nav>

          <a href="/#contact" className="hidden md:flex nav-cta">
            <span>Connect</span><FaArrowRight />
          </a>

          <button
            aria-label={open ? "Close menu" : "Open menu"}
            className="lg:hidden menu-button"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {open && (
          <nav className="mobile-nav lg:hidden">
            {nav.map((item, i) => (
              <a key={item.label} href={item.href} onClick={() => setOpen(false)}>
                <span>0{i + 1}</span>{item.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}

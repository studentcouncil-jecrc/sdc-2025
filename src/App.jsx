import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import ClubPage from "./pages/ClubPage";
import PageTransition from "./components/PageTransition";

function CursorDot() {
  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;
    if (!finePointer) return;
    const onMove = (event) => {
      document.documentElement.style.setProperty("--cursor-x", `${event.clientX}px`);
      document.documentElement.style.setProperty("--cursor-y", `${event.clientY}px`);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);
  return <div className="cursor-dot" aria-hidden="true" />;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <PageTransition>
      <Routes location={location}>
        <Route path="/" element={<Home />} />
        <Route path="/:slug" element={<ClubPage />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorDot />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

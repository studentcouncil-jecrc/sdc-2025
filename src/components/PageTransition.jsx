import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { img } from "../lib/images";

export default function PageTransition({ children }) {
  const location = useLocation();
  const [introVisible, setIntroVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => setIntroVisible(false), 5000);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div key={location.pathname} className="page-transition">
      <div className="page-transition-wipe" aria-hidden="true" />
      {introVisible && (
        <div className="site-intro" role="status" aria-label="JECRC Student Council">
          <div className="site-intro-mark">
            <img src={img("logos/logoss-02.png")} alt="" />
          </div>
          <h1 className="site-intro-title">
            <span>Connect.</span>
            <span>Create.</span>
            <span>Inspire.</span>
          </h1>
          <div className="site-intro-line" />
        </div>
      )}
      {children}
    </div>
  );
}

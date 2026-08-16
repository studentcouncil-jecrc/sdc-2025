import { useLocation } from "react-router-dom";

export default function PageTransition({ children }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="page-transition">
      <div className="page-transition-wipe" aria-hidden="true" />
      {children}
    </div>
  );
}

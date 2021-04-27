import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { parhname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [parhname]);

  return null;
}

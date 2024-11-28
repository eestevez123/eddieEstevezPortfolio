import { useEffect } from "react";
import { useLocation } from "react-router";

/**
 * Component that scrolls the window to the top when the route changes.
 * This component listens for route changes using the history object provided by withRouter,
 * and scrolls the window to the top (0, 0) position upon route change.
 *
 * @component
 * @param {Object} props - The props object containing the history object from withRouter.
 * @param {Object} props.history - The history object provided by withRouter for route history management.
 * @returns {null} Returns null, as this component doesn't render any visible content.
 */
function ScrollToTop({ history }) {
  const location = useLocation();

  useEffect(() => {
    // Scroll to the top whenever the location changes
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

export default ScrollToTop;

import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';



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

  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });

    // Cleanup function to stop listening to route changes when component unmounts
    return () => {
      unlisten();
    }
    // Re-run effect when the history object changes (e.g., route changes)
  }, [history]); 

  return (null);
  }

export default withRouter(ScrollToTop);
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.css";

import "./index.css";

/**
 * Root rendering function to render the main application component.
 * This function initializes the ReactDOM root and renders the App component.
 * @param {HTMLElement} rootElement - The root element where the application will be rendered.
 * @returns {void}
 */
const renderApp = (rootElement) => {
  const root = ReactDOM.createRoot(rootElement);

  root.render(
    <React.Fragment>
      <App />
    </React.Fragment>,
  );
};

// Render the application into the root element with ID "root"
renderApp(document.getElementById("root"));

// This kind of application does not require a registered service worker
serviceWorker.unregister();

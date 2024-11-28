import React, { useState, useEffect } from "react";

import { useParams, Navigate } from "react-router";

// Template Pages
import WebsiteTemplate from "./WebsiteTemplate";
import AppTemplate from "./AppTemplate";
import VideoTemplate from "./VideoTemplate";
import SoundTemplate from "./SoundTemplate";

// Custom Pages
import PodcastPage from "./custom/PodcastPage";
import VidGallery from "./custom/VidGallery";

/**
 * Component representing the template for an article in the video section.
 *
 * @component
 * @returns {JSX.Element} JSX element representing the template for an article in the video section.
 */
function Template() {
  const [doneLoading, setDoneLoading] = useState(false);
  const [cardURLs, setCardURLs] = useState({});

  useEffect(() => {
    async function loadData() {
      import("../data/cardURLs.json").then((data) => {
        setCardURLs(data.default);
        setDoneLoading(true);
      });
    }
    loadData();
  }, []);

  let { portfolioURL } = useParams();

  if (doneLoading) {
    if (!cardURLs.validWorkURLs.includes(portfolioURL)) {
      return <Navigate to="/404" replace />;
    }
    if (cardURLs.websiteURLs.includes(portfolioURL)) {
      // Websites
      return (
          <WebsiteTemplate key={portfolioURL} portfolioURL={portfolioURL} />
      );
    } else if (cardURLs.appURLs.includes(portfolioURL)) {
      return (
          <AppTemplate key={portfolioURL} portfolioURL={portfolioURL} />
      );
    } else if (cardURLs.videoURLs.includes(portfolioURL)) {
      if (cardURLs.vidGalleryURLs.includes(portfolioURL))
        return (
            <VidGallery key={portfolioURL} portfolioURL={portfolioURL} />
        );
      else {
        return (
            <VideoTemplate key={portfolioURL} portfolioURL={portfolioURL} />
        );
      }
    } else if (cardURLs.soundURLs.includes(portfolioURL)) {
      if (portfolioURL === "podcast-about-relationships")
        return (
            <PodcastPage key={portfolioURL} portfolioURL={portfolioURL} />
        );
      else {
        return (
            <SoundTemplate key={portfolioURL} portfolioURL={portfolioURL} />
        );
      }
    } else {
      return <Navigate to="/404" replace />;
    }
  } else {
    return (
      <div className="d-flex justify-content-center">
        <div className="row mt-5">
          <div className="col">
            <div
              className="spinner-grow text-primary biggerLoadingSpinner"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Template;

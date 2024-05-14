import React, { useState, useEffect } from "react";
import { useSpring, animated, config } from "react-spring";
import Card from "./Card";

import "./Card.css";

const cardCSS = "col-lg-4 col-md-6 col-12 my-4";
const emptyCards = Array.from({ length: 12 }, () => ({}));

/**
 * Functional component for rendering a section of cards based on the selected section type.
 * This component fetches card data asynchronously and dynamically renders cards based on the specified section.
 *
 * @component
 * @param {Object} props - The props object containing data and configuration for the card section.
 * @param {string} props.section - The section type for which cards should be displayed (0: website, 1: app, 2: video, 3: sound, 4: image).
 * @param {string} props.path - The base path used for routing.
 * @returns {JSX.Element} JSX element representing a section of cards.
 */
function Cards(props) {
  const [isLoadingDone, setIsLoadingDone] = useState(false);
  const [currentDeck, setCurrentDeck] = useState(emptyCards);

  const [websiteCards, setWebsiteCards] = useState(emptyCards);
  const [appCards, setAppCards] = useState(emptyCards);
  const [videoCards, setVideoCards] = useState(emptyCards);
  const [soundCards, setSoundCards] = useState(emptyCards);
  const [imageCards, setImageCards] = useState(emptyCards);

  // This loads in the card data for all sections
  useEffect(() => {
    Promise.all([
      import("../data/cards/websiteCards.json"),
      import("../data/cards/appCards.json"),
      import("../data/cards/videoCards.json"),
      import("../data/cards/soundCards.json"),
      import("../data/cards/imageCards.json"),
    ]).then(([websiteData, appData, videoData, soundData, imageData]) => {
      setWebsiteCards(Object.values(websiteData.default));
      setAppCards(Object.values(appData.default));
      setVideoCards(Object.values(videoData.default));
      setSoundCards(Object.values(soundData.default));
      setImageCards(Object.values(imageData.default));
      setIsLoadingDone(true);
    });
  }, []);

  const springProps = useSpring({
    to: { opacity: 1, y: 0 },
    from: { opacity: 0, y: 50 },
    config: config.default,
    reset: true,
  });

  // This controls which set of cards to show depending on the section
  useEffect(() => {
    if (isLoadingDone) {
      switch (props.section) {
        case 0:
          setCurrentDeck(websiteCards);
          break;
        case 1:
          setCurrentDeck(appCards);
          break;
        case 2:
          setCurrentDeck(videoCards);
          break;
        case 3:
          setCurrentDeck(soundCards);
          break;
        case 4:
          setCurrentDeck(imageCards);
          break;
        default:
          setCurrentDeck(emptyCards);
          break;
      }
    }
  }, [
    props.section,
    appCards,
    imageCards,
    isLoadingDone,
    soundCards,
    videoCards,
    websiteCards,
  ]);

  return (
    <>
      <div className="container-fluid">
        <animated.div style={springProps}>
          <div className={`row cardRow justify-content-center`}>
            {currentDeck.map((deck, idx) => (
              <div className={cardCSS} key={`div-${idx}-${deck.title}`}>
                <Card
                  key={`Card-${idx}-${deck.title}`}
                  src={deck.src}
                  alt={deck.alt}
                  title={deck.title}
                  desc={deck.desc}
                  path={props.path}
                  href={deck.href}
                  section={currentDeck}
                  cardType={props.section}
                />
              </div>
            ))}
          </div>
        </animated.div>
      </div>
    </>
  );
}

export default Cards;

import React, {useState, useEffect} from "react";
import {useSpring, animated , config} from 'react-spring';
import Card from "./Card";

import "./Card.css";

const cardCSS ="col-lg-4 col-md-6 col-12 my-4";

const emptyCards = Array.from({ length: 12 }, () => ({}));

function Cards(props) {

    
    const [isLoadingDone, setIsLoadingDone] = useState(false);
    const [currentDeck, setCurrentDeck] = useState(emptyCards);

    const [websiteCards, setWebsiteCards] = useState({});
    const [appCards, setAppCards] = useState({});
    const [videoCards, setVideoCards] = useState({});
    const [soundCards, setSoundCards] = useState({});
    const [imageCards, setImageCards] = useState({});

    useEffect(() => {
        import('../data/cards/websiteCards.json').then(data => {
            debugger;
            setWebsiteCards(Object.values(data.default));
        });
        import('../data/cards/appCards.json').then(data => {
            setAppCards(Object.values(data.default));
        });
        import('../data/cards/videoCards.json').then(data => {
            setVideoCards(Object.values(data.default));
        });
        import('../data/cards/soundCards.json').then(data => {
            setSoundCards(Object.values(data.default));
        });
        import('../data/cards/imageCards.json').then(data => {
            setImageCards(Object.values(data.default));
        });

        setIsLoadingDone(true)
    }, [])


    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:50},
        config: config.default,
        reset: true
    })

    useEffect( () => {
        if (isLoadingDone) {
            switch(props.section) {
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
                    break
                }
        }
    },[props.section, appCards, imageCards, isLoadingDone, soundCards, videoCards, websiteCards])

        return(
            <>
                <div className="container-fluid">
                <animated.div style={springProps} >
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
        )
}

export default Cards
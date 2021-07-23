import React, {useState, useEffect} from "react";
import { useSpring, animated , config} from 'react-spring'
import OnImagesLoaded from 'react-on-images-loaded';
import Card from "./Card";

import {websiteCards} from "../portfolioFiles/cards/website"
import {appCards} from "../portfolioFiles/cards/applications"
import {videoCards} from "../portfolioFiles/cards/videos"
import {soundCards} from "../portfolioFiles/cards/sounds"
import {imageCards} from "../portfolioFiles/cards/images"

import "./Card.css";
const cardCSS ="col-lg-4 col-md-6 col-12 my-4"

const noCards = []

function Cards(props) {

    const [currentDeck, setCurrentDeck] = useState(websiteCards);
    const [isLoading, setIsLoading] = useState(true);

    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:50},
        delay: 500,
        config: config.default,
        reset: isLoading

    })

    useEffect( () => {
        setIsLoading(true)
        switch(props.section) {
            case 0:
                setCurrentDeck(websiteCards)
              break;
            case 1:
                setCurrentDeck(appCards)
                break;
            case 2:
                setCurrentDeck(videoCards)
                break;
            case 3:
                setCurrentDeck(soundCards)
                break;
            case 4:
                setCurrentDeck(imageCards)
                break;
            default:
                setCurrentDeck(noCards)
                break
          }
          setTimeout(() => {
            setIsLoading(false)
          }, 500)  // 500
    }, [props.section])

        return(
            <>
            {(isLoading)?(
                <>
                <div className="container">
                    <div className="row justify-content-center text-center my-5">
                         <div className="col">
                            <div className={`cardLoader spinner-grow text-primary m-5`} role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>
                    </div>
                </div>
                </>
            ):(
                <></>
            )}
            <div className="container-fluid">
                <div className={`row cardRow justify-content-center ${(isLoading)?(`notVisible`):(``)}`}>
                    {currentDeck.map((deck, idx) => (
                        <div className={cardCSS} key={idx}>
                            <animated.div style={springProps} >
                                <Card
                                    id={`card-${idx}`}
                                    src={deck.src}
                                    alt={deck.alt}
                                    title={deck.title}
                                    desc={deck.desc}
                                    path={props.path}
                                    href={deck.href}
                                />
                            </animated.div>
                        </div>
                    ))}
                </div>
            </div>
            </>
        )


}

export default Cards
import React, {useState, useEffect} from "react";
import Card from "./PortfolioCard";

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

    useEffect( () =>{
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
    }, [props.section])

        return(
            <div className="container-fluid">

                <div className="row cardRow justify-content-center">

                    {currentDeck.map((deck, idx) => (
                        <div className={cardCSS} key={idx}>
                            <Card
                                id={`card-${idx}`}
                                src={deck.src}
                                alt={deck.alt}
                                title={deck.title}
                                desc={deck.desc}
                                href={deck.href}
                            />
                        </div>
                    ))}

                </div>
            </div>
        )
}

export default Cards
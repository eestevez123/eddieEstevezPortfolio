import React, {useState, useEffect} from "react";
import {useSpring, animated , config} from 'react-spring';
import Card from "./Card";
import axios from 'axios';

import "./Card.css";
const cardCSS ="col-lg-4 col-md-6 col-12 my-4";

const noCards = [];

const api = axios.create({
    baseURL: `https://eddie-estevez-portfolio-api.herokuapp.com/`
  })

function Cards(props) {

    const [isAxiosDone, setIsAxiosDone] = useState(false);
    const [currentDeck, setCurrentDeck] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const [websiteCards, setwebsiteCards] = useState({});
    const [appCards, setappCards] = useState({});
    const [videoCards, setvideoCards] = useState({});
    const [soundCards, setsoundCards] = useState({});
    const [imageCards, setimageCards] = useState({});

    useEffect(() => {
        async function loadData() {
            const websiteCardsData = await api.get("/websiteCards")
            const appCardsData = await api.get("/appCards")
            const videoCardsData = await api.get("/videoCards")
            const soundCardsData = await api.get("/soundCards")
            const imageCardsData = await api.get("/imageCards")


            setwebsiteCards(Object.values(websiteCardsData.data))
            setappCards(Object.values(appCardsData.data))
            setvideoCards(Object.values(videoCardsData.data))
            setsoundCards(Object.values(soundCardsData.data))
            setimageCards(Object.values(imageCardsData.data))
            

            setCurrentDeck(Object.values(websiteCardsData.data));
            setIsAxiosDone(true)
        }
        loadData()
    }, [])


    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:50},
        config: config.default,
        reset: true
    })

    useEffect( () => {
        setIsLoading(true);
        if(isAxiosDone) {
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
                    setCurrentDeck(noCards);
                    break
              }
        }
        setIsLoading(false)
    }, [appCards, imageCards, isAxiosDone, props.section, soundCards, videoCards, websiteCards])

        return(
            <>
            {(!isAxiosDone)?(<>
                    <div className="d-flex justify-content-center">
                    <div className="row mt-5">
                        <div className="col">
                            <div className="spinner-grow text-primary biggerLoadingSpinner" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>
                        </div>

                    </div>
                    </div>
                </>):(<>
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
                <animated.div style={springProps} >
                    <div className={`row cardRow justify-content-center ${(isLoading)?(`hidden`):(``)}`}>
                        {currentDeck.map((deck) => (
                            <div className={cardCSS} key={deck.title}>
                                    <Card
                                        src={deck.src}
                                        alt={deck.alt}
                                        title={deck.title}
                                        desc={deck.desc}
                                        path={props.path}
                                        href={deck.href}
                                        section={currentDeck}
                                    />
                            </div>
                        ))}
                    </div>
                </animated.div>
                </div>
                </>) }
                </>
        )
}

export default Cards
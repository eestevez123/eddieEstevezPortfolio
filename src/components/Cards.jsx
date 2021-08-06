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

    const emptyCards = [{},{},{},{},{},{},{},{},{},{},{},{}];
    const [isAxiosDone, setIsAxiosDone] = useState(false);
    const [currentDeck, setCurrentDeck] = useState(emptyCards);

    const [websiteCards, setwebsiteCards] = useState({});
    const [appCards, setappCards] = useState({});
    const [videoCards, setvideoCards] = useState({});
    const [soundCards, setsoundCards] = useState({});
    const [imageCards, setimageCards] = useState({});

    useEffect(() => {
        let source = axios.CancelToken.source()

        async function loadData() {
            try {
                const websiteCardsData = await api.get("/websiteCards", {cancelToken: source.token})
                const appCardsData = await api.get("/appCards", {cancelToken: source.token})
                const videoCardsData = await api.get("/videoCards", {cancelToken: source.token})
                const soundCardsData = await api.get("/soundCards", {cancelToken: source.token})
                const imageCardsData = await api.get("/imageCards", {cancelToken: source.token})
    
    
                setwebsiteCards(Object.values(websiteCardsData.data))
                setappCards(Object.values(appCardsData.data))
                setvideoCards(Object.values(videoCardsData.data))
                setsoundCards(Object.values(soundCardsData.data))
                setimageCards(Object.values(imageCardsData.data))
                
    
                setCurrentDeck(Object.values(websiteCardsData.data));
                setIsAxiosDone(true)
            } catch(err) {
                if(!axios.isCancel(err)) {
                    console.log(err)
                    alert("Let Eddie know that his API could not fetch the requested data")
                }
                if(axios.isCancel(err)) console.log("axios async call cancelled")
            }

        }
        loadData()
        return () => {
            source.cancel()
        }
    }, [])


    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:50},
        config: config.default,
        reset: true
    })

    useEffect( () => {
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
                    setCurrentDeck(emptyCards);
                    break
              }
        }
    },[appCards, emptyCards, imageCards, isAxiosDone, props.section, soundCards, videoCards, websiteCards])

        return(
            <>
                <div className="container-fluid">
                <animated.div style={springProps} >
                    <div className={`row cardRow justify-content-center`}>
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
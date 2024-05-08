import React, {useState, useEffect} from "react";
import {useSpring, animated , config} from 'react-spring'
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'

/**
 * Functional component representing a card used in the "My Work" section of the website.
 * This component renders a styled card with dynamic content loading and animation.
 *
 * @component
 * @param {Object} props - The props object containing data for configuring the card.
 * @param {string} props.cardType - The type of the card (0: website, 1: app, 2: video, 3: sound, 4: image).
 * @param {string} props.path - The base path used for routing.
 * @param {string} props.src - The source URL for the card image.
 * @param {string} props.alt - The alternative text for the card image.
 * @param {string} props.title - The title text for the card.
 * @param {string} props.desc - The description text for the card.
 * @param {string} props.href - The target URL for the "More Info" button.
 * @returns {React.JSX.Element} JSX element representing the styled portfolio card.
 */
function PortfolioCard(props) {

    const [isLoading, setIsLoading] = useState(true);
    const [cardClass, setCardClass] = useState("websiteCards");

    useEffect( () => {
        switch(props.cardType) {
            case 0:
                setCardClass('websiteCards');
              break;
            case 1:
                setCardClass('appCards');
                break;
            case 2:
                setCardClass('videoCards');
                break;
            case 3:
                setCardClass('soundCards');
                break;
            case 4:
                setCardClass('imageCards');
                break;
            default:
                setCardClass("");
                break
          }
    }, [props.cardType])

    // Animation properties to make cards fade in when loaded in
    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:0},
        config: config.default,
        reset: true
    })

    return(
        <>
        <animated.div style={springProps} className={`${cardClass}`}>
            <div className={`card text-center`}>
                <div className="overflow">
                    {isLoading?(<><Skeleton height={200}/></>):(<></>)}
                    <img onLoad={()=>{
                        setIsLoading(false)
                    }} src={props.src} alt={props.alt} className={`card-img-top ${isLoading?"hidden":""}`}/>
                </div>
                <div className="card-body text-dark">
                    <h4 className="card-title">{props.title || <Skeleton/>}</h4>
                    <p className="card-text text-secondary">
                        {props.desc || <Skeleton count={4}/>}
                    </p>

                        {(props.href !== undefined)?(<>
                        <Link to={`${props.path}/${props.href}`}>
                            <button type="button" className="btn btn-outline-primary cardButton">More Info</button>
                        </Link>
                        </>):(<><Skeleton width={100} height={25} className="cardButton"/></>)}
                </div>
            </div>
        </animated.div>
        </>
    );
}

export default PortfolioCard
import React, {useState,} from "react";
import {useSpring, animated , config} from 'react-spring'
import {Link} from "react-router-dom";
import Skeleton from 'react-loading-skeleton';


function PortfolioCard(props) {

    const [isLoading, setIsLoading] = useState(true);


    const springProps = useSpring({
        to: {opacity: 1, y:0},
        from: {opacity: 0, y:0},
        config: config.default,
        reset: true
    })

    let path = props.path

    return(
        <>
        <animated.div style={springProps} >
        <div className="card text-center">
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
            <Link to={`${path}/${props.href}`}>
                <button type="button" className="btn btn-outline-primary">More Info</button>
            </Link>
        </div>
        </div>
        </animated.div>
        </>
    );
}

export default PortfolioCard
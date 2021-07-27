import React, {useRef, useState} from "react";
import { useSpring, animated as a } from "@react-spring/web";
import Skeleton from 'react-loading-skeleton';

const calc = (x, y, rect, scale) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    scale
  ];
  
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ContactItem(props) {
    const refRect = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
    const [isLoading, setIsLoading] = useState(true)
  
    const propsSpring = useSpring({ xys });



    return(
        <>
        <div className={props.colClass}>
            <a href={props.href} className="text-decoration-none text-white">
                <a.div className="text-center animatedDiv bg-myBlue rounded py-5" ref={refRect} 
                style={{ transform: propsSpring.xys.to(trans) }}
                onMouseLeave={() => set([0, 0, 1])}
                onMouseMove={(e) => {
                    const rect = refRect.current.getBoundingClientRect();
                    set(calc(e.clientX, e.clientY, rect, 1.15));
                }}
                onClick={(e) => {
                    set([0, 0, 0.8]);
                }}
                >
                    <div className="icon d-flex align-items-center justify-content-center">
                        {isLoading?(<><Skeleton height={60} className="contactItemImg"/></>):(<></>)}
                        <img src={props.imgAddr} className={`fa fa-map-marker contactItemImg ${isLoading?("hidden"):("")}`} alt={props.imgAlt} onLoad={()=>{setIsLoading(false)}}/>
                    </div>
                    <p className="text-break"><span>{props.txtTitle}</span>{props.txt}</p>
            </a.div>
            </a>
        </div>
        </>
    );
}

export default ContactItem
import React, {useRef, useState} from "react";
import { useSpring, animated as a } from "@react-spring/web";

const calc = (x, y, rect) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    1.1
  ];
  
const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

function ContactItem(props) {
    const ref = useRef(null);
    const [xys, set] = useState([0, 0, 1]);
  
    const propsSpring = useSpring({ xys });



    return(
        <>
        <div className={props.colClass}>
            <a.div className="text-center animatedDiv bg-myBlue py-5" ref={ref} 
            style={{ transform: propsSpring.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
                const rect = ref.current.getBoundingClientRect();
                set(calc(e.clientX, e.clientY, rect));
              }}
            >
                <a href={props.href} className="text-decoration-none text-white">
                    <div className="icon d-flex align-items-center justify-content-center">
                        <img src={props.imgAddr} className="fa fa-map-marker contactItemImg" alt={props.imgAlt}/>
                    </div>
                    <p className="text-break"><span>{props.txtTitle}</span>{props.txt}</p>
                </a>
            </a.div>
        </div>
        </>
    );
}

export default ContactItem
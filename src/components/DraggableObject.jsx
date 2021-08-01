import React from 'react';
import { motion } from "framer-motion"

function DraggableObject(props) {

    if (props.isImage) {
        return(
            <motion.img
            src={props.src}
            alt={props.alt}
            className={props.innerClassName}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
            dragElastic={0.75}
            whileTap={{ cursor: "grabbing" }}
            />
        );
    } else {
        return(
            <motion.div
            className={props.innerClassName}
            drag
            dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
            dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
            dragElastic={0.75}
            whileTap={{ cursor: "grabbing" }}
            />
            
        );
    }

}

export default DraggableObject;
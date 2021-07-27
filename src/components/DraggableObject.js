import React from 'react';
import { motion } from "framer-motion"

function DraggableObject(props) {

    if (props.isImage) {
        return(
            <motion.img
            className="img-fluid"
            id = {props.objID}
            key={props.imageObj}
            src={props.imageObj}
            style={{
                width: props.width,
                height: props.height,
                cursor: "grab",
                borderRadius: 0
            }}
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
            className="img-fluid"
            id = {props.objID}
            style={{
                width: props.width,
                height: props.height,
                borderRadius: props.borderRadius,
                backgroundColor: props.backgroundColor,
                cursor: "grab"
            }}
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
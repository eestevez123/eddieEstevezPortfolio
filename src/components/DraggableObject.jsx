import React from "react";
import { motion } from "framer-motion";

/**
 * Functional component representing a draggable object using framer-motion.
 * This component renders either an image or a div that can be dragged within specified constraints.
 *
 * @component
 * @param {Object} props - The props object containing data for configuring the draggable object.
 * @param {string} props.innerClassName - The CSS class name for styling the inner content of the draggable object.
 * @param {boolean} props.isImage - Indicates whether the draggable object is an image (true) or a div (false).
 * @param {string} props.src - The source URL for the image (required if isImage is true).
 * @param {string} props.alt - The alternative text for the image (required if isImage is true).
 * @returns {JSX.Element} JSX element representing the draggable object.
 */
function DraggableObject(props) {
  const draggableObjectClass = `${props.innerClassName} user-select-none`;

  if (props.isImage) {
    return (
      <motion.img
        src={props.src}
        alt={props.alt}
        className={draggableObjectClass}
        drag
        dragConstraints={{ top: 0, right: 0, bottom: 0, left: 0 }}
        dragTransition={{ bounceStiffness: 800, bounceDamping: 25 }}
        dragElastic={0.75}
        whileTap={{ cursor: "grabbing" }}
      />
    );
  } else {
    return (
      <motion.div
        className={draggableObjectClass}
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

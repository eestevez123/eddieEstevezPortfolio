import React, { useRef, useState } from "react";
import { useSpring, animated as a } from "@react-spring/web";
import Skeleton from "react-loading-skeleton";

import "react-loading-skeleton/dist/skeleton.css";

/**
 * Functional component representing a contact item with interactive effects.
 * This component displays a contact item with animation and mouse interaction effects.
 *
 * @component
 * @param {Object} props - The props object containing data for configuring the contact item.
 * @param {string} props.colClass - The CSS class for the column layout of the contact item.
 * @param {string} props.href - The URL for the contact item link.
 * @param {string} props.imgAddr - The source URL for the contact item image.
 * @param {string} props.imgAlt - The alternative text for the contact item image.
 * @param {string} props.txtTitle - The title text for the contact item.
 * @param {string} props.txt - The description text for the contact item.
 * @returns {JSX.Element} JSX element representing the styled contact item.
 */
function ContactItem(props) {
  /**
   * Calculates transform values based on mouse position relative to the element.
   *
   * @param {number} x - The horizontal position of the mouse.
   * @param {number} y - The vertical position of the mouse.
   * @param {DOMRect} rect - The bounding rectangle of the element.
   * @param {number} scale - The scale factor for the transformation.
   * @returns {Array} Array containing transformation values for CSS.
   */
  const calc = (x, y, rect, scale) => [
    -(y - rect.top - rect.height / 2) / 5,
    (x - rect.left - rect.width / 2) / 5,
    scale,
  ];

  /**
   * Generates a CSS transform string based on given parameters.
   *
   * @param {number} x - The horizontal position value.
   * @param {number} y - The vertical position value.
   * @param {number} s - The scale factor value.
   * @returns {string} CSS transform string.
   */
  const trans = (x, y, s) =>
    `perspective(600px) rotateX(${x / 5}deg) rotateY(${y / 5}deg) scale(${s})`;

  const refRect = useRef(null);
  const [xys, set] = useState([0, 0, 1]);
  const [isLoading, setIsLoading] = useState(true);

  const propsSpring = useSpring({ xys });

  return (
    <>
      <div className={props.colClass}>
        <a href={props.href} className="text-decoration-none text-white">
          <a.div
            className="text-center animatedDiv bg-myBlue rounded py-5"
            ref={refRect}
            style={{ transform: propsSpring.xys.to(trans) }}
            onMouseLeave={() => set([0, 0, 1])}
            onMouseMove={(e) => {
              const rect = refRect.current.getBoundingClientRect();
              set(calc(e.clientX, e.clientY, rect, 1.05));
            }}
            onClick={(e) => {
              set([0, 0, 0.9]);
            }}
          >
            <div className="icon d-flex align-items-center justify-content-center">
              {isLoading ? (
                <>
                  <Skeleton height={60} className="contactItemImg" />
                </>
              ) : (
                <></>
              )}
              <img
                src={props.imgAddr}
                className={`fa fa-map-marker contactItemImg ${isLoading ? "hidden" : ""}`}
                alt={props.imgAlt}
                onLoad={() => {
                  setIsLoading(false);
                }}
              />
            </div>
            <p className="text-break">
              <span>{props.txtTitle}</span>
              {props.txt}
            </p>
          </a.div>
        </a>
      </div>
    </>
  );
}

export default ContactItem;

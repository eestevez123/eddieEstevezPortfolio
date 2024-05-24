import React, { useState, useEffect } from "react";

import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";

/**
 * Component for rendering navigation buttons or dropdown based on screen size.
 * This component conditionally renders navigation buttons or a dropdown menu
 * based on the screen size. It utilizes a custom hook `useWindowWidth` to
 * determine the current window width and manage responsive behavior.
 *
 * @component
 * @param {Object} props - The props object containing the section index and update handler.
 * @param {number} props.section - The current section index selected.
 * @param {Function} props.updateHandler - The function to handle section updates.
 * @returns {JSX.Element} JSX element representing the navigation buttons or dropdown.
 */
function WorkNav(props) {
  const windowWidth = useWindowWidth();
  const [isScreenLarge, setIsScreenLarge] = useState(true);
  // breakpoint at 992px coming down from large screens
  // large and up --> buttons
  // medium and below --> dropdown
  // default --> true, will render out buttons if no parameter is passed

  useEffect(() => {
    if (windowWidth > 992) {
      setIsScreenLarge(true);
    } else {
      setIsScreenLarge(false);
    }
  }, [windowWidth]);

  const sectionArray = [
    { name: "Web Development and Design", value: 0 },
    { name: "Apps and Software", value: 1 },
    { name: "Video Work", value: 2 },
    { name: "Sound Work", value: 3 }
  ];

  return (
    <>
      <div className="container text-center">
        {isScreenLarge ? (
          <>
            <ButtonGroup
              className="btn-group-justified"
              name="button"
              onClick={(e) => props.updateHandler(e)}
            >
              {sectionArray.map((button, idx) => (
                <Button
                  key={idx}
                  id={`button-${button.name}`}
                  type="button"
                  className={props.section === button.value ? "active" : ""}
                  variant="outline-primary"
                  value={button.value}
                >
                  {button.name}
                </Button>
              ))}
            </ButtonGroup>
          </>
        ) : (
          <>
            <DropdownButton
              id="dropdown-item-button"
              title={sectionArray[props.section].name}
            >
              {sectionArray.map((button, idx) => (
                <Dropdown.Item
                  as="button"
                  key={idx}
                  id={`button-${button.name}`}
                  type="button"
                  className={props.section === button.value ? "active" : ""}
                  variant="outline-primary"
                  value={button.value}
                  onClick={(e) => props.updateHandler(e)}
                >
                  {button.name}
                </Dropdown.Item>
              ))}
            </DropdownButton>
          </>
        )}
      </div>
    </>
  );
}

/**
 * Custom hook to track the current window width.
 * This hook monitors window resize events and returns the current window width.
 *
 * @returns {number} The current window width in pixels.
 */
function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(1000);
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowWidth(window.innerWidth);
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowWidth;
}

export default WorkNav;

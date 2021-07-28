import React from 'react';
import blackLineRect from "../images/homePage/blackLineRect.svg";
import DraggableObject from "../components/DraggableObject";

function InteractiveShapes(props) {
    return (
            <>
                <DraggableObject 
                    isImage={true}
                    borderRadius = "100%"
                    backgroundColor="#2196f3"
                />
            </>
    )
}
export default InteractiveShapes;
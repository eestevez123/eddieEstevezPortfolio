import React from 'react';
import blackLineRect from "../images/homePage/blackLineRect.svg";
import DraggableObject from "../components/DraggableObject";
import { Frame } from "framer"

function InteractiveShapes(props) {
    return (
        <Frame id="interactiveDivHomePage">
            <DraggableObject objID = "greenCircleHomePage"
            className="dragObject"
            isImage={false}
            width={150}
            height={150}
            borderRadius = "100%"
            backgroundColor="#21eaaf"
            />
            <DraggableObject objID = "blueCircleHomePage"
            className="dragObject"
            isImage={false}
            width={150}
            height={150}
            borderRadius = "100%"
            backgroundColor="#2196f3"
            />
            <DraggableObject objID = "purpleCircleHomePage"
            className="dragObject"
            isImage={false}
            width={150}
            height={150}
            borderRadius = "100%"
            backgroundColor="#672fd9"
            />
    
            <DraggableObject objID = "blueRectangeHomePage"
            className="dragObject"
            isImage={false}
            width={200}
            height={150}
            borderRadius = {0}
            backgroundColor="#2196f3"
            />
            <DraggableObject objID = "greenRectangeHomePage"
            className="dragObject"
            isImage={false}
            width={200}
            height={150}
            borderRadius = {0}
            backgroundColor="#21eaaf"
            />
    
    
            <DraggableObject objID = "blackLineRectHomePage"
            className="dragObject"
            isImage={true} 
            imageObj={blackLineRect}
            width={150}
            height={150}
            />
            <DraggableObject objID = "blackLineRectHomePage2"
            className="dragObject"
            isImage={true} 
            imageObj={blackLineRect}
            width={150}
            height={150}
            />
        </Frame>
    )
}
export default InteractiveShapes;
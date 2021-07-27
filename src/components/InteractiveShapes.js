import React from 'react';
import blackLineRect from "../images/homePage/blackLineRect.svg";
import DraggableObject from "../components/DraggableObject";
import { Frame } from "framer"

function InteractiveShapes(props) {
    return (
        <div className="container-fluid">
            <div className="row justify-content-center">
                <div className="col col-sm-10">
                    <Frame id="interactiveDivHomePage" >
                        <DraggableObject objID = "greenCircleHomePage"
                        className="dragObject"
                        isImage={false}
                        borderRadius = "100%"
                        backgroundColor="#21eaaf"
                        />
                        <DraggableObject objID = "blueCircleHomePage"
                        className="dragObject"
                        isImage={false}
                        borderRadius = "100%"
                        backgroundColor="#2196f3"
                        />
                        <DraggableObject objID = "purpleCircleHomePage"
                        className="dragObject"
                        isImage={false}
                        borderRadius = "100%"
                        backgroundColor="#672fd9"
                        />
                
                        <DraggableObject objID = "blueRectangeHomePage"
                        className="dragObject"
                        isImage={false}
                        borderRadius = {0}
                        backgroundColor="#2196f3"
                        />
                        <DraggableObject objID = "greenRectangeHomePage"
                        className="dragObject"
                        isImage={false}
                        borderRadius = {0}
                        backgroundColor="#21eaaf"
                        />
                
                
                        <DraggableObject objID = "blackLineRectHomePage"
                        className="dragObject"
                        isImage={true} 
                        imageObj={blackLineRect}
                        />
                        <DraggableObject objID = "blackLineRectHomePage2"
                        className="dragObject"
                        isImage={true} 
                        imageObj={blackLineRect}

                        />
                    </Frame>
                </div>
            </div>
        </div>
    )
}
export default InteractiveShapes;
import React from "react";

function ContactItem(props) {
    
    return(
        <>
        <div class="col-md-3">
            <div class="dbox w-100 text-center">
                <a href={props.href}>
                    <div class="icon d-flex align-items-center justify-content-center">
                        <img src={props.imgAddr} class="fa fa-map-marker contactItemImg" alt={props.imgAlt}/>
                    </div>
                <div class="text">
                    <p><span>{props.txtTitle}</span> {props.txt}</p>
                </div>
                </a>
            </div>
        </div>
        </>
    );
}

export default ContactItem
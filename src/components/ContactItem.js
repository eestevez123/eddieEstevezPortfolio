import React from "react";

function ContactItem(props) {


    
    return(
        <>
        <div className={props.colClass}>
            <div className="text-center">
                <a href={props.href}>
                    <div className="icon d-flex align-items-center justify-content-center">
                        <img src={props.imgAddr} className="fa fa-map-marker contactItemImg" alt={props.imgAlt}/>
                    </div>
                    <p className={`${(props.txtTitle === "Email: ")?("emailText"):("")}`}><span>{props.txtTitle}</span>{props.txt}</p>
                </a>
            </div>
        </div>
        </>
    );
}

export default ContactItem
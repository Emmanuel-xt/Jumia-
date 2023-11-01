import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAppleWhole } from "@fortawesome/free-solid-svg-icons";


const Items = (props) => {
    return ( 
        <>
            <div className="item">
        <FontAwesomeIcon icon={faAppleWhole} className="icon"/>  
        <p>{props.name}</p>          

            </div>
        </>
     );
}
 
export default Items;
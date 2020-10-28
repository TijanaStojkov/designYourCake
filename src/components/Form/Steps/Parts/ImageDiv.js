import React from 'react';

const ImageDiv = (props) => {
    return(
        <div className={`col ${props.divSize}`}>
            <img className={props.imageClass} 
            src={props.imageSrc} 
            alt={props.imageAlt}
            onClick={props.imageOnClick}/>
            {props.imageParagraf!==false?<p>{props.imageParagraf}</p>:null}
        </div>
    )
}
export default ImageDiv;
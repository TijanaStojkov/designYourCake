import React from 'react';

const messages = (props) => {
    const messageColor = props.message==='error'?'red':props.message==='success'?'green':null;
    return(
        <span style={{color:messageColor}}>{props.text}</span>
    )
}
export default messages;
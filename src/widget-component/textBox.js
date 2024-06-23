import React from "react";

function TextBox(props) {
    return <>
           <p> {props.listValue[props.index]}</p>
    </>
}

export default TextBox
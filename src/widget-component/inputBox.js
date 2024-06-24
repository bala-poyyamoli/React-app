import React from 'react';

function InputBox (props) {
    let enteredValue = props.enteredValue;
    const changedValue = (e) =>{
        props.changedValue(e)
    }
return <>
    <input onChange={(e) => changedValue(e)} value={props.enteredValue}></input> 
</>
}

export default InputBox
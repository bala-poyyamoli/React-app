import React from 'react';

function InputBox (props) {
    const changedValue = (e) =>{
        props.changedValue(e,props.index)
    }
return <>
    <input onChange={(e) => changedValue(e)} name='checList1'></input> 
</>
}

export default InputBox
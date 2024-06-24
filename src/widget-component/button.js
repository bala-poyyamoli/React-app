import React from 'react';

function ButtonComponent(props) {
    return ( <>
    <button onClick={props.addNewList} >{props.action}</button>
     </>)
}

export default ButtonComponent;
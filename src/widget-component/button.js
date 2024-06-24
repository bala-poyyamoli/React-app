import React from 'react';

function ButtonComponent(props) {
    return ( <>
    <button onClick={props.addNewList} >Add</button>
     </>)
}

export default ButtonComponent;
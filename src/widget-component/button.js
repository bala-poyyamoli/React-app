import React from 'react';

function ButtonComponent(props) {
    return ( <>
    <button disabled = {!props.showAdd } onClick={props.addNewList} >Add</button>
     </>)
}

export default ButtonComponent;
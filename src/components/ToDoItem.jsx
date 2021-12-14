import React from "react";

function ToDoItem(props){

    return(
        // <div onClick={props.chooseItemToDelete(props.id)}> // the function chooseItemToDelete call immediately when item render
        <div onClick={()=>{ // the function chooseItemToDelete call when item is actually clicked.
            props.chooseItemToDelete(props.id);
        }}>
            <li>{props.textItem}</li>
        </div>
    );
}

export default ToDoItem;
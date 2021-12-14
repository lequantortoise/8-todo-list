import React from "react";

function ToDoItem(props){
    const [isDone, setIsDone] = React.useState(false);
    function handleItemClick(){
        setIsDone((preIsDone)=>{
            return !preIsDone;
        });
    }

    return(
        <div onClick={handleItemClick}>
            <li style={{textDecoration: isDone? "line-through" : "none"}}>{props.textItem}</li>
        </div>
    );
}

export default ToDoItem;
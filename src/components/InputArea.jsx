import React from "react";


function InputArea(props){

    const [item, setItem] = React.useState("");
    function inputItem(event){
        const newValue = event.target.value;
        setItem(newValue);
    }


    return(
        <div>
            <input onChange={inputItem} type="text" name={item} value={item}></input>
            <button onClick={()=>{
                props.onAdd(item);
                setItem("");
            }}>Add</button>
        </div>
    );
}

export default InputArea;
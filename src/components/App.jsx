import React from "react";


function App(){

    const [item, setItem] = React.useState("");
    function inputItem(event){
        const newValue = event.target.value;
        setItem(newValue);
    }

    const [arrItem, setArrItem] = React.useState([]);
    function addItem(){
        setArrItem((preArrItem) =>{
            return [...preArrItem, item];
        });
        setItem("");
    }

    return(
        <div>
            <input onChange={inputItem} type="text" name={item} value={item}></input>
            <button onClick={addItem}>Add</button>
            <ul>
                {arrItem.map(itemEach => <li>{itemEach}</li>)}
            </ul>
        </div>
    );
}

export default App;
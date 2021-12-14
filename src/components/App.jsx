import React from "react";
import ToDoItem from "./ToDoItem";

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

    function deletedItem(id){
        setArrItem((preArrItems) => {
            // console.log("preArrItems: "+preArrItems);
            return preArrItems.filter((itemWilel, index) => {
                // console.log("itemWillDel: "+itemWillDel);
                return index !== id;
            });
        });
    }

    return(
        <div>
            <input onChange={inputItem} type="text" name={item} value={item}></input>
            <button onClick={addItem}>Add</button>
            <ul>
                {arrItem.map((itemEach, index) => (<ToDoItem key={index} 
                                                    id={index}
                                                    textItem={itemEach} 
                                                    chooseItemToDelete={deletedItem}/>))}
            </ul>
        </div>
    );
}

export default App;
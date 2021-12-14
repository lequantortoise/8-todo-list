import React from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function App(){

    const [arrItem, setArrItem] = React.useState([]);
    function addItem(item){
        setArrItem((preArrItem) =>{
            return [...preArrItem, item];
        });
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
            <InputArea onAdd={addItem}/>
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
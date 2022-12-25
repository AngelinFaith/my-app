import { useRef } from "react";
import {v4 as uuid} from 'uuid';

function AddToDo({setToDos}){

    console.log(setToDos);
    const inputRef = useRef();
    function handleAddToDo(e){
        e.preventDefault();
        //const text= e.target.elements.addToDo.value;
        //Instead of fetaching value from target, we use useRef() to get the DOM elements with their reference.
        const text = inputRef.current.value;
        const todo={
            id: uuid(), //uuid- to generate unique id.
            text,
            done: false
        };
        console.log(todo);
        //setToDos- the state function has the ability to store the current state(useState) variable datas.
        //setToDos(todo); If we pass todo object like this, this will replace the current state data and only this object will be replaced in todos state variable.
        //setToDos((prevToDos) => prevToDos.concat(todo));
        setToDos((prevToDos)=>{
            return [...prevToDos, todo];
        });

        // Empty the value of input after clicking the submit button.
        inputRef.current.value= "";
    }

 
    return(
        <div className="AddToDo">
            <form onSubmit={handleAddToDo}>
                <input type="text" name="addToDo" placeholder="Add new todo" ref={inputRef}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddToDo;
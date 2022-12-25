import DeleteToDo from "./DeleteToDo";

function ToDoList({ todos, setToDos }) {
    console.log(todos);

    // If I click on the list of tems(li), it prints the current clicked list details(objects.)   
    function handleToggleToDos(todo) {
        console.log(todo);
    }

    // If I double-click on the list of tems(li), it change the "done" property of that current clicked list.  
    function handleToDos(todo) {
        // if a todo id=== clicked element id then perform update action, else not do anything.
        const updatedToDos = todos.map((currentToDo) => 
            currentToDo.id === todo.id 
                ? { ...currentToDo, done: !currentToDo.done } 
                : currentToDo
        );
        setToDos(updatedToDos); 
    }

    // If all the to-do list items is deleted, it shows the below message.
    if(!todos.length){
        return <p>No ToDos...</p>
    }
    return ( 
        <div className="ToDoList">
            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        //Arrow function that returns the function.As we are returning single function/statement here, we can use short han notation like this.
                        // onClick={() => handleToggleToDos(todo)}
                        // When we click the li we get the specific li details(object). 
                        onClick={() => {
                            return handleToggleToDos(todo);
                        }}
                        onDoubleClick={() => handleToDos(todo)}
                        style={{
                            textDecoration: todo.done ? "line-through" : "",
                        }}
                    >{todo.text}
                    <DeleteToDo todo={todo} setToDos={setToDos}/> </li>
                ))}
            </ul>
        </div>
    )
}

export default ToDoList;
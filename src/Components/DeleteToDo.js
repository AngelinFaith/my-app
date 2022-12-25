function DeleteToDo({todo, setToDos}){

    // Delete the list by clicking the "X".
    function handleDeleteToDos(){
        const confirmed = window.confirm("Do you really want to delete this?");
// After clicked the yes in the alert popup, we remove the deleted list by filtering the rest of the list of
// the todos using setToDos method, thus the only filtered items are updated in todos state variable an it displaye in UI.
        if(confirmed) {
            setToDos((currentToDos) => {
                return currentToDos.filter((t)=> t.id !== todo.id);
            })
        }
    }
    return(
        <span
        onClick={handleDeleteToDos} 
        style={{color: "red", fontWeight: "bold", marginLeft: 10, cursor: "pointer"}}>X</span>
    )
}

export default DeleteToDo;
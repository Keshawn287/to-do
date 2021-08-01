//Keeps track of our todo state through form
import React, { useState } from "react"; //define state to track input from user
import uuid from "uuid";

//in todo form component, d-structure add todo function from props parameter
function TodoForm({addTodo}){
    //define a state called todo with setTodo as the function inialized as an object with 3 properties
    const [todo, setTodo] = useState({
        id: "", //string
        task: "", //string - task will be text describing todo
        completed: false // boolean - will track if todo has beem marked as completed or not
    });
    //function that handles when user types in input for a todo so it can be tracked in our state
    function handleTaskInputChange(e){
        //updates task property 
        //
        setTodo({...todo, task: e.target.value });
    }

    //want to add forms todo from state to list of todos when user submits form
    function handleSubmit(e){
        e.preventDefault();
        if (todo.task.trim()){
            addTodo({...todo, id: uuid.v4()});

            //reset task
            setTodo({ ...todo, task: ""});

        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
            name="task"
            type="text"
            value={todo.task}
            onChange={handleTaskInputChange}
            />
            <button type="submit" />
        </form>

    );

}

export default TodoForm;
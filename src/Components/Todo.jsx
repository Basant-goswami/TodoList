import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import "../Css/Todo.Css"

export default function Todo() {
    let [todos, setTodos] = useState([{ task: "Add Your Task here..", id: uuidv4(), isDone: false }]);
    let [newtodos, setnewtodos] = useState("");

    let addList = () => {
        setTodos((preTodos) => {
            return ([...preTodos, { task: newtodos, id: uuidv4(), isDone: false }])
        });
        setnewtodos("");
    }

    let newfunc = (event) => {
        setnewtodos(event.target.value);
    }

    let deleteTodo = (id) => {
        setTodos((prevTodos) => todos.filter((prevTodos) => prevTodos.id != id));

    }
    let toUppercaseAll = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase()
                }
            })
        )
    }
    let markAsDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id == id) {
                    return {
                        ...todo,
                        isDone: true
                    }
                } else {
                    return todo;
                }
            })
        )
    }
    let allMarkAsDone = () => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                return {
                    ...todo,
                    isDone: true,
                }
            })
        )
    }
    let deleteAll = () => {
        setTodos ((prevTodos) => 
        [],
        )
    }
    return (
        <>
            <div id="Todo">
                <div className="container">
                    <div className="box1">
                        <h2>Todo website</h2>
                        <div className="box1inner">
                        <input type="text" placeholder="Enter Your Text" value={newtodos} onChange={newfunc} />
                        <br />
                        <button className="btn" onClick={addList}>Add a Task</button>
                        <br /> <br />
                        </div>
                    </div>
                    <div className="box2">
                        <h2>Your Tasks </h2>
                        <ul>
                            {
                                todos.map((todo) => {
                                    return (
                                        <li key={todo.id}>
                                            <span style={todo.isDone ? { textDecorationLine: "line-through", textDecorationColor:"blue" } : {}}>{todo.task}</span>
                                            &nbsp; &nbsp;
                                            <i className="fa-regular fa-circle-xmark" onClick={() => deleteTodo(todo.id)}></i>
                                            &nbsp;
                                            <i style={todo.isDone ? { color: "blue" } : {}} className="fa-regular fa-circle-check" onClick={() => markAsDone(todo.id)}></i>
                                        </li>)
                                })
                            }
                        </ul>
                        <button className="btn" onClick={toUppercaseAll}>Uppercase</button>
                        <button className="btn" onClick={allMarkAsDone}>Mark All</button>
                        <button className="btn" onClick={deleteAll}>Delete All</button>
                    </div>
                </div>
            </div>
        </>
    )
}
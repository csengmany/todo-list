import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
// import Task from "./Task";

library.add(faListAlt, faTrash);

function App() {
    const [text, setText] = useState("");
    const [tasks, setTasks] = useState([]);
    const [isTodo, setIsTodo] = useState([true, true]);

    return (
        <div className="App">
            <Header logo="list-alt" title="Todo List" />

            <div className="container">
                {tasks.map((task, index) => {
                    return (
                        <div className="task-line" key={index}>
                            <label className="checkbox">
                                <input
                                    type="checkbox"
                                    onClick={() => {
                                        if (isTodo[index]) {
                                            const newIstodo = [...isTodo];
                                            newIstodo[index] = false;
                                            return setIsTodo(newIstodo);
                                        } else {
                                            const newIstodo = [...isTodo];
                                            newIstodo[index] = true;
                                            return setIsTodo(newIstodo);
                                        }
                                    }}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <span
                                style={{
                                    textDecoration: isTodo[index]
                                        ? "none"
                                        : "line-through",
                                }}
                            >
                                {task}
                            </span>
                            <FontAwesomeIcon
                                icon="trash"
                                className="trash"
                                onClick={() => {
                                    const newTasks = [...tasks];
                                    newTasks[index] = false;
                                    setTasks(newTasks.filter(Boolean));
                                }}
                            />
                        </div>
                    );
                })}

                <div>
                    <input
                        className="input-text"
                        type="text"
                        placeholder="new task"
                        value={text}
                        onChange={(event) => {
                            setText(event.target.value);
                        }}
                    />
                    <button
                        onClick={() => {
                            if (text) {
                                const newTodolist = [...tasks];
                                newTodolist.push(text);
                                setTasks(newTodolist);
                                const newtabCheck = [...isTodo];
                                newtabCheck.push(true);
                                setIsTodo(newtabCheck);
                            }
                        }}
                    >
                        Add task
                    </button>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default App;

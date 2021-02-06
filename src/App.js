import "./App.css";
import { useState } from "react";

// Import components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Task from "./components/Task";
import CrudTask from "./components/CrudTask";
import SearchTask from "./components/SearchTask";

//Import FontAwsome and icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faListAlt, faTrash } from "@fortawesome/free-solid-svg-icons";
library.add(faListAlt, faTrash);

function App() {
    const [task, setTask] = useState("");
    const [taskList, setTaskList] = useState([]);
    const [taskSearch, setTaskSearch] = useState([]);

    return (
        <div className="App">
            <Header logo="list-alt" title="Todo List" />

            <div className="container">
                <SearchTask taskList={taskList} setTaskList={setTaskList} />
                <Task taskList={taskList} setTaskList={setTaskList} />

                <CrudTask
                    task={task}
                    setTask={setTask}
                    taskList={taskList}
                    setTaskList={setTaskList}
                />
            </div>

            <Footer />
        </div>
    );
}

export default App;

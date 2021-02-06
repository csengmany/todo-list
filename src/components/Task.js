// Import FontAwesomeIcon to use icons in this component
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ taskList, setTaskList }) => {
    return (
        // if todoList is not empty : display list of tasks
        taskList.length > 0 &&
        taskList.map((item, index) => {
            // each task will be return
            return (
                <div className="task-line" key={index}>
                    <input
                        type="checkbox"
                        onClick={() => {
                            console.log(item);
                            console.log(item.name);
                            console.log(item.isChecked);
                            if (item.isChecked) {
                                //if box is checked: the task is done = strike
                                const newTaskList = [...taskList];
                                newTaskList[index].isChecked = false;
                                setTaskList(newTaskList);
                            } else {
                                //if box is not checked: the task is not done = not strike
                                const newTaskList = [...taskList];
                                newTaskList[index].isChecked = true;
                                setTaskList(newTaskList);
                            }
                        }}
                        //checked or not checked depends on isChecked
                        checked={item.isChecked}
                        //throw a warning (You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.)
                        onChange={() => {}}
                    />

                    {/* line-through task if it is checked */}
                    <span
                        style={{
                            textDecoration: item.isChecked
                                ? "line-through"
                                : "none",
                        }}
                    >
                        {item.name}
                    </span>
                    <FontAwesomeIcon
                        icon="trash"
                        className="trash"
                        onClick={() => {
                            //click on trash will delete task
                            const newTasks = [...taskList];
                            newTasks.splice(index, 1);
                            setTaskList(newTasks);
                        }}
                    />
                </div>
            );
        })
    );
};

export default Task;

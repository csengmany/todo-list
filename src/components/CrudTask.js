const CrudTask = ({ task, setTask, taskList, setTaskList }) => {
    return (
        <div>
            {/* button check all */}
            {taskList.length > 0 && (
                <button
                    onClick={() => {
                        //if todolist is not empty
                        if (taskList.length > 0) {
                            //verify that at least one task is not checked
                            const checkList = [];
                            for (let i = 0; i < taskList.length; i++) {
                                checkList.push(taskList[i].isChecked);
                            }
                            if (checkList.filter(Boolean).length > 0) {
                                // check all task
                                const newTask = [...taskList];
                                newTask.map((item) => {
                                    return (item.isChecked = false);
                                });
                                setTaskList(newTask);
                            } else {
                                //if all task is checked : uncheck all
                                const newTask = [...taskList];
                                newTask.map((item) => {
                                    return (item.isChecked = true);
                                });
                                setTaskList(newTask);
                            }
                        }
                    }}
                >
                    Check all
                </button>
            )}
            {/* input text */}
            <input
                className="input-text"
                type="text"
                placeholder="new task"
                value={task}
                //if write something in input-text : the value is update
                onChange={(event) => {
                    setTask(event.target.value);
                }}
            />
            {/* button add task */}
            <button
                onClick={() => {
                    // if input-text is not empty
                    if (task) {
                        // add task in todoList
                        const newTaskList = [...taskList];
                        newTaskList.push({ name: task, isChecked: false }); //task is an object with two keys name and isChecked
                        setTaskList(newTaskList);
                        // clear input-text after add task
                        setTask("");
                    }
                }}
            >
                Add task
            </button>
        </div>
    );
};

export default CrudTask;

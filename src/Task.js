import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Task = ({ todoList }) => {
    return (
        <div className="task-list">
            <span>©</span>
            <span>{todoList}</span>
            <FontAwesomeIcon icon="trash" className="trash" />
        </div>
    );
};

export default Task;

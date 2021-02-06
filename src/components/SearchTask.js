const SearchTask = ({ taskList, setTaskList }) => {
    return (
        <div>
            {taskList.length > 0 && (
                <input
                    className="search-bar"
                    type="text"
                    placeholder="search task"
                    onChange={(event) => {
                        let value = event.target.value;
                    }}
                />
            )}
        </div>
    );
};
export default SearchTask;

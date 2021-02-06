const SearchTask = ({ taskList }) => {
    return (
        <div>
            {taskList.length > 0 && (
                <input
                    className="search-bar"
                    type="text"
                    placeholder="search task"
                />
            )}
        </div>
    );
};
export default SearchTask;

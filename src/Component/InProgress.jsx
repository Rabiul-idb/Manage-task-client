const InProgress = () => {
  return (
    <div>
      <div className="drop-zone" data-category="in-progress">
        <h2>In Progress</h2>
        <input
          type="text"
          className="add-task-input"
          placeholder="Add a task..."
        ></input>
        <button className="add-task-btn">Add Task</button>
        <div className="item" draggable="true">
          Example Task 2
          <span className="icons">
            <i className="fas fa-edit edit-btn" aria-label="Edit Task"></i>
            <i className="fas fa-trash delete-btn" aria-label="Delete Task"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default InProgress;

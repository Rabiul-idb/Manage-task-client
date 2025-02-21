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
        
      </div>
    </div>
  );
};

export default InProgress;

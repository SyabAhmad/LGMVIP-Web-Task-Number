import React, { useState } from "react";
import "../Style/TaskList.css";

const TaskList = () => {
  const [taskQuery, setTaskQuery] = useState("");
  const [listOfTask, setListOfTasks] = useState([]);
  const id = 0;
  const handleOnchangeInput = (e) => {
    setTaskQuery(e.target.value);
  };

  const handleOnClick = (e) => {
    if (taskQuery != null) {
      console.log(taskQuery);
      setListOfTasks((prev) => [
        ...prev,
        { id: prev.length + 1, value: taskQuery },
      ]);
      setTaskQuery("");
    } else {
      console.log("Entry Required");
    }
  };
  return (
    <>
      <div className="container">
        <div className="addingTasks">
          <h2>Todo App</h2>
          <div>
            <label htmlFor="input">Task Here</label>
            <br />
            <input
              type="text"
              id="input"
              placeholder="Enter ToDo Here"
              value={taskQuery}
              onChange={handleOnchangeInput}
            />
          </div>
          <button onClick={handleOnClick}>Add</button>
        </div>
      </div>

      <div className="display">
        <div className="box">
          <ul>
            {listOfTask.map((task) => (
              <li key={task.id} id={task.id}>
                {task.id}
                {task.value}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default TaskList;

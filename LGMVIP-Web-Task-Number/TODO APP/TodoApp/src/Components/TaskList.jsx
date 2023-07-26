import React, { useState } from "react";
import "../Style/TaskList.css";
import { Trash2 } from "lucide-react";
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

  const handleTrashCan = (taskId) => {
    setListOfTasks((prev) => prev.filter((task) => task.id !== taskId));
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
              required
              placeholder="Enter ToDo Here"
              value={taskQuery}
              onChange={handleOnchangeInput}
            />
          </div>
          <button onClick={handleOnClick}>Add</button>
        </div>
      </div>

      <div className="display">
        {listOfTask.map((task) => (
          <div className="box">
            <ul>
              <li key={task.key} id={task.id}>
                {task.id} {")"}
                <input type="checkbox" />
                <span>{task.value}</span>
                <Trash2
                  color="#ffffff"
                  onClick={() => handleTrashCan(task.id)}
                />
              </li>
            </ul>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;

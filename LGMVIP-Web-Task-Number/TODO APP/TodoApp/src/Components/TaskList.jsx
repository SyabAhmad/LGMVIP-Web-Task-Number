import React, { useState } from "react";
import "../Style/TaskList.css";
import { Trash2 } from "lucide-react";
const TaskList = () => {
  const [taskTitleQuery, setTitleTaskQuery] = useState("");
  const [taskDescriptionQuery, setTaskDescriptionQuery] = useState("");
  const [listOfTask, setListOfTasks] = useState([]);
  const [message, setMessage] = useState("");
  const id = 0;

  const handleTitleOnchangeInput = (e) => {
    setMessage("");
    setTitleTaskQuery(e.target.value);
  };

  const handleDescriptionOnchangeInput = (e) => {
    setTaskDescriptionQuery(e.target.value);
    setMessage("");
  };

  const handleOnClick = (e) => {
    if (taskTitleQuery !== "" && taskDescriptionQuery !== "") {
      setMessage("");
      console.log(taskTitleQuery);
      console.log(taskDescriptionQuery);
      setListOfTasks((prev) => [
        ...prev,
        {
          id: (prev += 1),
          title: taskTitleQuery,
          value: taskDescriptionQuery,
        },
      ]);
      setTitleTaskQuery("");
      setTaskDescriptionQuery("");
    } else {
      setMessage("All Field are Required");
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
          <div className="inputs">
            <label htmlFor="input">Title</label>
            <br />
            <input
              type="text"
              id="input"
              required
              placeholder="Enter ToDo Here"
              value={taskTitleQuery}
              onChange={handleTitleOnchangeInput}
            />
            <br />
            <label htmlFor="input">Description</label>
            <br />
            <input
              type="text"
              id="input"
              required
              placeholder="Enter ToDo Here"
              value={taskDescriptionQuery}
              onChange={handleDescriptionOnchangeInput}
            />
            <span className="errorMessage">{message}</span>
          </div>
          <button onClick={handleOnClick}>Add</button>
        </div>
      </div>

      <div className="display">
        {listOfTask.map((task) => (
          <div className="box">
            <li id={task.id}>
              <div>{/* <input type="checkbox" /> */}</div>
              <div className="spans">
                <span className="titleArea">{task.title}</span>
                <hr />
                <br />
                <span className="descriptionArea">{task.value}</span>
              </div>
              <div>
                <Trash2
                  color="#ef6c00"
                  onClick={() => handleTrashCan(task.id)}
                />
              </div>
            </li>
          </div>
        ))}
      </div>
    </>
  );
};

export default TaskList;

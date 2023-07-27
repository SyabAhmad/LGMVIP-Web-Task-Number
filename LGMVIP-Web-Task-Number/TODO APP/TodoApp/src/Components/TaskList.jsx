import React, { useState } from "react";
import { useEffect } from "react";
import "../Style/TaskList.css";
import { Trash2 } from "lucide-react";
const TaskList = () => {
  const [taskTitleQuery, setTitleTaskQuery] = useState("");
  const [taskDescriptionQuery, setTaskDescriptionQuery] = useState("");
  const [listOfTask, setListOfTasks] = useState([]);
  const [message, setMessage] = useState("");
  const [id, setId] = useState(1);

  const handleTitleOnchangeInput = (e) => {
    setMessage("");
    setTitleTaskQuery(e.target.value);
  };

  const handleDescriptionOnchangeInput = (e) => {
    setTaskDescriptionQuery(e.target.value);
    setMessage("");
  };

  const isLocalStorageSupported = () => {
    try {
      const testKey = "__test__";
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  };

  // Usage example:

  // Fetch data from local storage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("dataKey"));
    if (isLocalStorageSupported()) {
      if (savedTasks && savedTasks.length) {
        const maxId = Math.max(...savedTasks.map((task) => task.id));
        setId(maxId + 1);
        setListOfTasks(savedTasks);
        console.log("Data retrieved from local storage:", savedTasks);
      }
    } else {
      setMessage("Local Storage not supported");
    }
  }, []);

  useEffect(() => {
    // Save the tasks to local storage whenever the listOfTask state changes
    localStorage.setItem("dataKey", JSON.stringify(listOfTask));
    console.log("Data saved to local storage:", listOfTask);
  }, [listOfTask]);

  const handleOnClick = (e) => {
    if (taskTitleQuery !== "" && taskDescriptionQuery !== "") {
      setMessage("");
      console.log(taskTitleQuery);
      console.log(taskDescriptionQuery);
      setListOfTasks((prev) => [
        ...prev,
        {
          id: id,
          title: taskTitleQuery,
          value: taskDescriptionQuery,
        },
      ]);
      setId((prevId) => prevId + 1);

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
          <div className="box" key={task.id}>
            <li id={task.id}>
              <div>{/* <input type="checkbox" /> */}</div>
              <div className="spans">
                <span className="titleArea">
                  {" "}
                  {"Title:  "} {task.title}
                  <hr />
                </span>

                <br />
                <span className="descriptionArea">
                  {"Description:"} <br />
                  {task.value}
                </span>
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

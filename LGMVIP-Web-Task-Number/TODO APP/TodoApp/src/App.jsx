import "./App.css";
import NavBar from "./Components/NavBar";
import TaskList from "./Components/TaskList";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <header>
          <NavBar />
        </header>
      </div>
      <div>
        <main>
          <TaskList />
        </main>
      </div>
    </>
  );
}

export default App;

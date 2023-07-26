import "./App.css";
import NavBar from "./Components/NavBar";
import TaskList from "./Components/TaskList";
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

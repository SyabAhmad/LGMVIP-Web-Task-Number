import "./App.css";
import NavBar from "./Components/NavBar";
import TaskList from "./Components/TaskList";
import Footer from "./Components/Footer";
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
      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;

import "./App.css";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
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
          <Hero />
        </main>
      </div>
    </>
  );
}

export default App;

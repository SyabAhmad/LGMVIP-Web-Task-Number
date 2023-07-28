import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
function App() {
  return (
    <>
      <div className="headerr">
        <header>
          <Header />
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

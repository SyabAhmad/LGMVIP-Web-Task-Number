import "./App.css";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
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
      <div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;

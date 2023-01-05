import "./App.css";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experience from "./Components/Experience";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Work from "./Components/Work";

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      <About />
      <Experience />
      <Work />
      <Contact />
    </div>
  );
}

export default App;

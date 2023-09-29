import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Friends from "./components/OpsFriends";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Projects/>
      <Friends/>
      <Contact/>
    </div>
  );
}

export default App;

import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Friends from "./components/OpsFriends";


function App() {
  return (
    <div className="App">
      <Home />
      <About/>
      <Projects/>
      <Friends/>
    </div>
  );
}

export default App;

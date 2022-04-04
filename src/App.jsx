import JokeButton from "./joke";
import Navbar from "./navbar";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <div className="App">
        <JokeButton />
      </div>
    </div>
  );
}

export default App;

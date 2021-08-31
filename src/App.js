import './App.css';
import Developer from "./Components/Developer"

function App() {

  return (
    <div className="App">
      <Developer name = "Filipe" age ="22" country="Brasil"/>
      <Developer name = "Gabriel" age ="28" country="Alemanha"/>
      <Developer name = "Augusto" age ="29" country="Suecia"/>
    </div>
  );
}

export default App;

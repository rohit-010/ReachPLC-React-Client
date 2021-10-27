import { useState } from "react";
import AddContent from "./components/AddContent";
import FetchContent from "./components/FetchContent";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);
  return (
    <div className="App">
      <FetchContent />
      <AddContent />
    </div>
  );
}

export default App;

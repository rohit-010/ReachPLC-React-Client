import { useState } from "react";
import AddContent from "./components/AddContent";
import FetchContent from "./components/FetchContent";
import "./App.css";

function App() {
  const [reload, setReload] = useState(false);

  const reloadHandler = () => {
    setReload(true);
  };
  return (
    <div className="App">
      <FetchContent />
      <AddContent onAdd={reloadHandler} />
    </div>
  );
}

export default App;

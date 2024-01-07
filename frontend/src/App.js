import React from "react";
import useApplicationData from "./hooks/useApplicationData.js";

function App() {
  return <div className="App">
    { useApplicationData.users }
  </div>;
}

export default App;

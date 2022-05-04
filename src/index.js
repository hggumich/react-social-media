import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const [inputValue, setInputValue] = React.useState("");

  function handleInputChange(event) {
    setInputValue(event.target.value);
  }

  return (
    <div id="app">
      <input onChange={handleInputChange} />
      <p>{inputValue}</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
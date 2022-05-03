import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const person = "Jane";
  return <p>{person}</p>;
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
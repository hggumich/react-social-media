import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const people = ["John", "Dave", "Jane"];

  return people.map((person) => <p>{person}</p>);
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
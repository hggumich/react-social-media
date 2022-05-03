import React from 'react';
import ReactDOM from "react-dom";

function Header() {
  return <h1>Hello React</h1>;
}

const rootNode = document.getElementById("root");

ReactDOM.render(<Header />, rootNode);
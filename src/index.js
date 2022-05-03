import React from 'react';
import ReactDOM from "react-dom";

function Header() {
  return <h1>Hello React</h1>;
}

const rootNode = document.getElementById("root");

ReactDOM.render(
  <div>
    <Header />
    <footer>Copyright 2022</footer>
  </div>,
  rootNode
);
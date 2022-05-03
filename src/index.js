import React from 'react';
import ReactDOM from "react-dom";

const Header = () => {
  return <h1>Hello React</h1>;
};

const rootNode = document.getElementById("root");

ReactDOM.render(
  <div>
    <Header />
    <Header />
    <Header />
    <footer>Copyright 2022</footer>
  </div>,
  rootNode
);
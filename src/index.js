import React from 'react';
import ReactDOM from "react-dom";

function Header(props) {
  return <h1>Hello {props.username}</h1>;
}

const rootNode = document.getElementById("root");

ReactDOM.render(
  <div>
    <Header username="John" />
    <footer>Copyright 2022</footer>
  </div>,
  rootNode
);
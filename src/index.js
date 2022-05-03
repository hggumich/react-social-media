import React from 'react';
import ReactDOM from "react-dom";

const greeting = (
  <div>
    <h1>Hello</h1>
    <p>Welcome to React</p>
  </div>
);
const rootNode = document.getElementById("root");

ReactDOM.render(greeting, rootNode);
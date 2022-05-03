import React from 'react';
import ReactDOM from "react-dom";

const greeting = <button style={{ background: "red" }}>Submit</button>;
const rootNode = document.getElementById("root");

ReactDOM.render(greeting, rootNode);
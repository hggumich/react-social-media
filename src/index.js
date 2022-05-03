import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const people = ["John", "Dave", "Jane"];

  return (
    <ul>
      {people.map((person, i) => (
        <Person key={i} person={person} />
      ))}
    </ul>
  );
}

function Person(props) {
  return <li>{props.person}</li>;
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
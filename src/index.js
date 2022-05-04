import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const [language, setLanguage] = React.useState("Python");

  return (
    <div>
      <button onClick={() => setLanguage("javascript")}>Change Language</button>
      <p>I am learning {language}</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const [language, setLanguage] = React.useState("Python");
  const [yearsExperience, setYearsExperience] = React.useState(0);

  return (
    <div>
      <button onClick={() => setLanguage("javascript")}>Change Language</button>

      <div>
        <input
          type="number"
          onChange={(event) => setYearsExperience(event.target.value)}
        />
      </div>
      <p>I am learning {language}</p>
      <p>I have {yearsExperience} years</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "python",
    yearsExperience: 0,
  });

  function handleChangeLanguage() {
    setDeveloper({
      language: "javascript",
      yearsExperience: 0,
    });
  }

  function handleYearsExperience(event) {
    setDeveloper({
      ...developer,
      yearsExperience: event.target.value,
    });
  }

  return (
    <div>
      <button onClick={handleChangeLanguage}>Change Language</button>

      <div>
        <input type="number" onChange={handleYearsExperience} />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
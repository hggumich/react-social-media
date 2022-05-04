import React from 'react';
import ReactDOM from "react-dom";

function App() {
  const [developer, setDeveloper] = React.useState({
    language: "python",
    yearsExperience: 0,
  });

  return (
    <div>
      <button
        onClick={() =>
          setDeveloper({
            language: "javascript",
            yearsExperience: 0,
          })
        }
      >
        Change Language
      </button>

      <div>
        <input
          type="number"
          onChange={(event) =>
            setDeveloper({
              ...developer,
              yearsExperience: event.target.value,
            })
          }
        />
      </div>
      <p>I am learning {developer.language}</p>
      <p>I have {developer.yearsExperience} years</p>
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
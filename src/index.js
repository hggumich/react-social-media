import React from 'react';
import ReactDOM from "react-dom";

const endpoint = "https://api.github.com/users/hggumich";

function App() {
  React.useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);

  return <div>user</div>;
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
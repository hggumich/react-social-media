import React from 'react';
import ReactDOM from "react-dom";

const endpoint = "https://api.github.com/users/hggumich";

function App() {
  const [user, setUser] = React.useState(null);
  React.useEffect(() => {
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return user ? (
    <div>
      <h2>{user.name}</h2>
    </div>
  ) : (
    <p>Loading...</p>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
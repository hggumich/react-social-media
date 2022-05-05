import React from 'react';
import ReactDOM from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = React.useState("hggumich");
  const [user, setUser] = React.useState(null);

  async function getUser(route) {
    const response = await fetch(`${baseUrl}${route}`);
    const data = await response.json();
    setUser(data);
  }

  React.useEffect(() => {
    getUser(username);
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Input username"
        onChange={(event) => setUsername(event.target.value)}
      />
      <button onClick={() => getUser(username)}>Search</button>
      <button>Clear</button>
      {user ? (
        <div>
          <h2>{user.name}</h2>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

const rootNode = document.getElementById("root");
ReactDOM.render(<App />, rootNode);
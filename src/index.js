import React from 'react';
import ReactDOM from "react-dom";

const baseUrl = "https://api.github.com/users/";

function App() {
  const [username, setUsername] = React.useState("hggumich");
  const [user, setUser] = React.useState(null);
  const searchInput = React.useRef();

  function handleClearInput() {
    searchInput.current.value = "";
    searchInput.current.focus();
  }

  async function getUser() {
    const response = await fetch(`${baseUrl}${username}`);
    const data = await response.json();
    setUser(data);
  }

  React.useEffect(() => {
    getUser();
  }, []);

  return (
    <div>
      <input
        type="text"
        placeholder="Input username"
        onChange={(event) => setUsername(event.target.value)}
        ref={searchInput}
      />
      <button onClick={() => getUser(username)}>Search</button>
      <button onClick={handleClearInput}>Clear</button>
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
import React from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import CreatePost from "./components/CreatePost";

function App() {
  const [user, setUser] = React.useState("");

  React.useEffect(() => {
    document.title = user ? `${user}'s Feed` : "Please login";
  }, [user]);

  if (!user) {
    return <Login setUser={setUser} />;
  }
  return (
    <div>
      <Header user={user} setUser={setUser} />
      <CreatePost />
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from "react-dom";

function Header(props) {
  return <h1>Hello {props.username}</h1>;
}

function Layout(props) {
  return <div style={{ background: "palegoldenrod" }}>{props.children}</div>;
}

function Login() {
  return <p>Please Login!</p>;
}

function Signout() {
  return <button>Signout</button>;
}

const rootNode = document.getElementById("root");
const isAuthenticated = true;

ReactDOM.render(
  <Layout>
    {isAuthenticated ? (
      <React.Fragment>
        <Header username="John" />
        <Signout />
      </React.Fragment>
    ) : (
      <Login />
    )}
    <footer>Copyright 2022</footer>
  </Layout>,
  rootNode
);
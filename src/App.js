import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Sample Form</h1>
      <form>
        <input type="text" placeholder="Enter your name" />
        <br />
        <br />
        <input type="password" placeholder="Enter password" />
        <br />
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

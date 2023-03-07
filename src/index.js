import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import "./App.css";

const rootTag = document.querySelector("#root");
const root = ReactDOM.createRoot(rootTag);

const App = () => {
  return (
    <div>
      <Home />
    </div>
  );
};

root.render(<App />);

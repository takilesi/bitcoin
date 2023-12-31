import React from "react"; 
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import App from "./App";
//IMPORT BrowserRouter, rename it to Router
import { BrowserRouter as Router } from "react-router-dom";

//Wrap the App Component with the Router component to enable the router features
ReactDOM.render(
  <StrictMode>
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);
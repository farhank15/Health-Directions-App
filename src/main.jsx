import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Appshell from "./components/molecules/Appshell/index.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Appshell>
      <App />
    </Appshell>
  </React.StrictMode>
);

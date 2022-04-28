import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { GlobalStateProvicer } from "./context/GlobalState";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GlobalStateProvicer>
    <App />
  </GlobalStateProvicer>
);

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { initializeContract } from "./utils/near";

import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "!style-loader!css-loader!react-toastify/dist/ReactToastify.css"
import { injectStyle } from "react-toastify/dist/inject-style";
injectStyle();
window.nearInitPromise = initializeContract()
  .then(() => {
    ReactDOM.render(
      <React.StrictMode>
        <App />
        
      </React.StrictMode>,
      document.getElementById("root")
    );
  })
  .catch(console.error);

reportWebVitals();
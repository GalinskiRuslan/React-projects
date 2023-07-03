import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./components/App";
import ErrorBoundry from "./components/Error-boundry";
import { store } from "./store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ErrorBoundry>
  </Provider>
);

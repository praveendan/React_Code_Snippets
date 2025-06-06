import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import store from "./reactRedux/store";
import { Provider } from "react-redux";

const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

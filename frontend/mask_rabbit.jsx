import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./store/store";
import Root from "./components/root"

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");

//////TESTING
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;

////////TESTING

ReactDOM.render(<h1><Root store={store} /></h1>, root);
});
import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    const root = document.getElementById("root");

//////TESTING
    window.getState = store.getState;
    window.dispatch = store.dispatch;

////////TESTING

    ReactDOM.render(<h1>Welcome to MaskRabbit!</h1>, root);
});
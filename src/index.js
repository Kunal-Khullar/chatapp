import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import App from "./App";
import { ApolloProvider } from "@apollo/client";
import {client} from './components/graph'
import { render } from "react-dom";

// client.query({
//     query: gql ``,
// }).then(result => { console.log(result) })

render(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

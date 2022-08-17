import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RQueryRootInit } from "./rquery";
import memoize from "./rquery/function/memoize";

export const $ = RQueryRootInit();

// const mul = memoize(function (a: any) {
//   return a * 5;
// });

// console.log(mul(1));
// console.log(mul(2));
// console.log(mul(1));
// console.log(mul(2));

const root = ReactDOM.createRoot(
  document.getElementById("root") ||
    (document.createElement("div") as HTMLElement)
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

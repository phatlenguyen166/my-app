import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Welcome from "./Welcom";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// const el = (
//   <div>
//     {/* <Welcome name="Phat" age={19} />
//     <Welcome name="Thien" age={20} />
//     <Welcome name="Luan" age={21} /> */}

//   </div>
// )

// root.render(el)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

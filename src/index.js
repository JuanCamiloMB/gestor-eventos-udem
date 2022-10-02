import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp_page from "./Pages/SignUp_page";
import SignIn_page from "./Pages/SignIn_page";
import reportWebVitals from "./reportWebVitals";

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/SignUp" element={<SignUp_page/>}/>
        <Route path="/SignIn" element={<SignIn_page/>}/>
        <Route path="*" element={"404"}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./components/App";
import { BrowserRouter, Route, Routes } from "react-router-dom";


// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <div>Hello world!</div>,
//   },
//   {
//     path: "/about",
//     element: <About />,
//   },
//   {
//     path: "/contact",
//     element: <Contact />,
//   }
// ]);

{/* <BrowserRouter>
   <Routes>
      <Route path="/login" element = {<div>this is login page</div>} />
      <Route path="/" element={<App />}>

      </Route>
   </Routes>
</BrowserRouter> */}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter >
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

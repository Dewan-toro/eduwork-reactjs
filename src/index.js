import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NewsPortalCC from "./components/04_Lifecycle_Components/index.jsx";
import NewsPortalFC from "./components/05_Hook/index.jsx";
import FormValidation from "./components/03_Form_Validation/index.jsx";
import StylingComponent from "./components/02_Styling_Component/index.jsx";
import Redux from "./components/06_Redux/index.jsx"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/home" element={<StylingComponent />} />
          <Route path="/portal-berita-cc" element={<NewsPortalCC />} />
          <Route path="/portal-berita-fc" element={<NewsPortalFC />} />
          <Route path="/sign-up" element={<FormValidation />} />
          <Route path="/redux" element={<Redux />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

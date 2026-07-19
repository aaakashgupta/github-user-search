import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SearchPage />} />
          <Route path="result/:username" element={<ResultPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
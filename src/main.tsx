import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App.tsx";

// import Home from "./components/Home.tsx";
// import Symposium from "./components/Symposium.tsx";
// import About from "./components/About.tsx";
// import NotFound from "./components/NotFound.tsx";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Symposium />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter> */}
  </StrictMode>
);

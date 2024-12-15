import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Start from "./views/Start"; // Corrected path
import Output from "./views/Output";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/Output" element={<Output />} />
      </Routes>
    </Router>
  );
}

export default App;

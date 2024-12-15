import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./App.css";
import Start from "./views/Start"; // Corrected path
import Output from "./views/Output";
import Question from "./views/Question";

function AnimatedRoutes() {
  const location = useLocation(); // Hook is now used inside Router context

  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="fade" timeout={300}>
        <Routes location={location}>
          <Route path="/" element={<Start />} />
          <Route path="/Output" element={<Output />} />
          <Route path="/Question" element={<Question />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default function RootApp() {
  return (
    <Router>
      <AnimatedRoutes />
    </Router>
  );
}

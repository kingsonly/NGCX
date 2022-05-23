import React from 'react';
import logo from './logo.svg';
//import './App.scss';
import LandingPage from "./Pages/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route >
        <Route index element={<LandingPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;

import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}


export default App
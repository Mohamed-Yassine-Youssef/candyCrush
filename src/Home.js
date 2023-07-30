import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StartPage from './StartPage';
import App from './App';
const Home = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />}/>
        <Route path="/game" element={<App />}/>
    </Routes>
  </BrowserRouter>
  )
}

export default Home
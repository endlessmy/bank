import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import routerList from './router/index';
import Home from './view/home';
import Card from './view/card';
import NavBottom from './components/navBottom'
import "./index.css";

export default function App() {
  return (
    <Router>
      <NavBottom></NavBottom>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/card" element={<Card />}></Route>
        </Routes>
    </Router>
  );
}
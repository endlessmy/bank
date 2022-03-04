import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, Redirect } from 'react-router-dom';
import routerList from './router/index';
import Home from './view/home';
import Card from './view/card';
import NavBottom from './components/navBottom'
import "./index.css";

export default function App() {
  const name = "John Doe";
  return (
    <Router>
      {/* <main>
        <nav>
          <ul>
            <li>
              <Link to="/home">首页</Link>
            </li>
            <li>
              <Link to="/card">银行卡</Link>
            </li>
          </ul>
        </nav>
        
      </main> */}
      <NavBottom></NavBottom>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/card" element={<Card />}></Route>
        </Routes>
    </Router>
  );
}
import React from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
// import routerList from './router/index';
import Home from './view/home';
import Card from './view/myMuisc';
import NavBottom from './components/navBottom';
import Fllow from "./view/fllow";
import Download from "./view/download";
import './style/comm.less'

export default function App() {
  return (
    <Router>
      <NavBottom></NavBottom>
      <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/home" exact element={<Home />}></Route>
            <Route path="/my" element={<Card />}></Route>
            <Route path="/friend" element={<Fllow />}></Route>
            <Route path="/download" element={<Download />}></Route>
        </Routes>
    </Router>
  );
}
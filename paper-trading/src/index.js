import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import FooterBar from './components/FooterBar/FooterBar';
import Portfolio from './components/Portfolio/Portfolio'
import Buy from './components/Buy/Buy'
import Sell from './components/Sell/Sell'
import Register from './components/Register/Register'
import Login from './components/Login/Login'

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<App />} >
        {/* <Route index element = {<Home />} /> */}
        <Route path = "/portfolio" element = {<Portfolio />} />
        <Route path = "/buy" element = {<Buy />} />
        <Route path = "/sell" element = {<Sell />} />
        <Route path = "Login" element = {<Login />} />
        <Route path = "Register" element = {<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>,
 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
 

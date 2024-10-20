import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Header from './Components/Header/Header';
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/signUp';
import Description from './Components/Description/Description';
import ProductListing from './Components/ProductListing/ProductListing';
import Dashboard from './Components/Dashboard/Dashboard';
import { Home } from './Components/Home/home';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App></App>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

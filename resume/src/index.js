import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Valentine from './pages/Valentine';
import { Routes, Route, HashRouter } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import Home from './pages/Home';
import Downloads from './pages/Downloads';
import Performance from './pages/Performance';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path="/skills" element={<Home/>}/>
        <Route path="/projects" element={<Home/>}/>
        <Route path="/valentine" element={<Valentine/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/performance" element={<Performance/>}/>
      </Routes>
    </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

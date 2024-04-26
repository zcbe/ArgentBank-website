import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home.jsx';
import SignIn from './pages/signin/signin.jsx';
import './sass/_Main.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
       {
      // Create Route with React Router
    }
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='signin' element={<SignIn />} />
      </Routes>
    </Router>
  </React.StrictMode>
);


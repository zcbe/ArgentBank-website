import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Header from './components/header.jsx';
import Home from './pages/home/home.jsx';
import Login from './pages/login/login.jsx';
import Profile from './pages/profile/profile.jsx';
import Error from './pages/errorPage/errorPage.jsx';
import './sass/_Main.scss';

export default function App () {
    const isConnected = useSelector((state) => state.auth.isConnected);

    return (
        <div>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='login' element={<Login />} />
                <Route 
                    path='profile' 
                    element={isConnected ? <Profile /> : <Navigate to="/login" />} 
                />
                <Route path='*' element={<Error />} />
            </Routes>
        </div>
    )  
}
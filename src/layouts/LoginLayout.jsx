import React from 'react';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const LoginLayout = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default LoginLayout;
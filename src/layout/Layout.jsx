import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <div className="flex gap-5">
                <Sidebar />
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
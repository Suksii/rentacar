import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {useUser} from "../context/UserContext.jsx";

const Layout = () => {

    return (
        <div>
            <Navbar />
            <div className="md:flex">
                <Sidebar/>
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
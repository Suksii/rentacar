import React from 'react';
import Navbar from "../components/Navbar.jsx";
import Sidebar from "../components/Sidebar.jsx";
import {Outlet} from "react-router-dom";
import {useUser} from "../context/UserContext.jsx";

const Layout = () => {

    const {isAdmin} = useUser();

    return (
        <div>
            <Navbar />
            <div className={`${!isAdmin && 'min-h-[calc(100vh-70px)] items-center'} md:flex`}>
                {isAdmin && <Sidebar />}
                <Outlet />
            </div>
        </div>
    );
};

export default Layout;
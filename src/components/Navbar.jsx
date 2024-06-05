import React from 'react';
import {Link} from "react-router-dom";

const Navbar = () => {

    const navItems = [
        {name: "Home", path: "/"},
        {name: "Cars", path: "/cars"},
        {name: "About", path: "/about"},
        {name: "Admin", path: "/admin-board"}
    ]

    return (
        <>
         <nav className="relative flex justify-around items-end p-5 bg-gray-900 text-white">
            <h1 className="absolute left-10 text-2xl font-semibold">Rent a Car</h1>
            <div className="flex justify-between gap-5">
                {navItems.map((item, index) => (
                    <Link key={index} to={item.path} className="text-lg font-semibold">{item.name}</Link>
                ))}
            </div>
        </nav>

        </>
    );
};

export default Navbar;
import React from 'react';

const Navbar = () => {

    const navItems = ["Home", "Cars", "About", "Contact"];

    return (
        <>
         <nav className="relative flex justify-around items-end p-5 bg-gray-900 text-white">
            <h1 className="absolute left-10 text-2xl font-semibold">Rent a Car</h1>
            <div className="flex justify-between gap-5">
                {navItems.map((item, index) => (
                    <p key={index} className="text-lg font-semibold">{item}</p>
                ))}
            </div>
        </nav>

        </>
    );
};

export default Navbar;
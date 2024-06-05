import React, {useState} from 'react';
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const sideMenu = [
        {
            id: 1,
            title: "Home",
            icon: <FaCar size={22}/>,
            path: "/"
        },
        {
            id: 2,
            title: "Cars",
            icon: <FaCar size={22} />,
            path: '/cars'
        },
        {
            id: 3,
            title: "About",
            icon: <FaCar size={22} />,
            path: '/about'
        },
        {
            id: 4,
            title: "Contact",
            icon: <FaCar size={22} />,
            path: '/contact'
        },
    ]

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () => {
        setIsOpen(prevState => !prevState);
    }

    return (
        <div className={`bg-gray-900 text-white ${isOpen ? 'w-[200px]' : 'w-[5rem]'} min-h-screen duration-500`}>
            <div className="flex justify-end items-center p-5">
                <button onClick={handleSidebar} className="text-2xl">
                    {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                </button>
            </div>
            <div className="w-fit mx-auto">
                {
                    sideMenu.map((item) => (
                        <Link key={item.id} to={item.path} className="flex items-center gap-3 py-10 duration-500">
                            <span className={isOpen ? 'flex justify-center' : ''}>{item.icon}</span>
                            <span className="text-xl">{isOpen && item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
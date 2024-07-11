import React, {useState} from 'react';
import {MdDateRange, MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight} from "react-icons/md";
import {FaUser, FaCar} from "react-icons/fa6";
import {Link} from "react-router-dom";

const Sidebar = () => {

    const sideMenu = [
        {
            id: 1,
            title: "Clients",
            icon: <FaUser size={22}/>,
            path: "/clients"
        },
        {
            id: 2,
            title: "Cars",
            icon: <FaCar size={22} />,
            path: '/add-car'
        },
        {
            id: 3,
            title: "Reservations",
            icon: <MdDateRange size={22} />,
            path: '/reservations'
        }
    ]

    const [isOpen, setIsOpen] = useState(false);

    const handleSidebar = () => {
        setIsOpen(prevState => !prevState);
    }

    const scrollToTop = () => window.scrollTo(0, 0);

    return (
        <div className={`bg-gray-900 text-white ${isOpen ? 'md:w-[200px]' : 'md:w-[5rem]'} w-full md:min-h-screen duration-500`}>
            <div className="hidden md:flex justify-end items-center p-5">
                <button onClick={handleSidebar} className="text-2xl hover:text-blue-400 duration-500">
                    {isOpen ? <MdKeyboardDoubleArrowLeft /> : <MdKeyboardDoubleArrowRight />}
                </button>
            </div>
            <div className="md:w-fit md:mx-auto flex justify-around md:flex-col">
                {
                    sideMenu.map((item) => (
                        <Link key={item.id}
                              to={item.path}
                              onClick={scrollToTop}
                              className="flex items-center gap-3 py-6 md:py-10 hover:text-blue-400 duration-500">
                            <span className={isOpen ? 'flex justify-center' : ''}>{item.icon}</span>
                            <span className="text-xl hidden md:block">{isOpen && item.title}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default Sidebar;
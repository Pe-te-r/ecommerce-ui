import { NavLink } from "react-router-dom";
import { useState } from "react";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="flex">
            <button 
                className="p-4 bg-gray-800 text-white md:hidden" 
                onClick={toggleSidebar}
            >
                ☰
            </button>
            <div className={`${isOpen ? 'block' : 'hidden'} md:block h-full w-64 bg-gray-800 text-white`}>
                <div className="py-4">
                    <h2 className="text-2xl font-semibold text-center">Admin Dashboard</h2>
                </div>
                <nav className="mt-10">
                    <ul>
                        <li className="mb-2">
                            <NavLink 
                                to="/admin/users" 
                                className={({ isActive }) => 
                                    `block px-4 py-2 hover:bg-gray-700 rounded-md ${isActive ? 'bg-gray-600' : ''}`
                                }
                            >
                                Users
                            </NavLink>
                        </li>
                        <li className="mb-2">
                            <NavLink 
                                to="/admin/locations" 
                                className={({ isActive }) => 
                                    `block px-4 py-2 hover:bg-gray-700 rounded-md ${isActive ? 'bg-gray-600' : ''}`
                                }
                            >
                                Locations
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Sidebar;

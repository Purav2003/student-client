"use client";
import React, { useState } from 'react';
import {
    Home,
    UserPlus,
    Users,
    BookPlus,
    BookOpen,
    FilePlus2,
    FileText,
    X,
    AlignLeft,
    LogOut
} from 'lucide-react'; import { useRouter, usePathname } from 'next/navigation';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();
    const pathname = usePathname();

    const links = [
        { name: 'Home', icon: <Home size={20} />, path: '/' },

        { name: 'Add New Student', icon: <UserPlus size={20} />, path: '/add-student' },
        { name: 'Student List', icon: <Users size={20} />, path: '/student-list' },

        { name: 'Add New Course', icon: <BookPlus size={20} />, path: '/add-course' },
        { name: 'Course List', icon: <BookOpen size={20} />, path: '/course-list' },

        { name: 'Add New Result', icon: <FilePlus2 size={20} />, path: '/add-result' },
        { name: 'Result List', icon: <FileText size={20} />, path: '/result-list' },

        { name: 'Logout', icon: <LogOut size={20} />, path: '/login', logout: true }
    ];

    const handleClick = (path) => {
        router.push(path);
        if (isOpen) {
            setIsOpen(false);
        }
    };


    const handleLogout = () => {
        typeof window !== 'undefined' && localStorage.removeItem('token'); // or sessionStorage.clear()
        router.push('/login'); // redirect to login page
    };


    return (
        <>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden fixed ${isOpen ? 'top-3' : 'top-2'} ${isOpen ? 'left-48' : 'left-4'} z-50 p-2 text-[#000000] rounded-lg`}
            >
                {isOpen ? <X size={36} /> : <AlignLeft size={30} />}
            </button>

            {/* Sidebar */}
            <div className={`fixed top-0 left-0 h-full w-64 bg-[#ffffff] border-r-4 border-[#000000] shadow-xl transform transition-transform duration-300 ease-in-out z-40 ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                {/* Header */}
                <div className="p-6 border-b-2 border-[#000000]">
                    <h2 className="text-2xl font-bold text-[#000000]">Student <br></br>Result Management System</h2>
                </div>

                {/* Navigation Links */}
                <div className="p-4 border-t-2 border-[#000000] space-y-2 flex flex-col justify-center items-center w-full">
                    {links.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => {
                                if (link.logout) {
                                    handleLogout();
                                } else {
                                    handleClick(link.path);
                                }
                            }}
                            className={`cursor-pointer w-full flex items-center gap-3 p-3 rounded-lg bg-gray-100 text-black hover:bg-gray-200 transition-all duration-200 ${pathname === link.path ? 'bg-slate-950 text-white hover:bg-slate-950/80' : ''
                                }`}
                        >
                            {link.icon}
                            <span>{link.name}</span>
                        </button>
                    ))}
                </div>
            </div>

            {/* Overlay for mobile */}
            {isOpen && (
                <div
                    className="lg:hidden fixed inset-0 bg-opacity-50 z-30"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
};

export default Sidebar;

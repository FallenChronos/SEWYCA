'use client';

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-slate-50 shadow-lg fixed w-full top-0 z-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Organization Name */}
                    <div className="flex items-center flex-shrink-0 gap-4">
                        <div className="relative w-[60px] h-[60px] flex-shrink-0">
                            <Image
                                src="/logo.png"
                                alt="NGO Logo"
                                fill
                                sizes="60px"
                                className="object-contain"
                                priority
                            />
                        </div>
                        {/* Larger screen logo text */}
                        <div className="hidden md:block">
                            <Link href="/">
                                <h1 className="text-xl lg:text-2xl text-slate-800 font-semibold leading-tight tracking-tight">
                                    Society for Empowerment of <br className="hidden lg:block" />
                                    <span className="text-blue-800">
                                        Women Youth and Children
                                    </span>{' '}
                                    for Action
                                </h1>
                            </Link>
                        </div>
                        {/* Smaller screen abbreviated logo text */}
                        <div className="block md:hidden">
                            <Link href="/">
                                <h1 className="text-2xl text-slate-800 font-extrabold leading-tight tracking-tight">
                                    SEWYCA
                                </h1>
                            </Link>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        <Link
                            href="/"
                            className="text-slate-600 hover:text-blue-700 font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                        >
                            Home
                        </Link>
                        {/* 
              Changed from `href="#about"` to `href="/#about"` 
              so it navigates back to the home page’s “About” section 
            */}
                        <Link
                            href="/#about"
                            className="text-slate-600 hover:text-blue-700 font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                        >
                            About
                        </Link>
                        <Link
                            href="/gallery"
                            className="text-slate-600 hover:text-blue-700 font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                        >
                            Gallery
                        </Link>
                        {/* 
              Changed from `href="#contact"` to `href="/#contact"` 
              so it navigates back to the home page’s “Contact” section 
            */}
                        <Link
                            href="/#contact"
                            className="text-slate-600 hover:text-blue-700 font-semibold transition-all duration-200 px-4 py-2 rounded-lg hover:bg-blue-50 active:bg-blue-100"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-700 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 p-2 rounded-lg hover:bg-blue-50"
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isOpen && (
                    <div className="md:hidden absolute left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
                        <div className="px-4 py-2 space-y-1">
                            <Link
                                href="/"
                                className="block px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Home
                            </Link>
                            {/* Same idea: changed to /#about */}
                            <Link
                                href="/#about"
                                className="block px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                About
                            </Link>
                            {/* Add missing Gallery link */}
                            <Link
                                href="/gallery"
                                className="block px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Gallery
                            </Link>
                            {/* Same idea: changed to /#contact */}
                            <Link
                                href="/#contact"
                                className="block px-4 py-3 text-slate-700 hover:text-blue-700 hover:bg-blue-50 rounded-lg font-medium transition-all duration-200"
                                onClick={() => setIsOpen(false)}
                            >
                                Contact
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;

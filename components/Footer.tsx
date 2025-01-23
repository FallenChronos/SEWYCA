import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-200">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                    {/* Organization Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-4">
                            <div className="relative w-[60px] h-[60px] md:w-[100px] md:h-[100px] flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="SEWYCA Logo"
                                    fill
                                    sizes="(max-width: 768px) 60px, 100px"
                                    priority
                                    className="object-contain rounded-full"
                                />
                            </div>
                            <div>
                                <h2 className="text-xl md:text-2xl font-semibold text-white">SEWYCA</h2>
                                <p className="text-slate-300 text-sm mt-1">Empowering Communities</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Link
                                href="mailto:sewyca2000@gmail.com"
                                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                            >
                                <Mail className="h-5 w-5 flex-shrink-0 group-hover:text-blue-400" />
                                <span className="text-sm md:text-base">sewyca2000@gmail.com</span>
                            </Link>
                            <Link
                                href="tel:+918959243939"
                                className="flex items-center gap-3 text-slate-300 hover:text-blue-400 transition-colors group"
                            >
                                <Phone className="h-5 w-5 flex-shrink-0 group-hover:text-blue-400" />
                                <span className="text-sm md:text-base">+91 895 924 3939</span>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links - Hidden on mobile */}
                    <div className="hidden md:block lg:mx-auto z-10">
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <nav className="space-y-3">
                            <Link
                                href="/"
                                className="block text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                Home
                            </Link>
                            <Link
                                href="/#about"
                                className="block text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                About
                            </Link>
                            <Link
                                href="/gallery"
                                className="block text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                Gallery
                            </Link>
                            <Link
                                href="/#contact"
                                className="block text-slate-300 hover:text-blue-400 transition-colors"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>

                    {/* Address */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Our Office</h3>
                        <div className="flex gap-3 text-slate-300 group">
                            <MapPin className="h-5 w-5 flex-shrink-0 mt-1 group-hover:text-blue-400" />
                            <address className="not-italic text-sm md:text-base leading-relaxed hover:text-blue-400 transition-colors">
                                117/ M/ 2, Double Pulia, Kakadev,<br />
                                Rawatpur P.O, Kanpur Nagar,<br />
                                Uttar Pradesh- 208019
                            </address>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-8 lg:mt-16 pt-6 lg:pt-8 border-t border-slate-800">
                    <p className="text-slate-400 text-xs md:text-sm text-center">
                        © {new Date().getFullYear()} Society for Empowerment of Women Youth and Children for Action. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
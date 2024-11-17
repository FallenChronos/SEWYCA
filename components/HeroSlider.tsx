'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Mail } from 'lucide-react';

const slides = [
    {
        image: '/slider1.jpeg',
        title: 'Welcome to Hotel Agrawal Pride',
        desc: 'Marchikote Square, Puri, Odisha 752001',
    },
    {
        image: '/slider2.jpeg',
        title: 'Exquisite Accommodations',
        desc: 'In the Heart of Downtown',
    },
    {
        image: '/slider3.jpeg',
        title: 'Experience Culinary Excellence',
        desc: 'Indulge in dishes crafted by our chefs.',
    },
    {
        image: '/slider4.jpeg',
        title: 'Relax and Unwind',
        desc: 'Oasis in the City',
    },
    {
        image: '/slider5.jpeg',
        title: 'Your Occasions are our celebrations',
        desc: 'Organize your events with us'
    }
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    if (!isMounted) {
        return <div className="h-[70vh] bg-gray-100" />;
    }

    return (
        <div className="relative h-[85vh] w-full overflow-hidden font-['Inter']">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0"
                >
                    <Image
                        src={slides[currentSlide].image}
                        alt={slides[currentSlide].title}
                        fill={true}
                        style={{ objectFit: 'fill' }}
                        quality={100}
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 flex items-center justify-center">
                        <div className="text-center text-white px-4 max-w-4xl mx-auto">
                            <motion.h1
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="text-4xl md:text-6xl font-black mb-4 font-['Clash_Display']"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.h5
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="text-xl md:text-2xl mb-2 text-gray-200"
                            >
                                {slides[currentSlide].desc}
                            </motion.h5>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="flex items-center justify-center gap-4 flex-wrap"
                            >
                                <a
                                    href="mailto:contact@example.com"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
                                >
                                    <Mail className="w-5 h-5" />
                                    <span>Contact Us</span>
                                </a>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default HeroSlider;
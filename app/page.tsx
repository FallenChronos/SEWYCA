'use client';

import AboutPage from '@/components/About';
import ContactForm from '@/components/ContactForm';
import HeroSlider from '@/components/HeroSlider';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const HomePage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return <main className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100" />;
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 font-['Inter'] overflow-hidden">
      <HeroSlider />
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 z-0">
        {/* Animated gradient overlay */}
        <motion.div
          animate={{
            backgroundPosition: ['0% 0%', '100% 100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 bg-[linear-gradient(120deg,#84fab0_0%,#8fd3f4_100%)] opacity-[0.07]"
          style={{
            backgroundSize: '200% 200%',
          }}
        />
        {/* Animated dot pattern */}
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: 150,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 opacity-[0.03]"
        >
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </motion.div>
        {/* Floating particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-br from-emerald-400 to-blue-400 rounded-full opacity-20"
              animate={{
                x: [
                  Math.random() * window.innerWidth,
                  Math.random() * window.innerWidth,
                ],
                y: [
                  Math.random() * window.innerHeight,
                  Math.random() * window.innerHeight,
                ],
              }}
              transition={{
                duration: Math.random() * 10 + 20,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content Area with Enhanced Animations */}
      <div className="relative z-10">
        {/* Vision & Mission Section */}
        <section className="py-24 px-4 md:px-5">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, margin: "-100px" }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4 font-['Clash_Display'] hover:scale-105 transition-transform duration-300">
                Our Purpose
              </h2>
              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"
                whileInView={{
                  width: ["0%", "8rem"],
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision Card with enhanced hover effects */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-full relative p-8 md:p-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl transition-all duration-300 border border-white/20 group-hover:shadow-emerald-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-['Clash_Display'] group-hover:scale-105 transition-transform duration-300">
                      Vision
                    </h3>
                    <motion.div
                      className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We envisage a society where all experience fraternity liberty equality and justice irrespective of cast, greed and gender.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card with enhanced hover effects */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
                whileHover={{ scale: 1.02 }}
              >
                <div className="h-full relative p-8 md:p-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl transition-all duration-300 border border-white/20 group-hover:shadow-blue-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-['Clash_Display'] group-hover:scale-105 transition-transform duration-300">
                      Mission
                    </h3>
                    <motion.div
                      className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6"
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      To empower the powerless and voiceless especially dalits, tribals and backward classes with more emphasis on women, youth and children by educating,  conscentising, organizing and supporting them in their struggles.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Rest of the content remains the same but with enhanced Image hover effects */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4 font-['Clash_Display'] hover:scale-105 transition-transform duration-300">
                Some of Our Work
              </h2>
              <motion.div
                className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full"
                whileInView={{
                  width: ["0%", "8rem"],
                }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              />
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Health Camps",
                  description: "We conduct regular health camps in remote and underprivileged areas.",
                  image: "/work1.jpeg"
                },
                {
                  title: "Awareness Campaigns",
                  description: "Spreading awareness on social issues among the masses through meetups and events.",
                  image: "/work2.jpeg"
                },
                {
                  title: "Women Empowerment",
                  description: "Conducting regular workshops and training sessions focusing on empowering women.",
                  image: "/work3.jpeg"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={300}
                    height={300}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-bold mb-3 font-['Clash_Display']">{item.title}</h3>
                    <p className="text-base text-gray-100">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id='about'>
          <AboutPage />
        </section>

        <section id='contact'>
          <ContactForm />
        </section>
      </div>
    </main>
  );
};

export default HomePage;
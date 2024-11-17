'use client';

import AboutPage from '@/components/About';
import HeroSlider from '@/components/HeroSlider';
import { motion } from 'framer-motion';
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
    <main className="min-h-screen bg-gradient-to-br from-slate-100 to-gray-200 font-['Inter']">
      <HeroSlider />
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,#84fab0_0%,#8fd3f4_100%)] opacity-[0.07]" />
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="dotPattern" x="0" y="0" width="16" height="16" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dotPattern)" />
          </svg>
        </div>
      </div>

      {/* Content Area */}
      <div className="relative z-10">
        {/* Vision & Mission Section */}
        <section className="py-24 px-4 md:px-5">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4 font-['Clash_Display']">
                Our Purpose
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              {/* Vision Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full relative p-8 md:p-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl transform transition-transform group-hover:scale-[1.02]" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-['Clash_Display']">
                      Vision
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      We envision a society built on the pillars of equality, justice, and brotherhood, where every individual thrives and reaches their fullest potential, regardless of their caste, creed, or gender.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Mission Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="group h-full"
              >
                <div className="h-full relative p-8 md:p-10 bg-white/80 backdrop-blur-xl rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-blue-500/5 rounded-3xl transform transition-transform group-hover:scale-[1.02]" />
                  <div className="relative">
                    <h3 className="text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent font-['Clash_Display']">
                      Mission
                    </h3>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 rounded-full mb-6" />
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Our mission is to transform the lives of marginalized communities, especially Dalits, tribals, and backward classes. Through education, community organizing, and sustained support, we empower women, youth, and children to build a future of dignity.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Section */}
        <section className="py-24 px-4 md:px-6">
          <div className="container mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4 font-['Clash_Display']">
                Some of Our Work
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
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
                  className="group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl"
                >
                  <img
                    src={item.image}
                    alt={item.title}
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

        <div id='about'>
          <AboutPage />
        </div>

      </div>
    </main>
  );
};

export default HomePage;
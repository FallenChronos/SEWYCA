'use client';

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion as m } from 'framer-motion';
import { Activity, ArrowRight, History, Users } from 'lucide-react';
import { useEffect, useState } from 'react';

const AboutPage = () => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Grouped activities by category for better organization
    const groupedActivities = {
        "Community Development": [
            "Formation and maintenance of Self Help Groups for women",
            "Groups for adolescent girls",
            "Children's Parliament",
            "Non formal education in slums for the rag picking children"
        ],
        "Health & Wellness": [
            "Community health awareness through mass awareness programmes",
            "Community health programs, Medical camps, health check-ups and tele medicine",
            "Motivation for hospital deliveries and immunization",
            "Physiotherapy and exercise for all age groups"
        ],
        "Education & Training": [
            "Different skill training programs for the skill development of adolescent girls",
            "Capacity building programs",
            "Awareness campaigns in schools",
            "Exposure visits and internship programs"
        ],
        "Support Services": [
            "Inclusive development program for differently abled children",
            "Counselling and regular home visits",
            "Home visits for special attention and care",
            "Assistance for social security schemes"
        ],
        "Outreach": [
            "IEC activities like wall paintings",
            "Observance of international and national days",
            "Networking with government and like minded organizations",
            "Awareness sessions, group discussions and grass root level dialogue meetings"
        ]
    };

    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -20 },
        transition: { duration: 0.5 }
    };

    const Content = () => (
        <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-blue-200">
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[80vh] overflow-hidden">
                <m.div
                    className="absolute inset-0 z-0"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src="/banner.jpeg"
                        alt="NGO Hero Image"
                        className="w-full h-full object-cover"
                    />
                </m.div>
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-slate-900/90" />

                <m.div
                    className="relative container mx-auto px-4 h-full flex flex-col justify-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                >
                    <Badge className="mb-6 w-fit bg-blue-500 hover:bg-blue-600">Established 1990</Badge>
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white max-w-4xl leading-tight">
                        Society for Empowerment of Women Youth and Children
                    </h1>
                    <p className="text-xl md:text-2xl text-blue-100 max-w-2xl">
                        Empowering communities, transforming lives through sustainable development and inclusive growth.
                    </p>
                </m.div>
            </section>

            {/* Mission Section with Cards */}
            <m.section
                className="py-20 relative"
                {...fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <Users className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Our Aim</h3>
                                <p className="text-gray-600">To empower marginalized communities through sustainable development initiatives and inclusive programs.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <Activity className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Our Impact</h3>
                                <p className="text-gray-600">Touching over 1 million lives across 100+ slums with 30+ years of dedicated service.</p>
                            </CardContent>
                        </Card>
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardContent className="pt-6">
                                <History className="w-10 h-10 text-blue-600 mb-4" />
                                <h3 className="text-xl font-semibold mb-3">Our Journey</h3>
                                <p className="text-gray-600">From a single school in 1990 to a comprehensive community development organization.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </m.section>

            {/* About Section with Timeline */}
            <m.section
                className="py-20 bg-white relative"
                {...fadeInUp}
            >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-transparent to-transparent" />
                <div className="container mx-auto px-4 relative">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div>
                                <Badge className="mb-6">About Us</Badge>
                                <h2 className="text-4xl font-bold mb-6">Building Better Communities</h2>
                                <p className="text-gray-600 leading-relaxed mb-8">
                                    SEWYCA is a non-profit charitable organization registered under the Society's Registration Act 1860, initiated by the Congregation of Ursulines of Mary Immaculate (UMI). Our focus remains on assisting communities at grassroots levels to build better futures.
                                </p>
                                <div className="bg-blue-50 p-6 rounded-lg border border-blue-100">
                                    <p className="text-gray-700 italic">
                                        "In order to reach the most needy, we have set our target group as the marginalized and oppressed in society."
                                    </p>
                                </div>
                            </div>
                            <div className="relative">
                                <img
                                    src="/work3.jpeg"
                                    alt="Our Work"
                                    className="rounded-lg shadow-xl w-full"
                                />
                                <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-lg shadow-lg">
                                    <div className="flex gap-4">
                                        <div>
                                            <p className="text-4xl font-bold text-blue-600">30+</p>
                                            <p className="text-sm text-gray-600">Years of Service</p>
                                        </div>
                                        <div className="border-l border-gray-200 pl-4">
                                            <p className="text-4xl font-bold text-blue-600">100+</p>
                                            <p className="text-sm text-gray-600">Communities Served</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </m.section>

            {/* Activities Section with Tabs */}
            <m.section
                className="py-20 relative"
                {...fadeInUp}
            >
                <div className="container mx-auto px-4">
                    <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-12">
                            <Badge className="mb-4">Our Work</Badge>
                            <h2 className="text-4xl text-gray-700 font-bold mb-4">Major Activities</h2>
                            <p className="text-gray-800 max-w-2xl mx-auto">
                                Our comprehensive approach addresses various aspects of community development through targeted programs and initiatives.
                            </p>
                        </div>

                        <Tabs defaultValue="Community Development" className="w-full">
                            <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 mb-8">
                                {Object.keys(groupedActivities).map((category) => (
                                    <TabsTrigger
                                        key={category}
                                        value={category}
                                        className="text-sm"
                                    >
                                        {category}
                                    </TabsTrigger>
                                ))}
                            </TabsList>

                            {Object.entries(groupedActivities).map(([category, activities]) => (
                                <TabsContent key={category} value={category}>
                                    <div className="grid md:grid-cols-2 gap-4">
                                        {activities.map((activity, index) => (
                                            <m.div
                                                key={index}
                                                className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                                                whileHover={{ x: 5 }}
                                            >
                                                <ArrowRight className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                                                <p className="text-gray-600">{activity}</p>
                                            </m.div>
                                        ))}
                                    </div>
                                </TabsContent>
                            ))}
                        </Tabs>
                    </div>
                </div>
            </m.section>
        </div>
    );

    return mounted ? <Content /> : null;
};

export default AboutPage;
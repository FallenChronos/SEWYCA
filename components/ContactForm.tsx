'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { useToast } from '@/hooks/use-toast';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactForm = () => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });


    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Your submission logic here

            toast({
                title: "Success!",
                description: "Your message has been sent successfully. We'll get back to you soon!",
                variant: "default",
                className: "bg-emerald-500 text-white border-none",
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            toast({
                title: "Error",
                description: "Something went wrong. Please try again later.",
                variant: "destructive",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className="py-24 px-4 md:px-6">
            <div className="container mx-auto max-w-7xl">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600 mb-4 font-['Clash_Display']">
                        Get in Touch
                    </h2>
                    <div className="w-32 h-1.5 bg-gradient-to-r from-emerald-500 to-blue-500 mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 items-start">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <Card className="bg-white/80 backdrop-blur-xl border-white/20">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                    Contact Information
                                </CardTitle>
                                <CardDescription>
                                    Reach out to us through any of these channels
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-emerald-100">
                                        <Mail className="w-5 h-5 text-emerald-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Email</p>
                                        <p className="font-medium">contact@example.com</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-blue-100">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Phone</p>
                                        <p className="font-medium">+1 (555) 123-4567</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-4">
                                    <div className="p-3 rounded-full bg-indigo-100">
                                        <MapPin className="w-5 h-5 text-indigo-600" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500">Address</p>
                                        <p className="font-medium">123 Example Street, City, Country</p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <Card className="bg-white/80 backdrop-blur-xl border-white/20">
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
                                    Send us a Message
                                </CardTitle>
                                <CardDescription>
                                    Fill out the form below and we'll get back to you as soon as possible
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="space-y-2">
                                        <Label htmlFor="name">Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            placeholder="Your name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="email">Email</Label>
                                        <Input
                                            id="email"
                                            name="email"
                                            type="email"
                                            placeholder="your@email.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="subject">Subject</Label>
                                        <Input
                                            id="subject"
                                            name="subject"
                                            placeholder="What's this about?"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="bg-white/50"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor="message">Message</Label>
                                        <Textarea
                                            id="message"
                                            name="message"
                                            placeholder="Your message..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            className="min-h-[120px] bg-white/50"
                                        />
                                    </div>
                                    <Button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-emerald-600 to-blue-600 hover:from-emerald-700 hover:to-blue-700 text-white"
                                        disabled={isSubmitting}
                                    >
                                        {isSubmitting ? (
                                            "Sending..."
                                        ) : (
                                            <>
                                                <Send className="w-4 h-4 mr-2" /> Send Message
                                            </>
                                        )}
                                    </Button>
                                </form>
                            </CardContent>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactForm;
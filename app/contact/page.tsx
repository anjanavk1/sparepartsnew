'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1000));
        alert('Thank you for contacting us! We will get back to you soon.');
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        setIsSubmitting(false);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-brand-black via-gray-900 to-brand-black py-20">
                <div className="absolute inset-0 opacity-10">
                    <div className="h-full w-full bg-[radial-gradient(#e63946_1px,transparent_1px)] [background-size:20px_20px]"></div>
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                            Get in <span className="text-brand-red">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-300">
                            Have questions? We're here to help you find the right parts for your vehicle
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Phone className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Phone</h3>
                            <a href="tel:+97165568682" className="text-gray-600 text-sm hover:text-brand-red transition-colors">06 556 8682</a>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Email</h3>
                            <a href="mailto:info@jesrparts.com" className="text-gray-600 text-sm hover:text-brand-red transition-colors">info@jesrparts.com</a>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <MapPin className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Location</h3>
                            <p className="text-gray-600 text-sm">
                                JESR AL MANAMAH AUTO SPARE PARTS TR, Near binladin signal - Industrial Area 10 - Industrial Area - Sharjah
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-xl shadow-sm border text-center">
                            <div className="w-14 h-14 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
                                <Clock className="h-6 w-6 text-white" />
                            </div>
                            <h3 className="font-bold mb-2">Hours</h3>
                            <p className="text-gray-600 text-sm">Sat-Thu: 8AM-8PM</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        {/* Contact Form */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Full Name *
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email Address *
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                        placeholder="06 556 8682"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject *
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                        placeholder="Parts inquiry"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message *
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        rows={5}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-brand-red focus:border-transparent"
                                        placeholder="Tell us about your requirements..."
                                    />
                                </div>
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-brand-red hover:bg-red-700 text-white font-bold py-4"
                                >
                                    {isSubmitting ? 'Sending...' : 'Send Message'}
                                </Button>
                            </form>
                        </div>

                        {/* Additional Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-6">Visit Our Store</h2>
                            <div className="bg-gray-50 p-8 rounded-xl mb-6">
                                <h3 className="font-bold text-lg mb-4">JESR AL MANAMAH</h3>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <MapPin className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Address</p>
                                            <p className="text-gray-600">
                                                JESR AL MANAMAH AUTO SPARE PARTS TR, Near binladin signal - Industrial Area 10 - Industrial Area - Sharjah
                                            </p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Phone className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Phone</p>
                                            <a href="tel:+97165568682" className="text-gray-600 hover:text-brand-red transition-colors">06 556 8682</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Mail className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Email</p>
                                            <a href="mailto:info@jesrparts.com" className="text-gray-600 hover:text-brand-red transition-colors">info@jesrparts.com</a>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <Clock className="h-5 w-5 text-brand-red flex-shrink-0 mt-1" />
                                        <div>
                                            <p className="font-semibold">Business Hours</p>
                                            <p className="text-gray-600">Saturday - Thursday: 8:00 AM - 8:00 PM</p>
                                            <p className="text-gray-600">Friday: Closed</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-brand-red/10 p-6 rounded-xl border-2 border-brand-red/20">
                                <h4 className="font-bold mb-3">Need Immediate Assistance?</h4>
                                <p className="text-gray-700 mb-4">
                                    For urgent inquiries or bulk orders, call us directly and speak with our parts specialists.
                                </p>
                                <a
                                    href="tel:+97165568682"
                                    className="inline-block bg-brand-red hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                                >
                                    Call Now
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Placeholder */}
            <section className="py-0">
                <div className="w-full h-96 bg-gray-200 flex items-center justify-center">
                    <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Map Location</p>
                        <p className="text-sm text-gray-400">
                            JESR AL MANAMAH AUTO SPARE PARTS TR, Near binladin signal - Industrial Area 10 - Industrial Area - Sharjah
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

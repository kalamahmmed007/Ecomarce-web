import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = () => {
        if (formData.name && formData.email && formData.subject && formData.message) {
            setSubmitted(true);
            setTimeout(() => {
                setSubmitted(false);
                setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            }, 3000);
        }
    };

    return (
        <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-slate-50 to-slate-100 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-7xl">
                <div className="mb-12 text-center">
                    <h1 className="mb-4 text-4xl font-bold text-slate-900">Get in Touch</h1>
                    <p className="text-lg text-slate-600">Have questions? We'd love to hear from you.</p>
                </div>

                <div className="grid gap-8 mb-12 md:grid-cols-3">
                    <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-blue-100 rounded-full">
                            <Mail className="w-6 h-6 text-blue-600" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Email Us</h3>
                        <p className="text-slate-600">support@ecommerce.com</p>
                    </div>

                    <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-green-100 rounded-full">
                            <Phone className="w-6 h-6 text-green-600" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Call Us</h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                    </div>

                    <div className="p-6 transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
                        <div className="flex items-center justify-center w-12 h-12 mb-4 bg-purple-100 rounded-full">
                            <MapPin className="w-6 h-6 text-purple-600" />
                        </div>
                        <h3 className="mb-2 text-lg font-semibold text-slate-900">Visit Us</h3>
                        <p className="text-slate-600">123 Commerce St, NY 10001</p>
                    </div>
                </div>

                <div className="p-8 bg-white shadow-lg rounded-xl md:p-12">
                    <div className="space-y-6">
                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-slate-700">
                                    Full Name *
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 transition border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-slate-700">
                                    Email Address *
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 transition border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid gap-6 md:grid-cols-2">
                            <div>
                                <label htmlFor="phone" className="block mb-2 text-sm font-medium text-slate-700">
                                    Phone Number
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 transition border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="+1 (555) 000-0000"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-slate-700">
                                    Subject *
                                </label>
                                <select
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 transition border rounded-lg outline-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                >
                                    <option value="">Select a subject</option>
                                    <option value="order">Order Inquiry</option>
                                    <option value="product">Product Question</option>
                                    <option value="shipping">Shipping & Delivery</option>
                                    <option value="return">Returns & Refunds</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-slate-700">
                                Message *
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="6"
                                className="w-full px-4 py-3 transition border rounded-lg outline-none resize-none border-slate-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Tell us how we can help you..."
                            ></textarea>
                        </div>

                        <div>
                            <button
                                onClick={handleSubmit}
                                className="flex items-center justify-center w-full gap-2 px-8 py-3 font-medium text-white transition-colors bg-blue-600 rounded-lg md:w-auto hover:bg-blue-700 focus:ring-4 focus:ring-blue-300"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </div>

                        {submitted && (
                            <div className="p-4 border border-green-200 rounded-lg bg-green-50">
                                <p className="font-medium text-green-800">Thank you! Your message has been sent successfully.</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
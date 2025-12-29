import { ShoppingBag, Users, Award, TrendingUp, Heart, Globe, Shield, Zap } from 'lucide-react';

export default function About() {
    const stats = [
        { value: '10M+', label: 'Happy Customers' },
        { value: '50K+', label: 'Products' },
        { value: '100+', label: 'Countries' },
        { value: '15+', label: 'Years Experience' }
    ];

    const values = [
        {
            icon: Heart,
            title: 'Customer First',
            description: 'Every decision we make puts our customers at the center. Your satisfaction drives everything we do.'
        },
        {
            icon: Shield,
            title: 'Trust & Security',
            description: 'We protect your data and ensure secure transactions with industry-leading security measures.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Delivering quality products worldwide with fast, reliable shipping to over 100 countries.'
        },
        {
            icon: Zap,
            title: 'Innovation',
            description: 'Constantly evolving to bring you the latest products and seamless shopping experiences.'
        }
    ];

    const team = [
        { name: 'Sarah Johnson', role: 'CEO & Founder', image: '👩‍💼' },
        { name: 'Michael Chen', role: 'Chief Technology Officer', image: '👨‍💻' },
        { name: 'Emily Rodriguez', role: 'Head of Operations', image: '👩‍💼' },
        { name: 'David Kim', role: 'Customer Experience Lead', image: '👨‍💼' }
    ];

    const milestones = [
        { year: '2010', event: 'Company Founded', description: 'Started with a vision to revolutionize online shopping' },
        { year: '2013', event: 'International Expansion', description: 'Expanded to 20 countries across 3 continents' },
        { year: '2017', event: 'Mobile App Launch', description: 'Launched our award-winning mobile shopping app' },
        { year: '2020', event: '10M Customers', description: 'Reached the milestone of serving 10 million customers' },
        { year: '2023', event: 'Sustainability Initiative', description: 'Launched eco-friendly packaging and carbon-neutral shipping' },
        { year: '2025', event: 'AI Shopping Assistant', description: 'Introduced personalized AI-powered shopping recommendations' }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <div className="px-4 py-20 text-white bg-gradient-to-r from-blue-600 to-purple-600">
                <div className="mx-auto text-center max-w-7xl">
                    <h1 className="mb-6 text-5xl font-bold">About Our Story</h1>
                    <p className="max-w-3xl mx-auto text-xl leading-relaxed">
                        We're on a mission to make online shopping easier, faster, and more enjoyable for everyone around the world.
                    </p>
                </div>
            </div>

            {/* Stats Section */}
            <div className="px-4 py-16 bg-slate-50">
                <div className="mx-auto max-w-7xl">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="text-center">
                                <div className="mb-2 text-4xl font-bold text-blue-600">{stat.value}</div>
                                <div className="font-medium text-slate-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Our Story */}
            <div className="px-4 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="grid items-center gap-12 md:grid-cols-2">
                        <div>
                            <h2 className="mb-6 text-4xl font-bold text-slate-900">Our Story</h2>
                            <div className="space-y-4 leading-relaxed text-slate-600">
                                <p>
                                    Founded in 2010, we started with a simple idea: make online shopping accessible, reliable, and delightful for everyone. What began as a small team with big dreams has grown into a global ecommerce platform serving millions of customers worldwide.
                                </p>
                                <p>
                                    We believe shopping should be more than just transactions. It's about discovering products you love, connecting with brands that share your values, and enjoying a seamless experience from browsing to delivery.
                                </p>
                                <p>
                                    Today, we partner with thousands of brands and sellers to bring you an incredible selection of products, backed by world-class customer service and cutting-edge technology.
                                </p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl h-96">
                            <ShoppingBag className="w-32 h-32 text-blue-600" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Our Values */}
            <div className="px-4 py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Values</h2>
                        <p className="max-w-2xl mx-auto text-xl text-slate-600">
                            The principles that guide everything we do
                        </p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {values.map((value, idx) => {
                            const Icon = value.icon;
                            return (
                                <div key={idx} className="p-8 transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                                    <div className="flex items-center justify-center w-16 h-16 mb-6 bg-blue-100 rounded-full">
                                        <Icon className="w-8 h-8 text-blue-600" />
                                    </div>
                                    <h3 className="mb-3 text-xl font-bold text-slate-900">{value.title}</h3>
                                    <p className="leading-relaxed text-slate-600">{value.description}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Timeline */}
            <div className="px-4 py-20">
                <div className="max-w-5xl mx-auto">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-900">Our Journey</h2>
                        <p className="text-xl text-slate-600">Key milestones that shaped our story</p>
                    </div>
                    <div className="space-y-8">
                        {milestones.map((milestone, idx) => (
                            <div key={idx} className="flex gap-8 group">
                                <div className="flex-shrink-0 w-24 text-right">
                                    <div className="text-2xl font-bold text-blue-600">{milestone.year}</div>
                                </div>
                                <div className="flex flex-col items-center flex-shrink-0">
                                    <div className="w-4 h-4 transition-transform bg-blue-600 rounded-full group-hover:scale-125"></div>
                                    {idx !== milestones.length - 1 && (
                                        <div className="w-0.5 h-full bg-slate-200 mt-2"></div>
                                    )}
                                </div>
                                <div className="flex-1 pb-8">
                                    <h3 className="mb-2 text-xl font-bold text-slate-900">{milestone.event}</h3>
                                    <p className="text-slate-600">{milestone.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="px-4 py-20 bg-slate-50">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-4xl font-bold text-slate-900">Meet Our Team</h2>
                        <p className="text-xl text-slate-600">The people behind our success</p>
                    </div>
                    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                        {team.map((member, idx) => (
                            <div key={idx} className="p-8 text-center transition-shadow bg-white shadow-md rounded-xl hover:shadow-lg">
                                <div className="mb-4 text-6xl">{member.image}</div>
                                <h3 className="mb-2 text-xl font-bold text-slate-900">{member.name}</h3>
                                <p className="text-slate-600">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="px-4 py-20">
                <div className="mx-auto max-w-7xl">
                    <div className="p-12 text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl">
                        <div className="grid items-center gap-12 md:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-4xl font-bold">Why Choose Us?</h2>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-4">
                                        <Award className="flex-shrink-0 w-6 h-6 mt-1" />
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold">Quality Guarantee</h3>
                                            <p className="text-blue-100">Every product is carefully vetted to meet our high standards</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <TrendingUp className="flex-shrink-0 w-6 h-6 mt-1" />
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold">Best Prices</h3>
                                            <p className="text-blue-100">Competitive pricing with regular deals and discounts</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-4">
                                        <Users className="flex-shrink-0 w-6 h-6 mt-1" />
                                        <div>
                                            <h3 className="mb-1 text-lg font-bold">24/7 Support</h3>
                                            <p className="text-blue-100">Our customer service team is always here to help</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-center">
                                <div className="p-12 text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl">
                                    <div className="mb-2 text-5xl font-bold">4.9/5</div>
                                    <div className="text-xl">Customer Rating</div>
                                    <div className="mt-2 text-blue-100">Based on 500K+ reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="px-4 py-20 bg-slate-50">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="mb-6 text-4xl font-bold text-slate-900">Join Our Community</h2>
                    <p className="mb-8 text-xl text-slate-600">
                        Be part of millions of satisfied customers who trust us for their shopping needs
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <button className="px-8 py-4 font-semibold text-white transition-colors bg-blue-600 rounded-lg hover:bg-blue-700">
                            Start Shopping
                        </button>
                        <button className="px-8 py-4 font-semibold transition-colors bg-white border-2 rounded-lg text-slate-900 border-slate-300 hover:border-blue-600">
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
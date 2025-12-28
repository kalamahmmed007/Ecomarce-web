import React from "react";

const AboutPage = () => {
    return (

        <div className="bg-red-50 text-black">
            {/* Hero Section */}
            <section className="text-Dark bg-white px-6 py-20 text-center">
                <h1 className="mb-4 text-5xl font-extrabold text-red-600">About Us</h1>
                <p className="text-dark mx-auto max-w-2xl text-lg">
                    We are committed to delivering top-notch solutions that blend innovation, quality, and style.
                </p>
            </section>

            {/* Mission & Vision */}
            <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-2">
                <div>
                    <h2 className="mb-4 text-3xl font-bold text-red-600">Our Mission</h2>
                    <p className="text-gray-700">
                        To empower businesses and individuals by providing cutting-edge digital solutions
                        that drive growth, efficiency, and creativity.
                    </p>
                </div>
                <div>
                    <h2 className="mb-4 text-3xl font-bold text-red-600">Our Vision</h2>
                    <p className="text-gray-700">
                        To become a global leader in innovative technology solutions, known for
                        transforming ideas into impactful realities.
                    </p>
                </div>
            </section>

            {/* Team Section */}
            <section className="bg-white px-6 py-20">
                <h2 className="mb-12 text-center text-4xl font-bold text-black">Meet Our Team</h2>
                <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 md:grid-cols-3">
                    {/* Team Member */}
                    <div className="rounded-xl bg-red-50 p-6 text-center shadow-lg transition hover:shadow-2xl">
                        <img
                            src="/images/team1.jpg"
                            alt="Team Member"
                            className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                        />
                        <h3 className="mb-1 text-xl font-bold">Jane Doe</h3>
                        <p className="mb-2 font-semibold text-red-600">CEO</p>
                        <p className="text-sm text-gray-700">
                            Visionary leader driving innovation and strategic growth.
                        </p>
                    </div>

                    <div className="rounded-xl bg-red-50 p-6 text-center shadow-lg transition hover:shadow-2xl">
                        <img
                            src="/images/team2.jpg"
                            alt="Team Member"
                            className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                        />
                        <h3 className="mb-1 text-xl font-bold">John Smith</h3>
                        <p className="mb-2 font-semibold text-red-600">CTO</p>
                        <p className="text-sm text-gray-700">
                            Tech wizard crafting scalable and innovative solutions.
                        </p>
                    </div>

                    <div className="rounded-xl bg-red-50 p-6 text-center shadow-lg transition hover:shadow-2xl">
                        <img
                            src="/images/team3.jpg"
                            alt="Team Member"
                            className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                        />
                        <h3 className="mb-1 text-xl font-bold">Emily Davis</h3>
                        <p className="mb-2 font-semibold text-red-600">Designer</p>
                        <p className="text-sm text-gray-700">
                            Crafting beautiful and intuitive user experiences.
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-gray px-6 py-20 text-center text-white">
                <h2 className="mb-4 text-4xl font-bold text-red-600">Join Us On Our Journey</h2>
                <p className="text-dark transf mb-1 text-xl font-bold">
                    Be part of our mission to innovate and transform the digital world.
                </p>
                <button className="rounded-lg bg-red-600 px-8 py-3 font-bold text-white transition hover:bg-red-700">
                    Contact Us
                </button>
            </section>
        </div>

    );
};

export default AboutPage;

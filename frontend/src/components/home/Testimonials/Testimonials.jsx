// src/components/home/Testimonials/Testimonials.jsx
import TestimonialCard from "./TestimonialCard";

const testimonials = [
    { id: 1, name: "Jane Doe", position: "Customer", message: "Amazing products and fast delivery!", avatar: "/images/user1.jpg" },
    { id: 2, name: "John Smith", position: "Customer", message: "The quality exceeded my expectations.", avatar: "/images/user2.jpg" },
    { id: 3, name: "Alice Johnson", position: "Customer", message: "Excellent customer service!", avatar: "/images/user3.jpg" },
];

const Testimonials = () => (
    <section className="bg-gray-50 py-12">
        <h2 className="mb-6 text-center text-2xl font-semibold">What Our Customers Say</h2>
        <div className="grid grid-cols-1 gap-6 px-4 md:grid-cols-3">
            {testimonials.map(t => (
                <TestimonialCard key={t.id} testimonial={t} />
            ))}
        </div>
    </section>
);

export default Testimonials;

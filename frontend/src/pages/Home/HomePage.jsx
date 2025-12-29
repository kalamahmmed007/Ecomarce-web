// src/pages/Home/HomePage.jsx
import React from "react";
import HeroSlider from "../../components/home/Hero/HeroSlider";
import CategoryGrid from "../../components/home/Categories/CategoryGrid";
import FeaturedProducts from "../../components/home/FeaturedProducts/FeaturedProducts";
import DealOfTheDay from "../../components/home/Deals/DealOfTheDay";
import NewsletterSignup from "../../components/home/Newsletter/NewsletterSignup";

const HomePage = () => (
    <div className="space-y-12">
        <HeroSlider />
        <CategoryGrid />
        <FeaturedProducts />
        <DealOfTheDay />
        <NewsletterSignup />
    </div>
);

export default HomePage;

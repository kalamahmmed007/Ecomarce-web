// src/components/common/Image/LazyImage.jsx
import React, { useState, useRef, useEffect } from "react";

const LazyImage = ({ src, alt = "", className = "", placeholder = "/placeholder.png" }) => {
    const [isVisible, setIsVisible] = useState(false);
    const imgRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        if (imgRef.current) observer.observe(imgRef.current);

        return () => {
            if (imgRef.current) observer.unobserve(imgRef.current);
        };
    }, []);

    return (
        <img
            ref={imgRef}
            src={isVisible ? src : placeholder}
            alt={alt}
            className={`transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"} ${className}`}
            loading="lazy"
        />
    );
};

export default LazyImage;

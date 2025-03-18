import React, { useState, useEffect } from 'react';
import {Link} from "react-scroll";

function GoToTop() {
    const [isVisible, setIsVisible] = useState(false);

    // Show button when page is scrolled down a certain amount
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);

        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return (
        isVisible && (
            <Link
                to='hero'
                smooth={true}
                duration={500}
                className="cursor-pointer p-4 text-white rounded-full fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-500 transition duration-300 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                </svg>
            </Link>
        )
    );
}

export default GoToTop;
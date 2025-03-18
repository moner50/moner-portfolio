import React from 'react';
import { Element, animateScroll as scroll } from 'react-scroll';

function ScrollIntoSection(section) {
    const sectionRef = useRef(null);

    useEffect(() => {
        const handleHashChange = () => {
            const hash = window.location.hash;
            if (hash === '#contact' && section.current) {
                contactRef.current.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('hashchange', handleHashChange);
        handleHashChange(); // Check on initial load

        return () => window.removeEventListener('hashchange', handleHashChange);
    }, []);
}

export default
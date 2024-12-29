import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top of the page
    }, [pathname]); // Runs whenever the URL path changes

    return null; // This component does not render anything
};

export default ScrollToTop;
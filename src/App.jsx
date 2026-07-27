import { Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from './components/Loader';
import ScrollToTop from './components/ScrollToTop';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Cookies } from './Cookies';
import { ThankYou } from './ThankYou';

function App() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const handleLoad = () => {
            setLoading(false);
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);

            return () => {
                window.removeEventListener('load', handleLoad);
            };
        }
    }, []);

    if (loading) {
        return <Loader />;
    }

    return (
        <>
            <ScrollToTop />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/cookies" element={<Cookies />} />
                <Route path="/thankyou" element={<ThankYou />} />
            </Routes>
        </>
    );
}

export default App;
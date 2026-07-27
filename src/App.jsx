import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';

import ScrollToTop from './components/ScrollToTop';

import { Home } from './Home';
import { About } from './About';
import { Contact } from './Contact';
import { Privacy } from './Privacy';
import { Cookies } from './Cookies';
import { ThankYou } from './ThankYou';

function App() {
  useEffect(() => {

    const loader = document.getElementById("preloader");

    if (loader) {

      loader.style.opacity = "0";
      loader.style.transition = "opacity .5s";

      setTimeout(() => {
        loader.remove();
      }, 500);

    }

  }, []);

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
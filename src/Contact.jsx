import { Navbar } from "./components/Navbar";
import { PageHeader } from "./components/PageHeader";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

import "./styles/Contact.css"

export function Contact() {
    return (
        <div className="contact">
            <title>Vans Mehmet | Contact Us</title>
            <Navbar />
            <PageHeader pageTitle="Contact Us" />
            <ContactSection />
            <Footer />
        </div>
    )
}
import { AboutSection } from "./components/AboutSection";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { PageHeader } from "./components/PageHeader";

import "./styles/About.css"

export function About() {
    return(
        <>
        <title>Vans Mehmet | About</title>
        <Navbar />
        <PageHeader pageTitle="About" />
        <AboutSection />
        <CallToAction />
        <Footer />

        </>
    )
}
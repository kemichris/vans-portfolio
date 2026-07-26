import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { VisionSection } from "./components/VisionSection";
import { PracticeSection } from "./components/PracticeSection";
import { ContactSection } from "./components/ContactSection";
import { CallToAction } from "./components/CallToAction";
import { Footer } from "./components/Footer";
import "./styles/style.css"


export function Home() {
    return (
        <>
            <title>Vans Mehmet Casmiro</title>
            <Navbar />
            <HeroSection />
            <VisionSection />
            <PracticeSection />
            <ContactSection />
            <CallToAction />
            <Footer />
        </>
    )
}


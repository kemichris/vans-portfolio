import { Navbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { VisionSection } from "./VisionSection";
import { PracticeSection } from "./PracticeSection";
import { ContactSection } from "./ContactSection";
import { CallToAction } from "./CallToAction";
import { Footer } from "./Footer";
import "../styles/style.css"


export function Home() {
    return (
        <>
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


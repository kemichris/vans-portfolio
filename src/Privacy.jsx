import { Navbar } from "./components/Navbar"
import { CallToAction } from "./components/CallToAction"
import { Footer } from "./components/Footer"
import { PrivacySection } from "./components/PrivacySection"

import "./styles/Privacy.css"
export function Privacy() {
    return (
        <>
        <Navbar />
        <PrivacySection />
        <CallToAction />
        <Footer />

        </>
    )
}
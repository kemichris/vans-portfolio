import { Navbar } from "./components/Navbar"
import { CallToAction } from "./components/CallToAction"
import { Footer } from "./components/Footer"
import { CookiesSection } from "./components/CookiesSection"

import "./styles/Privacy.css"

export function Cookies() {
    return (
        <>
            <Navbar />
            <CookiesSection />
            <CallToAction />
            <Footer />
        </>
    )
}
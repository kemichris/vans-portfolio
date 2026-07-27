import { FooterLinks } from "./FooterLinks";
import Logo from "../assets/vans-logo1.png"

export function Footer() {
    return (
        <footer className="footer">
            <div className="main-footer-content">
                <div className="company-info">
                    <img src={Logo} alt="" className="logo" />
                    <p>Kültür Mah. Yüksel Cad. No: 24/8 06420 Çankaya / ANKARA TÜRKİYE</p>
                    <p>contact@vansmehmet.com</p>
                    <p>+1 (971) 720-5960</p>
                </div>

                <FooterLinks
                    linkHeader="Quick Links"
                    links={[
                        { text: "Home", to: "/" },
                        { text: "About", to: "/about" },
                        { text: "Contact", to: "/contact" }
                    ]}
                />
                <FooterLinks
                    linkHeader="Privacy Policies"
                    links={[
                        { text: "Personal Data Notice", to: "/privacy" },
                        { text: "Cookies Policy", to: "/cookies" }
                    ]}
                />
            </div>
            <div className="bottom-footer">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
        </footer>
    )
}











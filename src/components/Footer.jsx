import { FooterLinks } from "./FooterLinks";
import Logo from "../assets/vans-logo1.png"

export function Footer() {
    return (
        <footer className="footer">
            <div className="main-footer-content">
                <div className="company-info">
                    <img src={Logo} alt="" className="logo" />
                    <p>Sakarya Sok. No:31/1 Fl:1 Office:1 Maltepe/İstanbul</p>
                    <p>contact@hdkdkdk.com</p>
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
                        { text: "Personal Data Notice", to: "/about" },
                        { text: "Cookies Poliy", to: "/services" }
                    ]}
                />
            </div>
            <div className="bottom-footer">
                <p>© {new Date().getFullYear()} All rights reserved.</p>
            </div>
            
        </footer>
    )
}











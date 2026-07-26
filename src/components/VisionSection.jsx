import { FaBookOpen } from "react-icons/fa";

import { SectionHeader } from "./SectionHeader"

export function VisionSection() {
    return (
        <div className="vision-section">
            <SectionHeader
                title="Our Vision"
                icon={<FaBookOpen />}
                style={{
                    backgroundColor: "#0184C7",
                    color: "#111827"
                    
                }}
            />
            <p className="vision-p"> Justice is the foundation upon which independence, opportunity, and freedom are built.</p>

            <div className="visions">
                <p>At Vans Casmiro Mehmet & Associates, we provide trusted, strategic legal representation to individuals, families, and businesses with professionalism, integrity, and unwavering dedication. We are committed to delivering practical legal solutions while protecting the rights and interests of every client we serve.</p>
                <p>Whether you require skilled legal representation in criminal defense, guidance through sensitive family law matters, or advice on legal disputes, our experienced team is here to support you at every stage of the legal process.</p>
                <p>We understand that every case is unique. That's why we take a client-focused approach, offering clear communication, personalized legal strategies, and strong advocacy both inside and outside the courtroom.</p>
                <p>Our mission is to uphold justice, safeguard your rights, and provide exceptional legal services built on trust, discretion, and excellence.</p>
            </div>
        </div>
    )
}
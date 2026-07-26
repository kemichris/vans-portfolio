import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";


export function Contact() {
    return (
        <div className="contact">
            <div className="contact-details">
                <p><FaLocationDot /> Kültür Mah. Yüksel Cad. No: 24/8 06420 Çankaya / ANKARA TÜRKİYE</p>
                <p><IoIosMail /> contact@hdkdkdk.com</p>
                <p><FaPhoneAlt /> +1 (971) 720-5960</p>
            </div>
        </div>
    )
}
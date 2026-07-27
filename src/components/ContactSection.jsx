import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";

export function ContactSection() {
    return(
        <div className="contact-section">
            <div className="contact-details">
                <p><FaLocationDot /> Kültür Mah. Yüksel Cad. No: 24/8 06420 Çankaya / ANKARA TÜRKİYE </p>
                <p><IoIosMail /> contact@vansmehmet.com</p>
                <p><FaPhoneAlt /> +1 (971) 720-5960</p>
            </div>
            <div className="contact-form">
                <form>
                    <input type="text" name="fullName" id="" placeholder="Full Name" />
                    <input type="email" name="email" placeholder="Email" />
                    <input type="tel" name="phone" id="" placeholder="Phone" />
                    <textarea name="message" id="" ></textarea>
                    <button type="submit">Send <IoIosSend /></button>
                </form>
            </div>
        </div>
    )
}
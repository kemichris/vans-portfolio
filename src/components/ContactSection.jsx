import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaLocationDot } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";


export function ContactSection() {
    const [result, setResult] = useState("");
    const navigate = useNavigate();
    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending...");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            "a87066d3-f155-4044-9afa-f3033aaabf88"
        );

        const response = await fetch(
            "https://api.web3forms.com/submit",
            {
                method: "POST",
                body: formData,
            }
        );

        const data = await response.json();

        if (data.success) {
            setResult("Message sent successfully!");
            event.target.reset();
            // Wait a moment so the user sees the success state (optional)
            setTimeout(() => {
                navigate("/thankyou", { replace: true });
            }, 500);
        } else {
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="contact-section">
            <div className="contact-details">
                <p>
                    <FaLocationDot /> Kültür Mah. Yüksel Cad. No: 24/8
                    06420 Çankaya / ANKARA TÜRKİYE
                </p>

                <p>
                    <IoIosMail /> contact@vansmehmet.com
                </p>

                <p>
                    <FaPhoneAlt /> +1 (971) 720-5960
                </p>
            </div>

            <div className="contact-form">
                <form onSubmit={onSubmit}>

                    {/* Web3Forms hidden fields */}
                    <input
                        type="hidden"
                        name="subject"
                        value="New Contact Form Submission - Vans Casmiro Mehmet & Associates"
                    />

                    <input
                        type="hidden"
                        name="from_name"
                        value="Vans Casmiro Mehmet & Associates Website"
                    />

                    {/* User fields */}
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        required
                    />

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        required
                    />

                    <input
                        type="tel"
                        name="phone"
                        placeholder="Phone"
                    />

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        required
                    ></textarea>

                    <button type="submit" className="send-btn">
                        Send <IoIosSend />
                    </button>

                    <p className="form-status">{result}</p>

                </form>
            </div>
        </div>
    );
}
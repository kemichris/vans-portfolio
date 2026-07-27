import { FaCheckCircle } from "react-icons/fa";


import "../styles/Privacy.css"
export function ThankYouSection() {
    return (
        <div className="thank-you-section">
            <h1>Thank you <FaCheckCircle /></h1>
            <p>Your message has been received.</p>
            <p>One of our legal professionals will contact you shortly.</p>
        </div>
    )
}
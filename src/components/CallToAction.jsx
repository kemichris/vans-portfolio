import { FaArrowRight } from "react-icons/fa";
export function CallToAction() {
    return (
        <div className="call-to-action">
            <h2>Need Help? Let us Call You!</h2>
            <form action="">
                <input type="text" name="fullName" placeholder="Full Name" />
                <input type="email" name="email" placeholder="email" />
                <input type="tel" name="phone" placeholder="Phone" />
                <button type="submit" className="submit-btn">Submit <FaArrowRight /></button>
            </form>
        </div>
    )
}
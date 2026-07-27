import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export function CallToAction() {
    const [result, setResult] = useState("");
    const navigate = useNavigate();

    const onSubmit = async (event) => {
        event.preventDefault();

        setResult("Submitting...");

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
            event.target.reset();
            navigate("/thankyou");
        } else {
            setResult("Something went wrong. Please try again.");
        }
    };

    return (
        <div className="call-to-action">
            <h2>Need Help? Let us Call You!</h2>

            <form onSubmit={onSubmit}>

                {/* Hidden Web3Forms Fields */}
                <input
                    type="hidden"
                    name="subject"
                    value="New Callback Request - Vans Casmiro Mehmet & Associates"
                />

                <input
                    type="hidden"
                    name="from_name"
                    value="Website Callback Form"
                />

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
                    required
                />

                <button
                    type="submit"
                    className="submit-btn"
                >
                    Submit <FaArrowRight />
                </button>

                {result && (
                    <p className="form-status">
                        {result}
                    </p>
                )}

            </form>
        </div>
    );
}
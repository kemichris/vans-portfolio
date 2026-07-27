
import { FaArrowDown } from "react-icons/fa";
import { Button } from "./Button";

import { PracticeCard } from "./PracticeCard"
export function PracticeSection() {
    return (
        <div className="practice-section" id="practice">
            <div className="practice-text">
                <p>Legal Solutions in Turkiye</p>
                <h2>To learn more about our legal solutions, please contact us.</h2>

                < Button text="Practice Areas" icon={<FaArrowDown />} />
            </div>
            <div className="practice-cards">
                <PracticeCard text="Criminal Law" />
                <PracticeCard text="Family Law" />
                <PracticeCard text="Child Custody & Guardianship" />
                <PracticeCard text="Divorce & Separation" />
                <PracticeCard text="Domestic Violence & Protective Orders" />
                <PracticeCard text="Legal Consultation & Dispute Resolution" />
            </div>
        </div>
    )
}
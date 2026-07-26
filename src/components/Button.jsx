import { Link } from "react-router-dom";

export function Button({ icon, text, to }) {
    return (
        <Link className="btn"
            to={to}
            className="btn"
        >
            {icon}
            {text}
        </Link>
    );
}
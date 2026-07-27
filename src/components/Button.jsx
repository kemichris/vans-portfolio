export function Button({ icon, text}) {
    return (
        <button className="btn">
            {text}
            {icon}
        </button>
    );
}
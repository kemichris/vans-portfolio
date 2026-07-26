import "../styles/SectionHeader.css"
export function SectionHeader({icon, title, style}) {
    return (
        <div className="section-header" style={style}>
            {icon}
            <h2>{title}</h2>
        </div>
    )
}
import Logo from "../assets/vans-logo1.png"
import "../styles/Loader.css"

export default function Loader() {
    return (
        <div className="loader">
            <div className="loader-content">

                <img
                    src={Logo}
                    alt="Vans Casmiro Mehmet & Associates"
                    className="loader-logo"
                />

                <h2>Vans Casmiro Mehmet & Associates</h2>

                <div className="loading-bar">
                    <div className="loading-progress"></div>
                </div>

            </div>
        </div>
    );
}
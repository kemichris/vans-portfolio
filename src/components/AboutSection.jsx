import AboutImg from "../assets/profile.PNG"
import Herdem from "../assets/herdem.jpg"
import selenay from "../assets/selenay.jpg"
import erkam from "../assets/erkam-dinc.jpg"

export function AboutSection() {
    return (
        <div className="about-section">
            <div className="about-img">
                <figure>
                    <img src={AboutImg} alt="" />
                    <figcaption>Vans Mehmet Casmiro (Founder - Lawyer)</figcaption>
                </figure>
                <figure>
                    <img src={Herdem} alt="" />
                    <figcaption>Herdem Gültekin (Managing Director)</figcaption>
                </figure>
                <figure>
                    <img src={erkam} alt="" />
                    <figcaption>Erkam Dinç (Parner)</figcaption>
                </figure>
                <figure>
                    <img src={selenay} alt="" />
                    <figcaption>Selenay Özkavakli (Associate)</figcaption>
                </figure>
            </div>
            <div className="about-text">
                <p>Vans Mehmet Casmiro is a dedicated legal practitioner and the
                    founding attorney of Vans Casmiro Mehmet & Associates,
                    based in Ankara, Türkiye. Since being admitted to legal practice in 2002,
                    he has built a reputation for providing trusted legal counsel,
                    strategic representation, and unwavering advocacy for clients
                    facing complex legal challenges.
                </p>

                <p>With a primary focus on Criminal Law and Family Law,
                    Vans Mehmet Casmiro has spent over two decades helping
                    individuals and families protect their rights and achieve fair outcomes.
                    Whether defending clients in criminal proceedings or guiding families
                    through sensitive matters such as divorce, child custody, guardianship,
                    and domestic disputes, he approaches every case with professionalism,
                    discretion, and a commitment to justice.
                </p>

                <p>At Vans Casmiro Mehmet & Associates, every client receives personalized
                    legal attention tailored to their unique circumstances.
                    The firm's philosophy is founded on integrity, transparency,
                    and excellence, ensuring that clients receive practical
                    legal solutions and strong representation at every stage of the legal process.
                </p>

                <p>Driven by the belief that justice should be accessible to all,
                    Vans Mehmet Casmiro continues to serve clients throughout Türkiye with dedication,
                    compassion, and more than two decades of legal experience.
                </p>
            </div>
        </div>
    )
}
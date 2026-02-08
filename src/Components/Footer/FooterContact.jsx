import {logo} from '../../assets/index'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";


const socialIcons = [
  faFacebook,
  faTwitter,
  faInstagram,
  faYoutube,
  faPinterest,
];


const FooterContact = () => {
  return (
        <div className="col">
            <img className="logo" src= {logo} alt=""/>
            <h4>Contacts</h4>
            <p><strong>Adress: </strong> 563 Welligntone Roas , Street,San Fransisco</p>
            <p><strong>Phone: </strong> +002 010 64 50 16 82 </p>
            <p><strong>Hours: </strong> 10:00 - 18:00 , Mon - Sat</p>

            <div className="folow">
                <h4>Follow Us </h4>
                <div className="icon">

                <div className="social-icons">
                    {socialIcons.map((icon, index) => (
                        <FontAwesomeIcon key={index} icon={icon} />
                    ))}
                </div>

                </div>
            </div>
        </div>
  )
}

export default FooterContact
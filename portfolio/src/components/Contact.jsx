import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
library.add(faLink, faPhone, faEnvelope, faLocationDot);

function Contact() {
  return (
    <div className="contact">
      <div className="contact-title">
        <b>CONTACT ME</b>
      </div>
      <div className="contact-text">
        <div className="center-text number">
          <div className="icon-phone">
            <FontAwesomeIcon
              className="icons"
              icon={["faS", "phone"]}
              size="xl"
            />
          </div>
          <div className="phone-number">+90 507-041-6005</div>
        </div>
        <div className="center-text mail">
          <div className="icon-phone">
            <FontAwesomeIcon
              className="icons"
              icon={["faS", "envelope"]}
              size="xl"
            />
          </div>
          <div className="phone-number">t.dundar145@gmail.com</div>
        </div>
        <div className="center-text city">
          <div className="icon-phone">
            <FontAwesomeIcon
              className="icons"
              icon={["faS", "location-dot"]}
              size="2xl"
            />
          </div>
          <div className="phone-number">İstanbul</div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

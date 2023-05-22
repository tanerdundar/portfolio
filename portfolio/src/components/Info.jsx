import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLink } from "@fortawesome/free-solid-svg-icons";
library.add(faLink);

function Info() {
  return (
    <div>
      <div className="info-text">
        <div className="linkedin">
          <div className="logo">
            <FontAwesomeIcon
              className="icons"
              icon={["faS", "link"]}
              size="lg"
            />
          </div>
          <div className="link">
            <a href="https://www.linkedin.com/in/taner-d%C3%BCndar-751647179/">
              Linkedin
            </a>
          </div>
        </div>
        <div className="github">
          <div className="logo">
            <FontAwesomeIcon
              className="icons"
              icon={["faS", "link"]}
              size="lg"
            />
          </div>
          <div className="link">
            <a href="https://github.com/tanerdundar">Github</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;

import Header from "../components/Header";
import { Link } from "react-router-dom";
import TennisImage from "../data/tennis/tennis_1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const SportPage = ({ sport }) => {
  return (
    <>
      <Header isSportPage={true} />
      <div className="sport-wrapper">
        <div className="sportPage">
          <Link className="link" to="/">
            back
          </Link>
          <div className="content-wrapper">
            <div>
              <FontAwesomeIcon
                className="icon-left"
                icon={faLessThan}
                size="2x"
              />
            </div>
            <div className="content">
              <div>
                <h2>Evolution of Tennis requests</h2>
              </div>
              <div className="image-box">
                <img src={TennisImage} alt={"equipment shown"} />
              </div>
              <div className="content-para">
                <h5 className="image-caption">The First Racket (1874)</h5>
                <p>
                  The very first tennis racket was made in 1874 in London by
                  Major Walter C. Wingfield. The racket was the first one made
                  of solid wood, meaning McEnroe could have done some serious
                  damage back in the day.
                </p>
              </div>
              <div className="source">source</div>
            </div>
            <div>
              <FontAwesomeIcon
                className="icon-right"
                icon={faGreaterThan}
                size="2x"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SportPage;
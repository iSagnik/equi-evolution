import { useEffect, useState } from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";

const SportPage = ({ sport }) => {
  const [data, setData] = useState(null);
  const [curPos, setCurPos] = useState(0);

  const path = "../../data/" + sport + "/";

  const loadSport = async () => {
    const pathData = path + "data.json";

    await fetch(pathData)
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      });
  };
  useEffect(() => {
    loadSport();
  });

  const handleSwitch = (change) => {
    setCurPos(curPos + change);
  };
  return (
    <>
      <Header isSportPage={true} />
      <div className="sport-wrapper">
        <Link className="link" to="/">
          back
        </Link>
        <div className="content-wrapper">
          {data && curPos !== 0 && (
            <div>
              <FontAwesomeIcon
                className="icon-left"
                icon={faLessThan}
                size="2x"
                onClick={() => handleSwitch(-1)}
              />
            </div>
          )}
          <Content data={data} curPos={curPos} path={path} />

          {data && curPos !== data.dataPoints.length - 1 && (
            <div>
              <FontAwesomeIcon
                className="icon-right"
                icon={faGreaterThan}
                size="2x"
                onClick={() => handleSwitch(1)}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default SportPage;

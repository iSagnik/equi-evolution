import Header from "../components/Header";
import { Link } from "react-router-dom";
import bgVideo from "../videos/bgVideo.mp4";
const Home = ({ sports }) => {
  return (
    <>
      <video autoPlay muted loop id="myVideo">
        <source src={bgVideo} type="video/mp4" />
      </video>
      <Header />
      <div className="home">
        <div className="sport-buttons">
          {sports &&
            sports.map((sport, idx) => {
              const url = "/sportPage/" + sport.replace(" ", "-");
              return (
                <div key={idx}>
                  <Link to={url} className="sport-link link" key={idx}>
                    {sport}
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;

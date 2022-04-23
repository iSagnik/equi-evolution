import Header from "../components/Header";
import { Link } from "react-router-dom";

const Home = ({ sports }) => {
  return (
    <>
      <Header isSportPage={false} />
      <div className="Home">
        <h2>Welcome!</h2>
        <h3>Select a sport</h3>
        <br />
        <div className="sport-buttons">
          {sports &&
            sports.map((sport, idx) => {
              const url = "/sportPage/" + sport.replace(" ", "-");
              return (
                <Link to={url} className="sport-link link" key={idx}>
                  {sport}
                </Link>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default Home;

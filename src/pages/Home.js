import Header from "./components/Header";

const Home = ({ sports }) => {
  return (
    <>
      <Header isSportPage={false} />
      <div className="Home">
        <h1>Welcome!</h1>
        <h3>Select a sport!</h3>
        <br />
        {sports &&
          sports.map((sport, idx) => {
            const url = "/sportPage/" + sport.replace(" ", "-");
            <Link to={url} key={idx} className="sport-button">
              sport
            </Link>;
          })}
      </div>
    </>
  );
};

export default Home;

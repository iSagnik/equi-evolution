import Header from "./components/Header";

const SportPage = ({ sport }) => {
  return (
    <>
      <Header isSportPage={false} />
      <div className="sportPage">
        <Link to="/">back</Link>
        <div className="content-wrapper">This is sport page for {sport}</div>
      </div>
    </>
  );
};

export default SportPage;

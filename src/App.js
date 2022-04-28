import "./styles/App.css";
import Home from "./pages/Home";
import SportPage from "./pages/SportPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  const sports = [
    "Football",
    "Tennis",
    "American Football",
    "Formula 1",
    "Cricket",
  ];
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="App">
          <Routes>
            <Route exact path="/" element={<Home sports={sports} />} />
            {sports &&
              sports.map((sport, idx) => {
                const url = "/sportPage/" + sport.replace(" ", "-");
                return (
                  <Route
                    key={idx}
                    path={url}
                    element={<SportPage sport={sport} />}
                  />
                );
              })}
          </Routes>
      </div>
    </Router>
  );
};

export default App;

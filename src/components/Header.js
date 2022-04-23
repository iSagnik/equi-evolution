import { Link } from "react-router-dom";
import Share from "./Share";

const Header = ({ isSportPage }) => {
  return (
    <>
      <header>
        <div className="header-center">EquiEvolution</div>
        <div className="header-options">
          {isSportPage === true && <Link className="link" to="/">change sport</Link>}
          <Share />
        </div>
      </header>
    </>
  );
};

export default Header;

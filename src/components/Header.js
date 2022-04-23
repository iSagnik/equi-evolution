const Header = ({ isSportPage }) => {
  return (
    <>
      <header>
        <span>EquiEvolution</span>
        {isSportPage === true && <span>change sport</span>}
        <span>share</span>
      </header>
    </>
  );
};

export default Header;

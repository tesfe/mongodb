const Header = ({ title }) => {
  return (
    <header>
      <h6 style={{ fontSize: "2rem", color: "purple" }}>{title}</h6>
    </header>
  );
};
Header.defaultProps = {
  title: "default props",
};

export default Header;

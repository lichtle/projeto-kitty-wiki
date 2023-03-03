import logo from "../../assets/kitty-wiki-logo.png";
import "./style.css";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="Logo" />
      <h1 className="header-title">Kitty Wiki</h1>
    </header>
  );
};

export default Header;

import Logo from "../assets/img/foodvilla.png";
import { Link } from "react-router-dom";
const Title = () => (
  <a tp="/">
    <img className="logo" alt="logo" src={Logo} />
  </a>
);

const Header = ({ setLogin }) => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/instamart">InstaMart</Link>
          <Link>Cart</Link>

          <button onClick={() => setLogin()}>Logout</button>
        </ul>
      </div>
    </div>
  );
};
export default Header;
//Link tag:-

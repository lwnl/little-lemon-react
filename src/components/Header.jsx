import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="logo-container">
        <img
          src="http://www.little-lemon-restaurant.com//static/img/logo.png"
          alt="logo"
        />
      </div>
      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/menu">Menu</NavLink></li>
          <li><NavLink to="/book">Book</NavLink></li>
          <li><NavLink to="/reservations">Reservations</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
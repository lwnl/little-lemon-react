import CustomNavLink from './CustomNavLink'

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
          <li><CustomNavLink to="/">Home</CustomNavLink></li>
          <li><CustomNavLink to="/about">About</CustomNavLink></li>
          <li><CustomNavLink to="/menu">Menu</CustomNavLink></li>
          <li><CustomNavLink to="/reservations">Reservations</CustomNavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
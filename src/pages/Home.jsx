import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <article class="banner">
        <h1>SPECIAL OFFER</h1>
        <h2>30% Off This Weekend</h2>
        <NavLink to='/reservations'>Book Now</NavLink>
      </article>

      <section class="cart-container">
        <ul>
          <li class="card">
            <h2>Our New Menu</h2>
            <img src="http://www.little-lemon-restaurant.com/static/img/Grill.jpg" />
            <p>
              Our menu consists of 12-15 seasonal items based on Italian, Greek,
              and Turkish culture.
            </p>
            <NavLink to='/menu'>See our new menu</NavLink>
          </li>
          <li class="card">
            <h2>Book a table</h2>
            <img src="http://www.little-lemon-restaurant.com/static/img/salad.jpg" />
            <p>
              Reserve your table for an Italian, Greek, and Turkish dining
              experience.
            </p>
            <NavLink to='/reservations'>Book your table now</NavLink>
          </li>
          <li class="card">
            <h2>Opening Hours</h2>
            <img src="http://www.little-lemon-restaurant.com/static/img/head_chef.jpg" />
            <p>
              The Little Lemon Restaurant is open 7 days a week, except for
              public holidays.
            </p>
            <p>Mon-Sun: 11am - 9pm</p>
            <p>(No reservations after 7pm)</p>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

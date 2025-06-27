import { NavLink } from "react-router-dom";

const CustomNavLink = ({ to, end = false, state, children }) => {
  return (
    <NavLink
      to={to}
      end={end}
      state={state}
      className={({ isActive }) => (isActive ? "active-NavLink" : "")}
    >
      {children}
    </NavLink>
  );
};

export default CustomNavLink;

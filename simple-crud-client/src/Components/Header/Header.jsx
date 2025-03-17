import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/server">Server</NavLink>
    </div>
  );
};

export default Header;

import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div style={{ display: "flex" }}>
      <NavLink className="nav-link" to="/">
        Home
      </NavLink>
      <NavLink className="nav-link" to="/unspashApi">
        unspashApi
      </NavLink>
      <NavLink className="nav-link" to="/unspashApiWithSlice">
        unspashApiWithSlice
      </NavLink>
    </div>
  );
};

export default Header;

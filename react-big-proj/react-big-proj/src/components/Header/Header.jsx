import { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="header-container">
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/unspashApi">
          unspashApi
        </NavLink>
      </div>
      <div
        className={open ? "container-mob change" : "container-mob"}
        onClick={() => setOpen(!open)}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>
      {open ? (
        <div>
          <div className="overflover" onClick={() => setOpen(false)}></div>
          <div className="mob-menu">
            <NavLink
              className="nav-link-mob"
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              className="nav-link-mob"
              to="/unspashApi"
              onClick={() => setOpen(false)}
            >
              unspashApi
            </NavLink>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Header;

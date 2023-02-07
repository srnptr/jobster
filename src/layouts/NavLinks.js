import React from "react";
import { NavLink } from "react-router-dom";
import links from "../utils/links";

const NavLinks = ({ toggleSidebar }) => {
  return (
    <div className="nav-links">
      {links.map((link) => (
        <NavLink
          end
          to={link.path}
          className={({ isActive }) =>
            isActive ? "nav-link active" : "nav-link"
          }
          key={link.id}
          onClick={toggleSidebar}
        >
          <span className="icon">{link.icon}</span>
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default NavLinks;

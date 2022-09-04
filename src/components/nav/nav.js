import React from "react";
import { navContainer, navLinks } from "./nav.module.css";
import { Link } from "gatsby";
const Nav = () => {
  return (
    <div className={navContainer}>
      <div>
        <p>ADB</p>
      </div>
      <div>
        <nav>
          <ul className={navLinks}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/skills">Skills</Link>
            </li>
            <li>
              <Link to="/projects">Projects</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/experience">Experience</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Nav };

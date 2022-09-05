import React from "react";
import { navContainer, navLinks, link } from "./nav.module.css";
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
              <Link className={link} to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className={link} to="/skills">
                Skills
              </Link>
            </li>
            <li>
              <Link className={link} to="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className={link} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className={link} to="/experience">
                Experience
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export { Nav };

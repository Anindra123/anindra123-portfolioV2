import React from "react";
import Footer from "./footer";
import { container, content } from "./layout.module.css";
import Nav from "./nav";

const Layout = ({ children }) => {
  return (
    <div className={container}>
      <Nav />
      <div className={content}> {children}</div>
      <Footer />
    </div>
  );
};

export default Layout;

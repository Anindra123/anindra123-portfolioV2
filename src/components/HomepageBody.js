import React from "react";
import {
  pageBody,
  imgStyle,
  textContiner,
  linkContainer,
  linkBtnStyle,
} from "./homepagebody.module.css";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
const HomepageBody = () => {
  return (
    <div className={pageBody}>
      <div>
        <StaticImage
          className={imgStyle}
          src="../images/my_img.jpg"
          alt="Picture of bivas"
        ></StaticImage>
      </div>
      <div className={textContiner}>
        <h2>Hi 👋, I am Anindra Das Bivas</h2>
        <h3>
          I am currently a computer science student at{" "}
          <a href="https://www.aiub.edu">AIUB</a>. I am passionate about web
          development and deep learning want to pursue a dev job or become a
          research assistant.
        </h3>
        <div className={linkContainer}>
          <Link className={linkBtnStyle} to="/contact">
            Contact Me{" "}
          </Link>
          <a
            className={linkBtnStyle}
            target="_blank"
            rel="noreferrer"
            href="https://drive.google.com/file/d/1L5fbRYtaoUp5rjmnAMqyBf8OJoUvol2N/view?usp=sharing"
          >
            Anindra's CV
          </a>
        </div>
      </div>
    </div>
  );
};
export default HomepageBody;

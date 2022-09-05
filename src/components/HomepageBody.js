import React from "react";
import { pageBody, imgStyle, textContiner } from "./homepagebody.module.css";
import { StaticImage } from "gatsby-plugin-image";
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
          developement and deep learning and want to pursue a dev job or become
          a research assistant.
        </h3>
      </div>
    </div>
  );
};
export default HomepageBody;

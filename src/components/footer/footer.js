import React from "react";
import { footer } from "./footer.module.css";
const Footer = () => {
  return (
    <div className={footer}>
      <div>&copy; Copyright {new Date().getFullYear().toString()}</div>
      <div>
        <p>
          Designed and developed by{" "}
          <a href="https://github.com/Anindra123">Anindra Das Bivas</a>
        </p>
      </div>
    </div>
  );
};

export { Footer };

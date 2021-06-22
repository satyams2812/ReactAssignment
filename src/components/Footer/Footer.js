import React from "react";

import classes from "./Footer.module.css";

const Footer = ({ click }) => {
  return (
    <footer className={classes["main-footer"]}>
      <h1>You clicked {click} times</h1>
    </footer>
  );
};

export default Footer;

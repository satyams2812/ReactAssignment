import React, { useEffect, useState } from "react";

import classes from "./Header.module.css";

import logo from "../../asset/logo.png";

const Header = () => {
  useEffect(() => {
    const interval = setInterval(() => {
      setClock(new Date().toLocaleString("en-GB").split(",").pop());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const [clock, setClock] = useState(
    new Date().toLocaleString("en-GB").split(",").pop()
  );

  return (
    <header className={classes["main-header"]}>
      <img src={logo} alt="logo" className={classes.logo} />
      <h1>Current time : {clock}</h1>
    </header>
  );
};

export default Header;

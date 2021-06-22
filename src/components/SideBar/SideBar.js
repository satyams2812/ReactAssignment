import React from "react";

import classes from "./SideBar.module.css";

const SideBar = ({ onClick }) => {
  return (
    <aside className={classes.sidebar}>
      <button onClick={onClick} className={classes.button}>
        Click Here
      </button>
    </aside>
  );
};

export default SideBar;

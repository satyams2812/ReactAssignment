import React, { useEffect } from "react";

import classes from "./Main.module.css";

const Main = ({ click, log }) => {
  useEffect(() => {
    window.scrollBy(0, 100);
  }, [click]);

  return (
    <main className={classes.main}>
      {log.map((log) => (
        <p key={Math.random()}>{log}</p>
      ))}
    </main>
  );
};

export default Main;

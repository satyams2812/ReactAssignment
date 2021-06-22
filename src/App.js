import React, { useState } from "react";

import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import SideBar from "./components/SideBar/SideBar";

function App() {
  const [click, setClick] = useState(0);

  const [log, setLog] = useState([]);

  const onClick = () => {
    log.push(
      "You clicked at " + new Date().toLocaleString("en-GB").split(",").pop()
    );
    setClick(click + 1);
  };

  return (
    <>
      <Header />
      <SideBar onClick={onClick} />
      <Main click={click} log={log} />
      <Footer click={click} />
    </>
  );
}

export default App;

import React from "react";

import AboutUs from "./pages/AboutUs";
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Nav />
      <AboutUs />
    </>
  );
};

export default App;

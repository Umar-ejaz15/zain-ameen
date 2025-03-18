import React from "react";
import Page1 from "./pages/Page1";
import MouseFollow from "./components/Mousefollow";
import LocomotiveScroll from "locomotive-scroll";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <>
      <MouseFollow />
      <div>
        <Page1 />
      </div>
    </>
  );
};

export default App;

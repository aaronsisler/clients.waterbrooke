import React from "react";
import Landing from "../../components/landing";
import Team from "../../components/team";

import "./landing-container.scss";

const LandingContainer = () => (
  <div className="landing-container">
    <Landing />
    <Team />
  </div>
);

export default LandingContainer;

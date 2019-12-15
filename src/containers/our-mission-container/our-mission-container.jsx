import React from "react";
import Hyperlink from "../../atoms/hyperlink";

import "./our-mission-container.scss";

const OurMissionContainer = () => (
  <div className="our-mission-container">
    <div className="our-mission-container__splash-image" />
    <div className="our-mission-container__content">
      <h1 className="our-mission-container__title">
        Waterbrooke's mission is caring for you.
      </h1>
      <p>
        Our mission is to create an atmosphere of comfort and security while
        providing the best possible care for each individual. We promote
        independence and encouragement to live each day to the fullest.
      </p>
      <p>
        At Waterbrooke, we choose to view ourselves as a community. We do not
        view ourselves as a “facility” but as a home to our residents. We strive
        to provide our residents a safe, secure environment with individualized
        assistance based on health care and person care needs, while offering
        the most independence possible.&nbsp;
        <Hyperlink href="/leadership" title="Meet our team" />
      </p>
      <h2 className="our-mission-container__sec-title">Leading by example</h2>
      <p>
        We take pride in the fact that our staff within memory care do not just
        simply meet state minimum requirements for training. It is Waterbrooke’s
        protocol that employees continually exhibit they have retained the
        information and can perform proper approaches and techniques with our
        residents.
      </p>
    </div>
  </div>
);

export default OurMissionContainer;

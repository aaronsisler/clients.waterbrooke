import React from "react";
import assistedLivingServices from "../../content/assisted-living-services";

import "./assisted-living-container.scss";

const AssistedLivingContainer = () => (
  <div className="assisted-living-container">
    <div className="assisted-living-container__splash-image" />
    <div className="assisted-living-container__content">
      <h1 className="assisted-living-container__title">
        Our services make the difference
      </h1>
      <p>
        At Waterbrooke, we offer much more than a place to stay. We offer a
        place to live well. Our residents share some common values: to be
        recognized as individuals, to lead lives with a sense of purpose, and to
        maintain connections with people and interests that are meaningful to
        them.
      </p>
      <hr />
      <h2 className="assisted-living-container__list-title">
        Assisted Living services
      </h2>
      <ul className="assisted-living-container__list">
        {assistedLivingServices.map((service, index) => (
          <li key={index} className="assisted-living-container__list-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AssistedLivingContainer;

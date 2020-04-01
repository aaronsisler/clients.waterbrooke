import React from "react";
import {
  coveredServices,
  notCoveredServices
} from "../../content/assisted-living-services";
import { modelRoomImages } from "../../content/shared";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../utils";

import "./assisted-living-container.scss";

const CDN_URL = getCdnUrl("/assisted-living");

const splashImage = {
  altText: "Nurse holding an senior lady's hand",
  src: `${CDN_URL}/assisted-living-container.jpg`
};

const AssistedLivingContainer = () => (
  <div className="assisted-living-container">
    <Image
      className="assisted-living-container__splash-image"
      {...splashImage}
    />
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
      <h2 className="assisted-living-container__sec-title">Live freely</h2>
      <p>
        Our Assisted Living program is designed to provide the perfect balance
        of support and independence. Whether you’re a social butterfly or prefer
        the peace and quiet of your own space, our community provides life
        engagement programs to meet your needs.
      </p>
      <p>
        Live your life as you always have… minus the mundane. No daily upkeep,
        maintenance calls or repairs. Simply enjoy the most remarkable parts of
        the life you lead.
      </p>
      <h2 className="assisted-living-container__images-title">Our rooms</h2>
      <div className="assisted-living-container__model-images">
        {modelRoomImages.map((image, index) => (
          <Image
            key={index}
            className="assisted-living-container__model-image"
            {...image}
          />
        ))}
      </div>
      <hr />
      <h2 className="assisted-living-container__list-title">What we provide</h2>
      <ul className="assisted-living-container__list">
        {coveredServices.map((service, index) => (
          <li key={index} className="assisted-living-container__list-item">
            {service}
          </li>
        ))}
      </ul>
      <hr />
      <h2 className="assisted-living-container__list-title">
        What we don't cover
      </h2>
      <ul className="assisted-living-container__list">
        {notCoveredServices.map((service, index) => (
          <li key={index} className="assisted-living-container__list-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AssistedLivingContainer;

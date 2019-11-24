import React from "react";
import amenities from "../../content/amenities";
import { IMAGES_FOLDER_PATH } from "../../config";

import "./amenities-container.scss";

const spalshImage = {
  alt: "Waterbrooke Assisted Living",
  src: `${IMAGES_FOLDER_PATH}/amenities__salon.jpg`
};

const AmenitiesContainer = () => (
  <div className="amenities-container">
    <div className="amenities-container__splash">
      <img
        className="amenities-container__splash-image"
        src={spalshImage.src}
        alt={spalshImage.alt}
      />
    </div>
    <div className="amenities-container__content">
      <h1 className="amenities-container__title">Amenities</h1>
      <p>
        Living at Waterbrooke gives you perks you would never have living at
        home.
      </p>
      <dl className="amenities-container__list">
        {amenities.map((amenity, index) => (
          <React.Fragment key={index}>
            <dt className="amenities-container__list-item-title">
              {amenity.title}
            </dt>
            <dd className="amenities-container__list-item-content">
              {amenity.content}
            </dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  </div>
);

export default AmenitiesContainer;
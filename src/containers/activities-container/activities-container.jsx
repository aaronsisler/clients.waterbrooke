import React from "react";
import Image from "../../atoms/image";
import { eventImages } from "../../content/activities";

import "./activities-container.scss";

const ActivitiesContainer = () => (
  <div className="activities-container">
    <h1 className="activities-container__title">Making new memories</h1>
    <p>
      By creating new memories together, we experience close connections that
      feel like family. At Waterbrooke, you will have the opportunity to find
      the balance that’s right for you. This might include taking part in our
      fitness classes, art activities, or our popular book club.
    </p>
    <div className="activities-container__content-images">
      {eventImages.map((eventImage, index) => (
        <Image
          className="activities-container__content-image"
          key={index}
          {...eventImage}
        />
      ))}
    </div>
  </div>
);

export default ActivitiesContainer;

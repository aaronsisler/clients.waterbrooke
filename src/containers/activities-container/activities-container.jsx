import React from "react";
import Image from "../../atoms/image";
import { activities, eventImages } from "../../content/activities";

import "./activities-container.scss";

const ActivitiesContainer = () => (
  <div className="activities-container">
    <div className="activities-container__header">
      <h1 className="activities-container__header-title">
        Making new memories
      </h1>
      <p>
        By creating new memories together, we experience close connections that
        feel like family. At Waterbrooke, you will have the opportunity to find
        the balance that’s right for you. This might include taking part in
        fitness classes, art activities, or our popular cooking classes.
      </p>
    </div>
    <div className="activities-container__images">
      {eventImages.map((eventImage, index) => (
        <Image
          className="activities-container__image"
          key={index}
          {...eventImage}
        />
      ))}
    </div>
    <hr />
    <div className="activities-container__activities">
      <h2 className="activities-container__sec-title">Activities</h2>
      <ul className="activities-container__list">
        {activities.map((activity, index) => (
          <li key={index} className="activities-container__list-item">
            {activity}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default ActivitiesContainer;

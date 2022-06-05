import React from "react";
import { Image } from "../../atoms/image";
import amenities from "../../content/amenities";

import styles from "./amenities-container.module.scss";

const AmenitiesContainer = () => (
  <div className={styles.amenities-container">
    <div className={styles.amenities-container__header">
      <h1 className={styles.amenities-container__header-title">Amenities</h1>
      <p>
        Living at Waterbrooke gives you perks you would never have living at
        home.
      </p>
    </div>
    <h2 className={styles.amenities-container__sec-title">What we provide</h2>
    <div className={styles.amenities-container__list">
      {amenities.map(({ content, image, title }, index) => (
        <section className={styles.amenities-container__list-item" key={index}>
          {image && (
            <Image
              alt={image.alt}
              className={styles.amenities-container__list-item-image"
              src={image.src}
            />
          )}
          <h3 className={styles.amenities-container__list-item-title">{title}</h3>
          <p className={styles.amenities-container__list-item-content">{content}</p>
        </section>
      ))}
    </div>
  </div>
);

export default AmenitiesContainer;

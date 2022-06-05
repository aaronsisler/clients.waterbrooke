import React from "react";
import {
  coveredServices,
  notCoveredServices,
} from "../../content/assisted-living-services";
import { modelRoomImages } from "../../content/shared";
import { Image } from "../../atoms/image";
import { getCdnUrl } from "../../utils";

import styles from "./assisted-living-container.module.scss";

const CDN_URL = getCdnUrl("/assisted-living");

const splashImage = {
  alt: "Nurse holding an senior lady's hand",
  src: `${CDN_URL}/assisted-living-container.jpg`,
};

const AssistedLivingContainer = () => (
  <div className={styles.assistedLivingContainer}>
    <Image
      className={styles.assistedLivingContainer__splashImage}
      {...splashImage}
    />
    <div className={styles.assistedLivingContainer__content}>
      <h1 className={styles.assistedLivingContainer__title}>
        Our services make the difference
      </h1>
      <p>
        At Waterbrooke, we offer much more than a place to stay. We offer a
        place to live well. Our residents share some common values: to be
        recognized as individuals, to lead lives with a sense of purpose, and to
        maintain connections with people and interests that are meaningful to
        them.
      </p>
      <h2 className={styles.assistedLivingContainer__secTitle}>Live freely</h2>
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
      <h2 className={styles.assistedLivingContainer__imagesTitle}>Our rooms</h2>
      <div className={styles.assistedLivingContainer__modelImages}>
        {modelRoomImages.map((image, index) => (
          <Image
            key={index}
            className={styles.assistedLivingContainer__modelImage}
            {...image}
          />
        ))}
      </div>
      <hr />
      <h2 className={styles.assistedLivingContainer__list-title">What we provide</h2>
      <ul className={styles.assistedLivingContainer__list">
        {coveredServices.map((service, index) => (
          <li key={index} className={styles.assistedLivingContainer__list-item">
            {service}
          </li>
        ))}
      </ul>
      <hr />
      <h2 className={styles.assistedLivingContainer__list-title">
        What we don't cover
      </h2>
      <ul className={styles.assistedLivingContainer__list">
        {notCoveredServices.map((service, index) => (
          <li key={index} className={styles.assistedLivingContainer__list-item">
            {service}
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default AssistedLivingContainer;

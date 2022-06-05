import React from "react";
import { Image } from "../../atoms/image";
import { getCdnUrl } from "../../utils";
import { modelRoomImages } from "../../content/shared";

import styles from "./memory-care-container.module.scss";

const CDN_URL = getCdnUrl("/memory-care");

const splashImage = {
  alt: "Hand holding projector slide containing an older couple",
  src: `${CDN_URL}/memory-care-container.jpg`,
};

const MemoryCareContainer = () => (
  <div className={styles.memory-care-container">
    <Image className={styles.memory-care-container__splashImage} {...splashImage} />
    <div className={styles.memory-care-container__content">
      <h1 className={styles.memory-care-container__title">What is memory care?</h1>
      <p>
        Our memory care program features a person-centered approach that’s
        designed to help your loved one feel a sense of belonging and purpose,
        while still preserving their identity and individuality.
      </p>
      <p>
        Featuring a safe and secure environment, seniors are able to participate
        in our daily path of engagement, which encourages their current skills
        through research-based activities.
      </p>
      <h2 className={styles.memory-care-container__secTitle}>
        Life in a memory care community
      </h2>
      <p>
        Many people have misconceptions about what life is like at a memory care
        community. They think it might be a sad or lonely environment. But in
        reality, many of the residents who live in our memory care communities
        have a full and rich life.
      </p>
      <p>
        In addition to having access to quality care, they get to spend their
        days surrounded by kind and compassionate care team members, a community
        of interesting residents and fun-filled activities that help them
        continue to live with purpose and meaning.
      </p>
      <h2 className={styles.memory-care-container__images-title">Our rooms</h2>
      <div className={styles.memory-care-container__modelImages">
        {modelRoomImages.map((image, index) => (
          <Image
            key={index}
            className={styles.memory-care-container__modelImage}
            {...image}
          />
        ))}
      </div>
    </div>
  </div>
);

export default MemoryCareContainer;

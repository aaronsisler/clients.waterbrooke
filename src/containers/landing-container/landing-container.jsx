import React from "react";
import { Image } from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import styles from "./landing-container.module.scss";

const CDN_URL = getCdnUrl("/landing");

const splashImage = {
  alt: "Flowers on the front outdoor porch",
  src: `${CDN_URL}/landing-container__front-porch.jpg`,
};
const outdoorImage = {
  alt: "Picture of the back of facility",
  src: `${CDN_URL}/landing-container__splash.jpg`,
};

const LandingContainer = () => (
  <div className={styles.landingContainer}>
    <Image className={styles.landingContainer__splashImage} {...splashImage} />
    <div className={styles.landingContainer__banner}>
      <p>Voted Best Senior Care Facility</p>
      <p>2021 Winner: Best of the Albemarle Award</p>
      <p>2020 Winner: The Daily Advance Readers' Choice</p>
    </div>
    <div className={styles.landingContainer__content}>
      <h1 className={styles.landingContainer__contentTitle}>
        Life is better at Waterbrooke
      </h1>
      <p>
        Located in the beautiful and historic “Harbor of Hospitality”,
        Waterbrooke of Elizabeth City is a licensed assisted living community.
        We are conveniently located next to the Sentara Albemarle Hospital with
        access to many local healthcare providers.
      </p>
      <p>
        You will find days with fewer worries, more options, and a community
        that feels just like home. Find a sense of belonging in our community of
        friends by&nbsp;
        <Hyperlink href="/daily-life" title="learning more here." />
      </p>
    </div>
    <Image className={styles.landingContainer__secondImage} {...outdoorImage} />
    <div className={styles.landingContainer__content}>
      <h2 className={styles.landingContainer__contentSecTitle}>
        Not sure where to begin?
      </h2>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones. We are here to help you understand
        what we can provide and recommend&nbsp;
        <Hyperlink href="/why-assisted-living" title="starting here." />
      </p>
    </div>
  </div>
);

export default LandingContainer;

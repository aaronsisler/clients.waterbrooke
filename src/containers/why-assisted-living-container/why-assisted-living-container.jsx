import React from "react";
import { Image } from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import styles from "./why-assisted-living-container.module.scss";

const CDN_URL = getCdnUrl("/why-assisted-living");

const splashImage = {
  alt: "Man holding hands together in thought",
  src: `${CDN_URL}/why-assisted-living-container.jpg`,
};

const WhyAssistedLivingContainer = () => (
  <div className={styles.why - assisted - livingContainer}>
    <Image
      className={styles.why - assisted - livingContainer__splashImage}
      {...splashImage}
    />
    <div className={styles.why - assisted - livingContainer__content}>
      <h1 className={styles.why - assisted - livingContainer__title}>
        What is assisted living?
      </h1>
      <p>
        Simply put, assisted living communities give older adults personalized
        care in a residential setting. They’re for seniors whose health or
        well-being requires a higher level of support, which is determined
        through a health assessment by the community according to state
        regulations. Assisted living also provides a healthy lifestyle and
        social engagement.
      </p>
      <h2 className={styles.why - assisted - livingContainer__secTitle}>
        What can assisted living provide?
      </h2>
      <p>
        The most common assisted living services offered include medication
        management and assistance with using the bathroom, dressing, and
        grooming. Housekeeping, meals, laundry and transportation services are
        typically included. Staff is available 24/7 to help with safety, care
        and support. Residents are encouraged to bring furniture and personal
        items to make their new home feel, well, like home.
      </p>
      <p>
        Residents are assessed when they move in, so they can get an
        individualized service plan to meet specific needs and make their care
        truly personal. Some assisted living communities, such as Waterbrooke,
        are also licensed to provide memory care. These will often have separate
        dining rooms and menus based on residents’ nutritional needs.&nbsp;
        <Hyperlink
          href="/assisted-living"
          title="Learn more about what we offer."
        />
      </p>
    </div>
  </div>
);

export default WhyAssistedLivingContainer;

import React from "react";
import { Image } from "../../atoms/image";
import { getCdnUrl } from "../../utils";
import Hyperlink from "../../atoms/hyperlink";
import ApplicationOnline from "../../components/application-online";

import styles from "./careers-container.module.scss";

const CDN_URL = getCdnUrl("/careers");

const headerImage = {
  alt: "Staff member smiling with phone",
  src: `${CDN_URL}/careers-container.jpg`,
};

const CareersContainer = () => (
  <div className={styles.careers-container">
    <Image className={styles.careers-container__splashImage} {...headerImage} />
    <div className={styles.careers-container__header">
      <h1>Join our team</h1>
      <p>
        Submit your application by applying online or you may download an
        application below and fill it out. To submit the downloaded application,
        please either bring it by the facility or scan and upload below.
      </p>
      <hr />
    </div>
    <div className={styles.careers-container__content">
      <ApplicationOnline />
      <hr />
      <Hyperlink
        href="/apply"
        title="Upload Paper Application"
        className={styles.careers-container__content-link"
      />
    </div>
  </div>
);

export default CareersContainer;

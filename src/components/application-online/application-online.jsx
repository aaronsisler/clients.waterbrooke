import React from "react";
import { APPLICATION_ONLINE_URL } from "../../config";
import ExternalLink from "../../atoms/external-link";

import styles from "./application-online.module.scss";

const ApplicationOnline = () => (
  <div className={styles.applicationOnline}>
    <ExternalLink
      href={APPLICATION_ONLINE_URL}
      className={styles.applicationOnline__navLink}
      title="Apply Online"
    />
  </div>
);

export default ApplicationOnline;

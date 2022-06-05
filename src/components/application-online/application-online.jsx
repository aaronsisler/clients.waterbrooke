import React from "react";
import { APPLICATION_ONLINE_URL } from "../../config";
import ExternalLink from "../../atoms/external-link";

import styles from "./application-online.module.scss";

const ApplicationOnline = () => (
  <div className={styles.application-online">
    <ExternalLink
      href={APPLICATION_ONLINE_URL}
      className={styles.application-online__nav-link"
      title="Apply Online"
    />
  </div>
);

export default ApplicationOnline;

import React from "react";
import { APPLICATON_PDF_FILENAME, CDN_URL } from "../../config";

import styles from "./application-download.module.scss";

const ApplicationDownload = () => (
  <div className={styles.application-download">
    <a
      href={`${CDN_URL}/documents/${APPLICATON_PDF_FILENAME}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download paper application
    </a>
  </div>
);

export default ApplicationDownload;

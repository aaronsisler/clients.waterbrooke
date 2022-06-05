import React from "react";
import ApplicationDownload from "../../components/application-download";
import ApplicationSubmissionForm from "../../components/application-submission-form";

import styles from "./apply-container.module.scss";

const ApplyContainer = () => (
  <div className={styles.apply-container">
    <ApplicationDownload />
    <div className={styles.apply-container__form">
      <hr />
      <h2 className={styles.apply-container__form-title">Submit Application</h2>
      <ApplicationSubmissionForm />
    </div>
  </div>
);

export default ApplyContainer;

import React from "react";

import ImageSubmissionForm from "../../components/image-submission-form";

import styles from "./image-submission-container.module.scss";

const ImageSubmissionContainer = () => (
  <div className={styles.imageSubmissionContainer}>
    <p>
      To complete the application process, please upload a valid government
      issued form of identification.
    </p>
    <p>Some examples include: Driver's License, Passport, Military</p>
    <ImageSubmissionForm />
  </div>
);

export default ImageSubmissionContainer;

import React from "react";

import ImageSubmissionForm from "../../components/image-submission-form";

import "./image-submission-container.scss";

const ImageSubmissionContainer = () => (
  <div className="image-submission-container">
    <p>
      To complete the application process, please upload a valid government
      issued form of identification.
    </p>
    <p>Some examples include: Driver's License, Passport, Military</p>
    <ImageSubmissionForm />
  </div>
);

export default ImageSubmissionContainer;

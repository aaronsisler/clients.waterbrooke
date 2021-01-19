import React from "react";

import ImageSubmissionForm from "../../components/image-submission-form";

import "./image-submission-container.scss";

const ImageSubmissionContainer = () => (
  <div className="image-submission-container">
    <p>
      To complete the application process, please upload a valid form of
      identification.
    </p>
    <p>Valid forms of ID include: Driver's License, Passport</p>
    <ImageSubmissionForm />
  </div>
);

export default ImageSubmissionContainer;

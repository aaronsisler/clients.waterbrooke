import React from "react";
import ApplicationDownload from "../../components/application-download";
import ApplicationSubmissionForm from "../../components/application-submission-form";

import "./apply-container.scss";

const ApplyContainer = () => (
  <div className="apply-container">
    <ApplicationDownload />
    <div className="apply-container__form">
      <hr />
      <h2 className="apply-container__form-title">Submit Application</h2>
      <ApplicationSubmissionForm />
    </div>
  </div>
);

export default ApplyContainer;

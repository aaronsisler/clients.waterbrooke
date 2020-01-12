import React from "react";
import ApplicationDownload from "../../components/application-download";
import ApplicationSubmissionForm from "../../components/application-submission-form";

import "./careers-container.scss";

const CareersContainer = () => (
  <div className="careers-container">
    <div className="careers-container__header">Careers Header</div>
    <div className="careers-container__content">
      <ApplicationDownload />
      <ApplicationSubmissionForm />
    </div>
  </div>
);

export default CareersContainer;

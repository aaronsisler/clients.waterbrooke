import React from "react";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../utils";
import ApplicationDownload from "../../components/application-download";
import ApplicationOnline from "../../components/application-online";
import ApplicationSubmissionForm from "../../components/application-submission-form";

import "./careers-container.scss";

const CDN_URL = getCdnUrl("/careers");

const headerImage = {
  altText: "Staff member smiling with phone",
  src: `${CDN_URL}/careers-container.jpg`
};

const CareersContainer = () => (
  <div className="careers-container">
    <Image className="careers-container__splash-image" {...headerImage} />
    <div className="careers-container__header">
      <h1>Join our team</h1>
      <p>
        Submit your application by applying online or you may download an
        application below and fill it out. To submit the downloaded application,
        please either bring it by the facility or scan and upload below.
      </p>
      <hr />
    </div>
    <div className="careers-container__content">
      <ApplicationOnline />
      <hr />
      <ApplicationDownload />
      <div className="careers-container__form">
        <hr />
        <h2 className="careers-container__form-title">Submit Application</h2>
        <ApplicationSubmissionForm />
      </div>
    </div>
  </div>
);

export default CareersContainer;

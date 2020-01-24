import React from "react";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../config";
import ApplicationDownload from "../../components/application-download";
import ApplicationSubmissionForm from "../../components/application-submission-form";

import "./careers-container.scss";

const CDN_URL = getCdnUrl("/careers");

const headerImage = {
  altText: "Staff member smiling with phone",
  className: "careers-container__header-image",
  desktopImgSrc: `${CDN_URL}/careers-container__header--desktop.jpg`,
  mobileImgSrc: `${CDN_URL}/careers-container__header--desktop.jpg`
};

const CareersContainer = () => (
  <div className="careers-container">
    <div className="careers-container__header">
      <Image {...headerImage} />
      <div className="careers-container__header-content">
        <h1>Join our team</h1>
        <p>
          Download an application below and fill it out. To submit, please
          either bring it by the facility or scan and upload below.
        </p>
        <hr />
      </div>
    </div>
    <div className="careers-container__content">
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

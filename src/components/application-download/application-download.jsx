import React from "react";
import { CDN_URL } from "../../config";

import "./application-download.scss";
const fileName = "waterbrooke-employment-application.pdf";

const ApplicationDownload = () => (
  <div className="application-download">
    <a
      href={`${CDN_URL}/documents/${fileName}`}
      download
      target="_blank"
      rel="noopener noreferrer"
    >
      Download application
    </a>
  </div>
);

export default ApplicationDownload;

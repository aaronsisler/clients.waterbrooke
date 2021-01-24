import React from "react";
import { APPLICATION_ONLINE_URL } from "../../config";
import ExternalLink from "../../atoms/external-link";

import "./application-online.scss";

const ApplicationOnline = () => (
  <div className="application-online">
    <ExternalLink
      href={APPLICATION_ONLINE_URL}
      className="application-online__nav-link"
      title="Apply Online"
    />
  </div>
);

export default ApplicationOnline;

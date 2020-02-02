import React from "react";
import { CONTACT_ADDRESS, GOOGLE_MAPS_LOCATION } from "../../config";

import "./contact-address.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className="contact-address">
    <h2>Stop by to see us</h2>
    <span>{streetAddress}</span>
    <span>{cityStateZip}</span>
    <a href={GOOGLE_MAPS_LOCATION} target="_blank" rel="noopener noreferrer">
      Get directions here
    </a>
  </div>
);

export default ContactAddress;

import React from "react";
import { CONTACT_ADDRESS, GOOGLE_MAPS_LOCATION } from "../../config";

import styles from "./contact-address.module.scss";

const [streetAddress, cityStateZip] = CONTACT_ADDRESS;

const ContactAddress = () => (
  <div className={styles.contact-address">
    <h2>Stop by to see us</h2>
    <p>{streetAddress}</p>
    <p>{cityStateZip}</p>
    <a
      href={GOOGLE_MAPS_LOCATION}
      className={styles.hyperlink"
      target="_blank"
      rel="noopener noreferrer"
    >
      Get directions here
    </a>
  </div>
);

export default ContactAddress;

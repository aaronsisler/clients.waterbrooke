import React from "react";
import ContactPhone from "../../components/contact-phone";
import ContactAddress from "../../components/contact-address";
import ContactForm from "../../components/contact-form";

import styles from "./contact-container.module.scss";

const ContactContainer = () => (
  <div className={styles.contact-container">
    <div className={styles.contact-container__content">
      <div className={styles.contact-container__visit">
        <ContactPhone />
        <ContactAddress />
      </div>
      <ContactForm />
    </div>
  </div>
);

export default ContactContainer;

import React from "react";
import privacyPolicy from "../../content/privacy-policy";

import styles from "./privacy-policy-container.module.scss";

const PrivacyPolicyContainer = () => (
  <div className={styles.privacy-policy-container">
    <div className={styles.privacy-policy-container__title">
      Privacy Policy for {privacyPolicy.companyWebsite}
    </div>
    {privacyPolicy.policies.map((policyLine, index) => {
      if (policyLine.isBold) {
        return (
          <div className={styles.privacy-policy-container__policy-heading" key={index}>
            {policyLine.text}
          </div>
        );
      }
      return (
        <div className={styles.privacy-policy-container__policy-text" key={index}>
          {policyLine.text}
        </div>
      );
    })}
  </div>
);

export default PrivacyPolicyContainer;

import React from "react";
import { Image } from "../../atoms/image";
import faqs from "../../content/faqs";
import { getCdnUrl } from "../../utils";

import styles from "./faqs-container.module.scss";

const CDN_URL = getCdnUrl("/faqs");

const splashImage = {
  alt: "Sunset behind field with directional sign",
  src: `${CDN_URL}/faqs-container.jpg`,
};

const FaqsContainer = () => (
  <div className={styles.faqsContainer}>
    <Image className={styles.faqsContainer__splashImage} {...splashImage} />
    <div className={styles.faqsContainer__content}>
      <h1 className={styles.faqsContainer__title}>What should I know?</h1>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones. We have listed below some
        questions that may come to mind as you research our community.
      </p>
      <hr />
      <dl className={styles.faqsContainer__questionsList}>
        {faqs.map(({ question, answer }, index) => (
          <React.Fragment key={index}>
            <dt>{question}</dt>
            <dd>{answer}</dd>
          </React.Fragment>
        ))}
      </dl>
    </div>
  </div>
);

export default FaqsContainer;

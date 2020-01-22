import React from "react";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../config";

import "./faqs-container.scss";

const CDN_URL = getCdnUrl("/faqs");

const splashImage = {
  altText: "Sunset behind field with directional sign",
  desktopImgSrc: `${CDN_URL}/faqs-container--desktop.jpg`,
  mobileImgSrc: `${CDN_URL}/faqs-container--mobile.png`
};

const FaqsContainer = () => (
  <div className="faqs-container">
    <div className="faqs-container__splash">
      <Image className="faqs-container__splash-image" {...splashImage} />
    </div>
    <div className="faqs-container__content">
      <h1 className="faqs-container__title">What should I know?</h1>
      <p>
        Sometimes it is hard to know what questions to even begin asking when it
        comes to the care of your loved ones.
      </p>
    </div>
  </div>
);

export default FaqsContainer;

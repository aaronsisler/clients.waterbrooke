import React from "react";
import Image from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../config";

import "./why-assisted-living-container.scss";

const CDN_URL = getCdnUrl("/why-assisted-living");

const splashImage = {
  altText: "Man holding hands together in thought",
  desktopImgSrc: `${CDN_URL}/why-assisted-living-container--desktop.jpg`,
  mobileImgSrc: `${CDN_URL}/why-assisted-living-container--mobile.png`
};

const WhyAssistedLivingContainer = () => (
  <div className="why-assisted-living-container">
    <Image
      className="why-assisted-living-container__splash-image"
      {...splashImage}
    />
    <div className="why-assisted-living-container__content">
      <h1 className="why-assisted-living-container__title">
        Where do I start?
      </h1>
      <p>
        Many adult children experience a moment when they realize for the first
        time that their parent seems to be getting old. This realization can
        open the door to a plethora of emotions including fear, sadness,
        nostalgia, concern, anxiety and even anger. The good news is that
        families enter this journey together
      </p>
      <p>
        Making the decision to move to a senior living community is a big one
        and we’re here to help. Our team understands the unique needs of each
        person and the desire to remain as safely independent as possible.
      </p>
      <h2 className="why-assisted-living-container__sec-title">
        Taking the first steps
      </h2>
      <p>
        Perhaps you aren’t even ready to start the journey right now. That’s
        okay. The more you gather information and learn about the opportunities
        available to you and your loved one, the better decision you’ll be able
        to make in the future.
      </p>
      <p>
        We understand that this decision is important, and it’s not always easy
        to make the choice. The journey towards senior living doesn’t happen
        overnight. It’s a process that we will gladly go through with you,
        answering any questions that you may have.&nbsp;
        <Hyperlink href="/faqs" title="Learn More" />
      </p>
    </div>
  </div>
);

export default WhyAssistedLivingContainer;

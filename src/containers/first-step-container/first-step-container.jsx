import React from "react";
import Image from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../config";

import "./first-step-container.scss";

const CDN_URL = getCdnUrl("/first-step");

const splashImage = {
  altText: "Man holding hands together in thought",
  src: `${CDN_URL}/first-step-container--desktop.jpg`
};

const FirstStepContainer = () => (
  <div className="first-step-container">
    <Image className="first-step-container__splash-image" {...splashImage} />
    <div className="first-step-container__content">
      <h1 className="first-step-container__title">Where do I start?</h1>
      <p>
        Many adult children experience a moment when they realize for the first
        time that their parent seems to be getting old. This realization can
        open the door to a plethora of emotions including fear, sadness,
        nostalgia, concern, anxiety and even anger. The good news is that
        families enter this journey together.
      </p>
      <p>
        Making the decision to move to a senior living community is a big one
        and we’re here to help. Our team understands the unique needs of each
        person and the desire to remain as safely independent as possible.&nbsp;
        <Hyperlink
          href="/why-assisted-living"
          title="Learn more about assisted living."
        />
      </p>
      <h2 className="first-step-container__sec-title">
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
        <Hyperlink
          href="/faqs"
          title="Review frequently asked questions here."
        />
      </p>
    </div>
  </div>
);

export default FirstStepContainer;

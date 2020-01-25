import React from "react";
import Image from "../../atoms/image";
import { getCdnUrl } from "../../config";

import "./memory-care-container.scss";

const CDN_URL = getCdnUrl("/memory-care");

const splashImage = {
  altText: "Hand holding projector slide containing an older couple",
  desktopImgSrc: `${CDN_URL}/memory-care-container--desktop.jpg`,
  mobileImgSrc: `${CDN_URL}/memory-care-container--mobile.png`
};

const MemoryCareContainer = () => (
  <div className="memory-care-container">
    <Image className="memory-care-container__splash-image" {...splashImage} />
    <div className="memory-care-container__content">
      <h1 className="memory-care-container__title">What is memory care?</h1>
      <p>
        Our memory care program features a person-centered approach that’s
        designed to help your loved one feel a sense of belonging and purpose,
        while still preserving their identity and individuality.
      </p>
      <p>
        Featuring a safe and secure environment, seniors are able to participate
        in our daily path of engagement, which encourages their current skills
        through research-based activities.
      </p>
      <h2 className="memory-care-container__sec-title">
        Life in a memory care community
      </h2>
      <p>
        Many people have misconceptions about what life is like at a memory care
        community. They think it might be a sad or lonely environment. But in
        reality, many of the residents who live in our memory care communities
        have a full and rich life.
      </p>
      <p>
        In addition to having access to quality care, they get to spend their
        days surrounded by kind and compassionate care team members, a community
        of interesting residents and fun-filled activities that help them
        continue to live with purpose and meaning.
      </p>
    </div>
  </div>
);

export default MemoryCareContainer;

import React from "react";
import Image from "../../atoms/image";
import Hyperlink from "../../atoms/hyperlink";
import { getCdnUrl } from "../../utils";

import "./daily-life-container.scss";

const CDN_URL = getCdnUrl("/daily-life");

const splashImage = {
  altText: "Two smiling senior ladies giving each other a high five",
  src: `${CDN_URL}/daily-life-container.jpg`
};

const DailyLifeContainer = () => (
  <div className="daily-life-container">
    <Image className="daily-life-container__splash-image" {...splashImage} />
    <div className="daily-life-container__content">
      <h1 className="daily-life-container__title">A day in the life</h1>
      <p>
        One of the most common questions seniors have about senior living is,
        “What am I going to do all day?” Seniors fear they’ll be bored or lonely
        at the community, or that they won’t have the freedom to choose what
        they’ll do each day. We are here to put all those worries to rest.
      </p>
      <p>
        Our Assisted Living program is designed to provide the perfect balance
        of support and independence. Whether you’re a social butterfly or prefer
        the peace and quiet of your own space, our community provides life
        engagement programs to meet your needs.
      </p>
      <p>
        Live your life as you always have… minus the mundane. No daily upkeep,
        maintenance calls or repairs. Simply enjoy the most remarkable parts of
        the life you lead.
      </p>
      <hr />
      <div className="daily-life-container__topic">
        <h2 className="daily-life-container__topic-title">
          Engaging Activities
        </h2>
        <p className="daily-life-container__topic-content">
          Our community offers residents a personalized monthly calendar of
          events. The available activities are selected based on the interests
          of each senior. They are designed to be enriching and fun for the
          residents. Activities are scheduled around-the-clock, so your loved
          one will never feel bored.&nbsp;
          <Hyperlink href="/activities" title="Learn More" />
        </p>
      </div>
      <hr />
      <div className="daily-life-container__topic">
        <h2 className="daily-life-container__topic-title">Dining Experience</h2>
        <p className="daily-life-container__topic-content">
          A great meal is one of life’s simple pleasures. At Waterbrooke, we
          believe dining well is part of living well. Your loved one will enjoy
          restaurant-style dining with chef-prepared meals. Each day features a
          variety of menu options that changes daily. So your loved one won’t
          get bored with the food choices.&nbsp;
          <Hyperlink href="/dining" title="Learn More" />
        </p>
      </div>
      <hr />
      <div className="daily-life-container__topic">
        <h2 className="daily-life-container__topic-title">Amenities</h2>
        <p className="daily-life-container__topic-content">
          We strive to bring your loved one's interests to life through programs
          and outings that reflect their talents and personalities, while also
          offering new experiences that will challenge them and keep them
          mentally healthy. From wellness programs to cultural and social
          events, there are opportunities for everyone to be involved.&nbsp;
          <Hyperlink href="/amenities" title="Learn More" />
        </p>
      </div>
    </div>
  </div>
);

export default DailyLifeContainer;

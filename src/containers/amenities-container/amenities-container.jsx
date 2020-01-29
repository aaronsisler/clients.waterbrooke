import React from "react";
import Image from "../../atoms/image";
import amenities from "../../content/amenities";

import "./amenities-container.scss";

const AmenitiesContainer = () => (
  <div className="amenities-container">
    <div className="amenities-container__header">
      <h1 className="amenities-container__title">Amenities</h1>
      <p>
        Living at Waterbrooke gives you perks you would never have living at
        home.
      </p>
    </div>
    <h2 className="amenities-container__sec-title">What we provide</h2>
    <div className="amenities-container__sections">
      {amenities.map(({ amenityGroupContent, altText, src }, groupIndex) => (
        <section className="amenities-container__section" key={groupIndex}>
          <Image
            altText={altText}
            className="amenities-container__section-image"
            src={src}
          />
          <dl className="amenities-container__section-list">
            {amenityGroupContent.map(({ content, title }, index) => (
              <React.Fragment key={index}>
                <dt className="amenities-container__section-list-item-title">
                  {title}
                </dt>
                <dd className="amenities-container__section-list-item-content">
                  {content}
                </dd>
              </React.Fragment>
            ))}
          </dl>
        </section>
      ))}
    </div>
  </div>
);

export default AmenitiesContainer;

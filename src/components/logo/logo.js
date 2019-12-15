import React from "react";
import NextLink from "next/link";
import { IMAGES_CDN } from "../../config";

import "./logo.scss";

const logo = {
  alt: "Waterbrooke Assisted Living",
  src: `${IMAGES_CDN}/logo.png`
};

const Logo = () => (
  <div className="logo">
    <NextLink href="/">
      <img className="logo__image" src={logo.src} alt={logo.alt} />
    </NextLink>
  </div>
);

export default Logo;

import React from "react";
import NextLink from "next/link";
import { IMAGES_FOLDER_PATH } from "../../config";

const logo = {
  alt: "Waterbrooke Assisted Living",
  src: `${IMAGES_FOLDER_PATH}/logo.png`
};

import "./logo.scss";

const Logo = () => (
  <div className="logo">
    <NextLink href="/">
      <a className="logo__anchor">
        <img className="logo__image" src={logo.src} alt={logo.alt} />
      </a>
    </NextLink>
  </div>
);

export default Logo;

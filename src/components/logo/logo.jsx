import React from "react";
import NextLink from "next/link";
import { CDN_URL } from "../../config";

import styles from "./logo.module.scss";

const logo = {
  alt: "Waterbrooke Assisted Living",
  src: `${CDN_URL}/logo.png`,
};

const Logo = () => (
  <div className={styles.logo}>
    <NextLink href="/">
      <img className={styles.logo__image} src={logo.src} alt={logo.alt} />
    </NextLink>
  </div>
);

export default Logo;

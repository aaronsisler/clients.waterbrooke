import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import styles from "./image.module.scss";

const Image = ({ alt, className, src }) => (
  // eslint-disable-next-line @next/next/no-img-element
  <img className={cn(styles.image, className)} src={src} alt={alt} />
);

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  src: PropTypes.string.isRequired,
};

export { Image };

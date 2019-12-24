import React from "react";
import Media from "react-media";
import cn from "classnames";
import PropTypes from "prop-types";
import {
  IMAGE_MEDIA_DESKTOP_WIDTH,
  IMAGE_MEDIA_MOBILE_WIDTH
} from "../../config";

import "./image.scss";

const Image = ({ altText, className, desktopImgSrc, mobileImgSrc }) => (
  <Media
    queries={{
      mobile: `(max-width: ${IMAGE_MEDIA_MOBILE_WIDTH})`,
      desktop: `(min-width: ${IMAGE_MEDIA_DESKTOP_WIDTH})`
    }}
  >
    {matches => (
      <React.Fragment>
        {matches.mobile && (
          <img
            className={cn("image", "image--mobile", className)}
            src={mobileImgSrc}
            alt={altText}
          />
        )}
        {matches.desktop && (
          <img
            className={cn("image", "image--desktop", className)}
            src={desktopImgSrc}
            alt={altText}
          />
        )}
      </React.Fragment>
    )}
  </Media>
);

Image.propTypes = {
  altText: PropTypes.string.isRequired,
  className: PropTypes.string,
  desktopImgSrc: PropTypes.string.isRequired,
  mobileImgSrc: PropTypes.string.isRequired
};

export default Image;

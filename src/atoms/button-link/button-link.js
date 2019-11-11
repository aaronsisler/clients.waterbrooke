import React from "react";
import NextLink from "next/link";
import cn from "classnames";
import PropTypes from "prop-types";

import "./button-link.scss";

const ButtonLink = ({ children, className, href, onClick }) => (
  <NextLink href={href}>
    <a className={cn(className ? className : "button-link")} onClick={onClick}>
      {children}
    </a>
  </NextLink>
);

ButtonLink.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  onClick: PropTypes.func
};

export default ButtonLink;

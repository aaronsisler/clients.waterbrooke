import React from "react";
import PropTypes from "prop-types";
import Hyperlink from "../../atoms/hyperlink";

import "./footer-link-group.scss";

const FooterLinkGroup = ({ links, title }) => (
  <div className="footer-link-group">
    <div className="footer-link-group__title">{title}</div>
    <div className="footer-link-group__links">
      {links.map((link, index) => (
        <Hyperlink key={index} {...link} />
      ))}
    </div>
  </div>
);

FooterLinkGroup.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired
};

export default FooterLinkGroup;

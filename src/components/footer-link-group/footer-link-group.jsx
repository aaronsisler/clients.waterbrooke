import React from "react";
import PropTypes from "prop-types";
import Hyperlink from "../../atoms/hyperlink";

import styles from "./footer-link-group.module.scss";

const FooterLinkGroup = ({ links, title }) => (
  <div className={styles.footerLinkGroup}>
    <h3 className={styles.footerLinkGroup__title}>{title}</h3>
    <div className={styles.footerLinkGroup__links}>
      {links.map((link, index) => (
        <Hyperlink key={index} {...link} />
      ))}
    </div>
  </div>
);

FooterLinkGroup.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default FooterLinkGroup;

import React from "react";
import FooterLinkGroup from "../../components/footer-link-group";
import Hyperlink from "../../atoms/hyperlink";
import navigationLinks from "../../content/navigation-links";

import styles from "./footer.module.scss";

const Footer = () => (
  <footer className={styles.footer}>
    <div className={styles.footer__links}>
      {navigationLinks.map((linksObj, index) => (
        <FooterLinkGroup key={index} {...linksObj} />
      ))}
    </div>
    <hr />
    <div className={styles.footer__legal}>
      <div className={styles.footer__copyright}>
        Copyright &copy; {new Date().getFullYear()}
      </div>
      <div className={styles.footer__privacy}>
        <Hyperlink title="Privacy Policy" href="/privacy-policy" />
      </div>
    </div>
  </footer>
);

export default Footer;

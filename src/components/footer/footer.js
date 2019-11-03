import React from "react";
import FooterLinkGroup from "../../components/footer-link-group";
import Hyperlink from "../../atoms/hyperlink";
import navigationLinks from "../../content/navigation-links";

import "./footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer__links">
      {navigationLinks.map(linksObj => (
        <FooterLinkGroup {...linksObj} />
      ))}
    </div>
    <div className="footer__legal">
      <div className="footer__copyright">
        Copyright &copy; {new Date().getFullYear()}
      </div>
      <div className="footer__privacy">
        <Hyperlink title="Privacy Policy" href="/privacy-policy" />
      </div>
    </div>
  </footer>
);

export default Footer;

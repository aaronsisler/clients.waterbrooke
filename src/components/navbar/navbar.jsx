import React from "react";
import cn from "classnames";
import Logo from "../../components/logo";
import AccordionDesktop from "../../atoms/accordion-desktop";
import AccordionMobile from "../../atoms/accordion-mobile";
import Hamburger from "../../atoms/hamburger";
import navigationLinks from "../../content/navigation-links";

import styles from "./navbar.module.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  handleMenuToggle = () =>
    this.setState((prevState) => ({
      isMenuOpen: !prevState.isMenuOpen,
    }));

  render() {
    const { isMenuOpen } = this.state;
    const menuToggledClass = isMenuOpen ? styles.navbar__linksOpen : undefined;

    return (
      <nav className={styles.navbar}>
        <div className={styles.navbar__toggle}>
          <Hamburger isToggled={isMenuOpen} onClick={this.handleMenuToggle} />
        </div>
        <div className={styles.navbar__logo}>
          <Logo />
        </div>
        <div className={cn(styles.navbar__linksMobile, menuToggledClass)}>
          <div className={cn(styles.navbar__linksContent)}>
            {navigationLinks.map((navLink) => (
              <AccordionMobile
                onContentClick={this.handleMenuToggle}
                {...navLink}
              />
            ))}
          </div>
        </div>
        <div className={cn(styles.navbar__linksDesktop, menuToggledClass)}>
          {navigationLinks.map((navLink) => (
            <AccordionDesktop {...navLink} />
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar;

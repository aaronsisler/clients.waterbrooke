import React from "react";
import cn from "classnames";
import AccordionDesktop from "../../atoms/accordion-desktop";
import AccordionMobile from "../../atoms/accordion-mobile";
import Hamburger from "../../atoms/hamburger";
import Logo from "../../components/logo";
import navigationLinks from "../../content/navigation-links";

import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false
    };
  }

  handleMenuToggle = () =>
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));

  render() {
    const { isMenuOpen } = this.state;
    const menuToggledClass = isMenuOpen ? "navbar__links--open" : undefined;

    return (
      <nav className="navbar">
        <div className="navbar__toggle">
          <Hamburger isToggled={isMenuOpen} onClick={this.handleMenuToggle} />
        </div>
        <div className="navbar__logo">
          <Logo />
        </div>
        <div className={cn("navbar__links--mobile", menuToggledClass)}>
          <div className={cn("navbar__links-content")}>
            {navigationLinks.map(navLink => (
              <AccordionMobile
                onContentClick={this.handleMenuToggle}
                {...navLink}
              />
            ))}
          </div>
        </div>
        <div className={cn("navbar__links--desktop", menuToggledClass)}>
          {navigationLinks.map(navLink => (
            <AccordionDesktop {...navLink} />
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar;

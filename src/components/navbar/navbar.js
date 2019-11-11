import React from "react";
import cn from "classnames";
import Accordion from "../../atoms/accordion";
import Hamburger from "../../atoms/hamburger";
import Logo from "../../components/logo";
import navigationLinks from "../../content/navigation-links";

import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: true
    };
  }

  handleMenuToggle = () =>
    this.setState(prevState => ({
      isMenuOpen: !prevState.isMenuOpen
    }));

  render() {
    const { isMenuOpen } = this.state;
    const isMenuOpenClass = isMenuOpen ? "navbar__links--open" : undefined;

    return (
      <nav className="navbar">
        <div className="navbar__toggle">
          <Hamburger isToggled={isMenuOpen} onClick={this.handleMenuToggle} />
        </div>
        <div className="navbar__logo">
          <Logo />
        </div>
        <div className={cn("navbar__links", isMenuOpenClass)}>
          {navigationLinks.map(navLink => (
            <Accordion onContentClick={this.handleMenuToggle} {...navLink} />
          ))}
        </div>
      </nav>
    );
  }
}

export default Navbar;

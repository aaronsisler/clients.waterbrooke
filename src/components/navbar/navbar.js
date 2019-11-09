import React from "react";
import cn from "classnames";
import Accordion from "../../atoms/accordion";
import Hamburger from "../../atoms/hamburger";
// import Hyperlink from "../../atoms/hyperlink";
import Logo from "../../components/logo";

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
          <Accordion title="Section 1" />
          <Accordion title="Section 2" />
          <Accordion title="Section 3" />
          {/* <Hyperlink
            href="/contact"
            onClick={this.handleMenuToggle}
            title="Contact"
          /> */}
        </div>
      </nav>
    );
  }
}

export default Navbar;

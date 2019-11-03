import React from "react";
import Hyperlink from "../../atoms/hyperlink";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

import "./navbar.scss";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false
    };
  }

  openSideMenu = () => this.setState({ isNavOpen: true });

  closeSideMenu = () => this.setState({ isNavOpen: false });

  render() {
    const isNavOpenClass = this.state.isNavOpen ? "navbar__links--open" : "";
    return (
      <nav className="navbar">
        <div className="navbar__logo">
          <Hyperlink href="/" title="Waterbrooke" />
        </div>
        <div className="navbar__toggle">
          {!this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faBars}
              size="2x"
              className="favicon"
              onClick={this.openSideMenu}
            />
          )}
          {this.state.isNavOpen && (
            <FontAwesomeIcon
              icon={faTimes}
              size="2x"
              className="favicon"
              onClick={this.closeSideMenu}
            />
          )}
        </div>
        <div className={`navbar__links ${isNavOpenClass}`}>
          <Hyperlink href="/contact" title="Contact" />
        </div>
      </nav>
    );
  }
}

export default Navbar;

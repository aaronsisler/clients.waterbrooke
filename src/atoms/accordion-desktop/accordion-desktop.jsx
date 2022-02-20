import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Hyperlink from "../hyperlink";

import styles from "./accordion-desktop.module.scss";

class AccordionDesktop extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  handleClick = () => this.setState({ isExpanded: false });

  handleToggle = (eventName) => {
    if (this.state.isExpanded && eventName === "leave") {
      this.setState({ isExpanded: false });
    } else if (!this.state.isExpanded && eventName === "enter") {
      this.setState({ isExpanded: true });
    }
  };

  render() {
    const { isExpanded } = this.state;
    const hoverClassname = isExpanded
      ? styles.accordionDesktopToggled
      : undefined;

    return (
      <div
        className={styles.accordionDesktop}
        onClick={this.handleClick}
        onMouseEnter={() => this.handleToggle("enter")}
        onMouseLeave={() => this.handleToggle("leave")}
      >
        <h1 className={cn(styles.accordionDesktop__title, hoverClassname)}>
          {this.props.title}
        </h1>
        <div className={cn(styles.accordionDesktop__content, hoverClassname)}>
          {this.props.links.map((link, index) => (
            <Hyperlink
              className={styles.accordionDesktop__contentLink}
              key={index}
              {...link}
            />
          ))}
        </div>
      </div>
    );
  }
}

AccordionDesktop.propTypes = {
  links: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
};

export default AccordionDesktop;

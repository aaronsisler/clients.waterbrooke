import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";

import "./accordion.scss";

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  handleToggle = () =>
    this.setState(prevState => ({
      isExpanded: !prevState.isExpanded
    }));

  render() {
    const { isExpanded } = this.state;
    const hoverClassname = isExpanded
      ? "accordion__content--toggled"
      : undefined;

    return (
      <div
        className="accordion"
        onClick={this.handleToggle}
        // onMouseEnter={this.handleToggle}
        // onMouseLeave={this.handleToggle}
      >
        <h1>{this.props.title}</h1>
        <div className={cn("accordion__content", hoverClassname)}>
          Content for section 1
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  // content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordion;

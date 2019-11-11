import React from "react";
import cn from "classnames";
import PropTypes from "prop-types";
import Hyperlink from "../../atoms/hyperlink";

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
        <h1 className="accordion__title">{this.props.title}</h1>
        <div className={cn("accordion__content", hoverClassname)}>
          {this.props.links.map((link, index) => (
            <Hyperlink
              className="accordion__content-link"
              key={index}
              onClick={this.props.onContentClick}
              {...link}
            />
          ))}
        </div>
      </div>
    );
  }
}

Accordion.propTypes = {
  links: PropTypes.array.isRequired,
  onContentClick: PropTypes.func,
  title: PropTypes.string.isRequired
};

export default Accordion;

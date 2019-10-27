import React from "react";
import PropTypes from "prop-types";

import "./accordian.scss";

class Accordian extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false
    };
  }

  render() {
    return <div className="accordian">Accordian</div>;
  }
}

Accordian.propTypes = {
  content: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default Accordian;

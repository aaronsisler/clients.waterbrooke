import React from "react";
import PropTypes from "prop-types";

import "./team-member.scss";

const TeamMember = ({ imgSrc, name, title }) => (
  <div className="team-member">
    <img className="team-member__image" src={imgSrc} alt={name} />
    <div className="team-member__content">
      <h3 className="team-member__content-name">{name}</h3>
      <h4 className="team-member__content-title">{title}</h4>
    </div>
  </div>
);

TeamMember.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default TeamMember;

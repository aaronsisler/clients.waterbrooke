import React from "react";
import TeamMember from "../../components/team-member";
import leadership from "../../content/leadership";

import "./leadership-container.scss";

const LeadershipContainer = () => (
  <div className="leadership-container">
    <div className="leadership-container__content">
      <h1 className="leadership-container__title">Getting to know your team</h1>
      <p>
        Your family member seeing a familiar face each day is one of the joys of
        living at Waterbrooke.
      </p>
      <div className="leadership-container__team-members">
        {leadership.map((teamMember, index) => (
          <React.Fragment key={index}>
            <TeamMember key={index} {...teamMember} />
            {index !== leadership.length - 1 && <hr />}
          </React.Fragment>
        ))}
      </div>
    </div>
  </div>
);

export default LeadershipContainer;

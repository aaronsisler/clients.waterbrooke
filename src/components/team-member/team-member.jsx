import React from "react";
import PropTypes from "prop-types";
import { Image } from "../../atoms/image";

import styles from "./team-member.module.scss";

const TeamMember = ({ imgSrc, name, title }) => (
  <div className={styles.teamMember}>
    <Image className={styles.teamMember__image} alt={name} src={imgSrc} />
    <div className={styles.teamMember__content}>
      <h3 className={styles.teamMember__contentName}>{name}</h3>
      <h4 className={styles.teamMember__contentTitle}>{title}</h4>
    </div>
  </div>
);

TeamMember.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default TeamMember;

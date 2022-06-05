import React from "react";
import PropTypes from "prop-types";

import styles from "./file-upload.module.scss";

const FileUpload = ({ buttonText, onFileUpload }) => (
  <div className={styles.fileUpload}>
    <input
      id="fileUpload__input"
      type="file"
      className={styles.fileUpload__input}
      onChange={onFileUpload}
    />
    <label htmlFor="fileUpload__input" className={styles.fileUpload__label}>
      {buttonText}
    </label>
  </div>
);

FileUpload.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onFileUpload: PropTypes.func.isRequired,
};

export default FileUpload;

import React from "react";
import PropTypes from "prop-types";

import styles from "./file-upload.module.scss";

const FileUpload = ({ buttonText, onFileUpload }) => (
  <div className={styles.file-upload">
    <input
      id="file-upload__input"
      type="file"
      className={styles.file-upload__input"
      onChange={onFileUpload}
    />
    <label htmlFor="file-upload__input" className={styles.file-upload__label">
      {buttonText}
    </label>
  </div>
);

FileUpload.propTypes = {
  buttonText: PropTypes.string.isRequired,
  onFileUpload: PropTypes.func.isRequired,
};

export default FileUpload;

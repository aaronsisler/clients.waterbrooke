import React from "react";
import PropTypes from "prop-types";

import "./file-upload.scss";

const FileUpload = ({ onFileUpload }) => (
  <div className="file-upload">
    <input
      id="file-upload__input"
      type="file"
      className="file-upload__input"
      onChange={onFileUpload}
    />
    <label htmlFor="file-upload__input" className="file-upload__label">
      Upload Application
    </label>
  </div>
);

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired
};

export default FileUpload;

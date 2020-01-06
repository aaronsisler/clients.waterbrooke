import React from "react";
import PropTypes from "prop-types";

import "./file-upload.scss";

const FileUpload = ({ onFileUpload }) => (
  <div className="file-upload">
    FileUpload
    <br />
    <input type="file" onChange={onFileUpload} />
  </div>
);

FileUpload.propTypes = {
  onFileUpload: PropTypes.func.isRequired
};

export default FileUpload;

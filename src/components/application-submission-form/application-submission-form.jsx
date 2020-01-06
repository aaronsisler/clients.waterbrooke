import React from "react";
import FileUpload from "../file-upload";
import Input from "../../atoms/input";
import { sendEmailWithAttachment } from "../../utils/email";

import "./application-submission-form.scss";
import encodeBase64 from "../../utils/encodeBase64";

class ApplicationSubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Send It",
      emailError: false,
      emailSent: false,
      error: {},
      isSendButtonDisabled: true,
      rawFile: undefined
    };
  }

  handleFileUpload = event => {
    const [rawFile] = event.target.files;

    return this.setState({ rawFile, isSendButtonDisabled: false });
  };

  handleSubmitApplicationForm = async () => {
    this.setState({ buttonText: "Sending", isSendButtonDisabled: true });

    const { rawFile } = this.state;

    const encodedFile = await encodeBase64(rawFile);

    const data = {
      phoneNumber: "9106030899",
      message: "I love the tacos!",
      encodedFile
      // name: "Test name"
    };

    const done = () => this.setState({ emailError: false, emailSent: true });
    const fail = () =>
      this.setState({
        emailError: true,
        isSendButtonDisabled: false,
        buttonText: "Send It"
      });

    sendEmailWithAttachment(data, done, fail);
  };

  render() {
    const { buttonText, isSendButtonDisabled } = this.state;
    return (
      <div className="application-submission-form">
        ApplicationSubmissionForm
        <FileUpload onFileUpload={this.handleFileUpload} />
        <button
          className="application-submission-form__button"
          disabled={isSendButtonDisabled}
          onClick={this.handleSubmitApplicationForm}
        >
          {buttonText}
        </button>
      </div>
    );
  }
}

export default ApplicationSubmissionForm;

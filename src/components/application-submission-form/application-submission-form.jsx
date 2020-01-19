import React from "react";
import cn from "classnames";
import FileUpload from "../file-upload";
import FormError from "../../atoms/form-error";
import Input from "../../atoms/input";
import { sendEmailWithAttachment } from "../../utils/email";
import encodeBase64 from "../../utils/encodeBase64";

import "./application-submission-form.scss";

class ApplicationSubmissionForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      buttonText: "Send It",
      emailError: false,
      emailSent: false,
      error: {},
      isSendButtonDisabled: true,
      message: "",
      name: "",
      rawFile: undefined
    };
  }

  handleFileUpload = event => {
    const [rawFile] = event.target.files;

    return this.setState({ rawFile });
  };

  handleInput = e => {
    const { name: inputName, value: inputValue } = e.target;

    return this.setState(prevState => ({
      ...prevState,
      [inputName]: inputValue
    }));
  };

  handleNameValidation = () => {
    if (!this.state.name) {
      return this.setState(
        prevState => ({
          ...prevState,
          error: { ...prevState.error, name: "Please enter your name" }
        }),
        this.validateRequiredFields()
      );
    }

    return this.setState(
      prevState => ({
        ...prevState,
        error: { ...prevState.error, name: undefined }
      }),
      this.validateRequiredFields()
    );
  };

  handleSubmitApplicationForm = async () => {
    this.setState({ buttonText: "Sending", isSendButtonDisabled: true });

    const { name, message, rawFile } = this.state;

    const encodedFile = await encodeBase64(rawFile);

    const data = {
      encodedFile,
      message,
      name
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

  validateRequiredFields = () => {
    const { error, name, rawFile } = this.state;
    const { name: nameError } = error;

    if (name && rawFile && !nameError) {
      return this.setState({ isSendButtonDisabled: false });
    }

    return this.setState({ isSendButtonDisabled: true });
  };

  render() {
    const {
      buttonText,
      emailSent,
      emailError,
      error,
      isSendButtonDisabled,
      message,
      name,
      rawFile
    } = this.state;

    return (
      <div className="application-submission-form">
        {emailSent && (
          <div className="application-submission-form__email">
            Thank you for reaching out! We are excited to get back in touch with
            you.
          </div>
        )}
        {emailError && (
          <div
            className={cn(
              "application-submission-form__email",
              "application-submission-form__email--error"
            )}
          >
            Something went wrong unfortunately. Please try sending again.
          </div>
        )}
        {!emailSent && (
          <React.Fragment>
            <div className="application-submission-form__input">
              {error.name && <FormError error={error.name} />}
              <Input
                label="Name"
                name="name"
                onBlur={this.handleNameValidation}
                onChange={this.handleInput}
                value={name}
              />
            </div>
            <div className="application-submission-form__file-upload">
              {rawFile && <span>File Uploaded Successfully!</span>}
              <FileUpload onFileUpload={this.handleFileUpload} />
            </div>
            <textarea
              className="application-submission-form__message"
              name="message"
              onChange={this.handleInput}
              placeholder="Is there anything extra you'd like to tell us?"
              rows="4"
              value={message}
            />
            <button
              className="application-submission-form__button"
              disabled={isSendButtonDisabled}
              onClick={this.handleSubmitApplicationForm}
            >
              {buttonText}
            </button>
          </React.Fragment>
        )}
      </div>
    );
  }
}

export default ApplicationSubmissionForm;

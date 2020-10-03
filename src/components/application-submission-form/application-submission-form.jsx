import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import FileUpload from "../file-upload";
import FormError from "../../atoms/form-error";
import Input from "../../atoms/input";
import { encodeBase64, sendEmailWithAttachment } from "../../utils";

import "./application-submission-form.scss";

const errorMessages = {
  name: "Please enter your name"
};

const ApplicationSchema = yup.object().shape({
  name: yup.string().required()
});

const ApplicationSubmissionForm = () => {
  const [rawFile, setRawFile] = useState(undefined);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send It");
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    validationSchema: ApplicationSchema
  });

  if (emailSent) {
    return (
      <div className="application-submission-form">
        <h1 className="application-submission-form__email-sent">
          Thank you for reaching out!
          <br />
          We are excited to get back in touch with you.
        </h1>
      </div>
    );
  }

  const handleFileUpload = event => {
    const [rawFile] = event.target.files;

    return setRawFile(rawFile);
  };

  const onSubmit = async ({ message, name }) => {
    setIsSendButtonDisabled(true);
    setSendButtonText("Sending");

    const encodedFile = await encodeBase64(rawFile);

    const formData = {
      encodedFile,
      message,
      name
    };

    const done = () => {
      setEmailSent(true);
    };
    const fail = () => {
      setSendButtonText("Please try again");
      setIsSendButtonDisabled(false);
    };

    sendEmailWithAttachment(formData, done, fail);
  };

  return (
    <form
      className="application-submission-form"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        hasError={Boolean(errors.name)}
        label="Name"
        name="name"
        refProp={register}
      />
      {errors.name && <FormError error={errorMessages.name} />}
      <div className="application-submission-form__file-upload">
        {rawFile && <span>File Uploaded Successfully!</span>}
        <FileUpload onFileUpload={handleFileUpload} />
      </div>
      <textarea
        className="application-submission-form__message"
        name="message"
        placeholder="Is there anything extra you'd like to tell us?"
        ref={register}
        rows="4"
      />
      <input
        className="application-submission-form__button"
        disabled={
          isSendButtonDisabled ||
          !watch("name") ||
          !rawFile ||
          Object.keys(errors).length
        }
        type="submit"
        value={sendButtonText}
      />
    </form>
  );
};

export default ApplicationSubmissionForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CLIENT_NAME } from "../../config";
import FileUpload from "../file-upload";
import FormError from "../../atoms/form-error";
import Input from "../../atoms/input";
import { encodeBase64, sendEmailWithAttachment } from "../../utils";

import styles from "./application-submission-form.module.scss";

const errorMessages = {
  name: "Please enter your name",
};

const ApplicationSchema = yup.object().shape({
  name: yup.string().required(),
});

const ApplicationSubmissionForm = () => {
  const [rawFile, setRawFile] = useState(undefined);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send It");
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    validationSchema: ApplicationSchema,
  });

  if (emailSent) {
    return (
      <div className={styles.applicationSubmissionForm}>
        <h1 className={styles.applicationSubmissionForm__emailSent}>
          Thank you for reaching out!
          <br />
          We are excited to get back in touch with you.
        </h1>
      </div>
    );
  }

  const handleFileUpload = (event) => {
    const [rawFile] = event.target.files;

    return setRawFile(rawFile);
  };

  const onSubmit = async ({ message, name }) => {
    setIsSendButtonDisabled(true);
    setSendButtonText("Sending");

    const encodedFile = await encodeBase64(rawFile);

    const formData = {
      encodedFile,
      filename: `Application: ${name}.pdf`,
      message,
      subject: `${CLIENT_NAME} Application from ${name}`,
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
      className={styles.applicationSubmissionForm}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Input
        hasError={Boolean(errors.name)}
        label="Name"
        name="name"
        refProp={register}
      />
      {errors.name && <FormError error={errorMessages.name} />}
      <div className={styles.applicationSubmissionForm__fileUpload}>
        {rawFile && <span>File Uploaded Successfully!</span>}
        <FileUpload
          buttonText="Upload Application"
          onFileUpload={handleFileUpload}
        />
      </div>
      <textarea
        className={styles.applicationSubmissionForm__message}
        name="message"
        placeholder="Is there anything extra you'd like to tell us?"
        ref={register}
        rows="4"
      />
      <input
        className={styles.applicationSubmissionForm__button}
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

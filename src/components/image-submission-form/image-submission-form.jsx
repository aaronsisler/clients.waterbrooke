import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import { CLIENT_NAME } from "../../config";
import FileUpload from "../file-upload";
import FormError from "../../atoms/form-error";
import Input from "../../atoms/input";
import {
  encodeBase64,
  isValidImageType,
  sendEmailWithAttachment,
} from "../../utils";

import styles from "./image-submission-form.module.scss";

const errorMessages = {
  name: "Please enter your name",
  fileType: "Valid image types: jpeg, jpg, png",
};

const ImageUploadSchema = yup.object().shape({
  name: yup.string().required(),
});

const ImageSubmissionForm = () => {
  const [rawFile, setRawFile] = useState(undefined);
  const [fileType, setFileType] = useState(undefined);
  const [isValidFileType, setIsValidFileType] = useState(true);
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send It");
  const [emailSent, setEmailSent] = useState(false);
  const { register, handleSubmit, watch, errors } = useForm({
    mode: "onBlur",
    validationSchema: ImageUploadSchema,
  });
  if (emailSent) {
    return (
      <div className={styles.imageSubmissionForm}>
        <p className={styles.imageSubmissionForm__emailSent}>
          Thank you!
          <br />
          We are excited to get back in touch with you.
        </p>
      </div>
    );
  }
  const handleFileUpload = (event) => {
    const [rawFile] = event.target.files;
    if (!rawFile) {
      setRawFile(undefined);
      setIsValidFileType(false);
      return;
    }
    const fileType = rawFile.type.split("/")[1];
    const isValid = isValidImageType(fileType);
    setFileType(fileType);
    setIsValidFileType(isValid);
    setRawFile(rawFile);
    return;
  };
  const onSubmit = async ({ message, name }) => {
    setIsSendButtonDisabled(true);
    setSendButtonText("Sending");
    const encodedFile = await encodeBase64(rawFile);
    const formData = {
      encodedFile,
      filename: `Image Verification: ${name}.${fileType}`,
      message,
      name,
      subject: `${CLIENT_NAME}: Image Verification from ${name}`,
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
  // return (
  //   <form
  //     className={styles.imageSubmissionForm}
  //     onSubmit={handleSubmit(onSubmit)}
  //   >
  //     {/* <Input
  //       hasError={Boolean(errors.name)}
  //       label="Name"
  //       name="name"
  //       registerProp={register}
  //     /> */}
  //     {errors.name && <FormError error={errorMessages.name} />}
  //     <div className={styles.imageSubmissionForm__fileUpload}>
  //       <FileUpload buttonText="Upload Image" onFileUpload={handleFileUpload} />
  //       {rawFile && isValidFileType && (
  //         <span>Image Uploaded Successfully!</span>
  //       )}
  //     </div>
  //     {!isValidFileType && <FormError error={errorMessages.fileType} />}
  //     {/* <textarea
  //       className={styles.imageSubmissionForm__message}
  //       name="message"
  //       placeholder="Is there anything extra you'd like to tell us?"
  //       ref={register}
  //       rows="4"
  //     /> */}
  //     {/* <input
  //       className={styles.imageSubmissionForm__button}
  //       disabled={
  //         isSendButtonDisabled ||
  //         !watch("name") ||
  //         !rawFile ||
  //         !isValidFileType ||
  //         Object.keys(errors).length
  //       }
  //       type="submit"
  //       value={sendButtonText}
  //     /> */}
  //   </form>
  // );
  return <></>;
};

export default ImageSubmissionForm;

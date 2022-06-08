import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { sendEmail } from "../../utils";
import FormError from "../../atoms/form-error";
import Input from "../../atoms/input";

import styles from "./contact-form.module.scss";

const errorMessages = {
  emailAddress: "Please enter a valid email address",
  name: "Please enter your name",
  phoneNumber: "Phone number must be 10 digits",
};

const ContactSchema = yup.object().shape({
  emailAddress: yup.string().email().required(),
  name: yup.string().required(),
  phoneNumber: yup
    .string()
    .test(
      "is-phone-number",
      errorMessages.phoneNumber,
      (value) =>
        value.trim() === "" || (value.match(/^[0-9]*$/) && value.length === 10)
    ),
});

const ContactForm = () => {
  const [isSendButtonDisabled, setIsSendButtonDisabled] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [sendButtonText, setSendButtonText] = useState("Send It");
  const {
    register,
    handleSubmit,
    watch,
    errors = {},
  } = useForm({
    mode: "onBlur",
    validationSchema: ContactSchema,
  });

  if (emailSent) {
    return (
      <div className={styles.contactForm}>
        <h1 className={styles.contactForm__emailSent}>
          Thank you for reaching out!
          <br />
          We are excited to get back in touch with you.
        </h1>
      </div>
    );
  }

  const onSubmit = ({ emailAddress, message, name, phoneNumber }) => {
    setIsSendButtonDisabled(true);
    setSendButtonText("Sending");

    const formData = {
      emailAddress,
      message,
      name,
      phoneNumber,
    };

    const done = () => {
      setEmailSent(true);
    };
    const fail = () => {
      setSendButtonText("Please try again");
      setIsSendButtonDisabled(false);
    };

    sendEmail(formData, done, fail);
  };

  return (
    <form className={styles.contactForm} onSubmit={handleSubmit(onSubmit)}>
      <h1 className={styles.contactForm__title}>Have some questions?</h1>
      <Input
        hasError={Boolean(errors?.name)}
        label="Name"
        name="name"
        registerProp={register}
      />
      {errors?.name && <FormError error={errorMessages.name} />}
      <Input
        hasError={Boolean(errors?.emailAddress)}
        label="Email"
        name="emailAddress"
        registerProp={register}
      />
      {errors?.emailAddress && <FormError error={errorMessages.emailAddress} />}
      <Input
        hasError={Boolean(errors?.phoneNumber)}
        label="Phone (Digits only, no dashes, etc.)"
        name="phoneNumber"
        registerProp={register}
      />
      {errors?.phoneNumber && <FormError error={errorMessages.phoneNumber} />}
      <textarea
        className={styles.contactForm__message}
        name="message"
        placeholder="What's on your mind?"
        {...register}
        rows="4"
      />
      <input
        className={styles.contactForm__button}
        disabled={
          isSendButtonDisabled ||
          !watch("name") ||
          !watch("emailAddress") ||
          Object.keys(errors).length
        }
        type="submit"
        value={sendButtonText}
      />
    </form>
  );
};

export default ContactForm;

import axios from "axios";
import { validate } from "email-validator";
import {
  CLIENT_NAME,
  HR_CONTACT_EMAIL,
  MARKETING_CONTACT_EMAIL,
  SERVICES_GATEWAY_URL
} from "../config";

const headers = {
  "Content-Type": "application/json"
};

const emailOptions = { headers };

export const isEmailValid = emailAddress => validate(emailAddress);

export const sendEmail = async (data, done, fail) => {
  const emailData = {
    clientName: CLIENT_NAME,
    pointOfContactEmail: MARKETING_CONTACT_EMAIL,
    ...data
  };

  try {
    await axios.post(`${SERVICES_GATEWAY_URL}/email`, emailData, emailOptions);
    done();
  } catch (e) {
    fail();
  }
};

export const sendEmailWithAttachment = async (data, done, fail) => {
  const emailData = {
    clientName: CLIENT_NAME,
    pointOfContactEmail: HR_CONTACT_EMAIL,
    ...data
  };

  try {
    await axios.post(
      `${SERVICES_GATEWAY_URL}/email-with-attachment`,
      emailData,
      emailOptions
    );
    done();
  } catch (e) {
    fail();
  }
};

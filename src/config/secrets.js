/* eslint-disable import/prefer-default-export */
import getConfig from "next/config";
const { publicRuntimeConfig } = getConfig();

//Services Gateway Config
export const SERVICES_API_KEY = publicRuntimeConfig.SERVICES_API_KEY;

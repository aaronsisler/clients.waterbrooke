import { getCdnUrl } from "../config";

const CDN_URL = getCdnUrl("/activities");

const eventImages = [
  {
    altText: "Disco party for residents",
    desktopImgSrc: `${CDN_URL}/activities-container__disco--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/activities-container__disco--desktop.jpg`
  },
  {
    altText: "Tea party for residents on Mother's Day",
    desktopImgSrc: `${CDN_URL}/activities-container__tea--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/activities-container__tea--desktop.jpg`
  },
  {
    altText: "Santa visiting the residents during Christmas party",
    desktopImgSrc: `${CDN_URL}/activities-container__santa--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/activities-container__santa--desktop.jpg`
  }
];

const activities = [
  "Monthly Resident Outing (Weather Permitting)",
  "SPCA Pet Visit",
  "Monthly Birthday Party",
  "Bingo",
  "Exercise Activities",
  "Kingdom Hall Bible Study",
  "Devotion",
  "Resident Council Meeting Monthly",
  "Men's Club",
  "One to One Room Visits",
  "Memory Stimulation",
  "Front & Back Porch Activities (Weather Permitting)",
  "Cooking Class",
  "Arts & Crafts",
  "Wade Nevans & Friends Gospel Group",
  "Visit from Elizabeth City / Pasquotank County Senior Center",
  "Visit from Perquimans County Senior Center",
  "Annual Senior Prom (Summer)",
  "Annual Christmas Party (December)"
];

export { activities, eventImages };

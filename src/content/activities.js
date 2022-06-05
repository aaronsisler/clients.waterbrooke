import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/activities");

const eventImages = [
  {
    alt: "Disco party for residents",
    src: `${CDN_URL}/activities-container__disco.jpg`,
  },
  {
    alt: "Tea party for residents on Mother's Day",
    src: `${CDN_URL}/activities-container__tea.jpg`,
  },
  {
    alt: "Santa visiting the residents during Christmas party",
    src: `${CDN_URL}/activities-container__santa.jpg`,
  },
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
  "Annual Christmas Party (December)",
];

export { activities, eventImages };

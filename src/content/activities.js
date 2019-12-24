import { IMAGES_CDN } from "../config";

const headerImage = {
  altText: "Header image",
  desktopImgSrc: `${IMAGES_CDN}/amenities-container__library--desktop.jpg`,
  mobileImgSrc: `${IMAGES_CDN}/amenities-container__library--mobile.png`
};

const eventImages = [
  {
    altText: "Disco party for residents",
    desktopImgSrc: `${IMAGES_CDN}/activities-container__disco--desktop.jpg`,
    mobileImgSrc: `${IMAGES_CDN}/activities-container__disco--desktop.jpg`
  },
  {
    altText: "Tea party for residents on Mother's Day",
    desktopImgSrc: `${IMAGES_CDN}/activities-container__tea--desktop.jpg`,
    mobileImgSrc: `${IMAGES_CDN}/activities-container__tea--desktop.jpg`
  },
  {
    altText: "Santa visiting the residents during Christmas party",
    desktopImgSrc: `${IMAGES_CDN}/activities-container__santa--desktop.jpg`,
    mobileImgSrc: `${IMAGES_CDN}/activities-container__santa--desktop.jpg`
  }
];

export { eventImages, headerImage };

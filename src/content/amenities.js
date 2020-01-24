import { getCdnUrl } from "../config";

const CDN_URL = getCdnUrl("/amenities");

const amenities = [
  {
    altText: "Outdoor porch on sunny day",
    desktopImgSrc: `${CDN_URL}/amenities-container__porch--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/amenities-container__porch--mobile.png`,
    amenityGroupContent: [
      {
        title: "Outdoor porches",
        content:
          "Our front porch is a great place to sit in a rocking chair and enjoy the fresh air. Our back porch offers a privacy courtyard."
      },
      {
        title: "Handicap Accessibility",
        content:
          "Waterbrooke is easily navigated and accessible for individuals using wheelchairs and other assistive devices."
      }
    ]
  },
  {
    altText: "Library with two sitting chairs",
    desktopImgSrc: `${CDN_URL}/amenities-container__library--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/amenities-container__library--mobile.png`,
    amenityGroupContent: [
      {
        title: "Library",
        content:
          "Waterbrookes library offers a variety of books and magazines. The library offers a quiet place for families or friends to sit and visit. Our activities department also utilizes the library for small group and one-on-one activities."
      },
      {
        title: "Family Rooms",
        content:
          "We offer two rooms equipped with large, flat-screen TVs for our residents' enjoyment."
      }
    ]
  },
  {
    altText: "Small concierge bus",
    desktopImgSrc: `${CDN_URL}/amenities-container__bus--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/amenities-container__bus--mobile.png`,
    amenityGroupContent: [
      {
        title: "Transportation",
        content:
          "We utilize a handicap accessible vehicle for transportation to and from local medical appointments and for outings."
      },
      {
        title: "Dining Rooms",
        content:
          "We pride ourselves on the cleanliness and care our dietary staff takes to ensure dining rooms are ready for a variety of uses, from preparing and serving meals to meetings and private parties."
      }
    ]
  },
  {
    altText: "Convenience store with items",
    desktopImgSrc: `${CDN_URL}/amenities-container__store--desktop.jpg`,
    mobileImgSrc: `${CDN_URL}/amenities-container__store--mobile.png`,
    amenityGroupContent: [
      {
        title: "Convenience Store",
        content:
          "Our convenience store offers a wide variety of items that you may find at a local convenience or five-and-dime store. All proceeds go directly to our residents' activities funds."
      },
      {
        title: "Beauty/Barber Shop",
        content:
          "Our beauty/barber shop is open weekly for haircuts, styling, manicures, and pedicures."
      }
    ]
  }
];

export default amenities;

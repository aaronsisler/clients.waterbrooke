import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/amenities");

const amenities = [
  {
    content:
      "Our front porch is a great place to sit in a rocking chair and enjoy the fresh air. Our back porch offers a privacy courtyard.",
    title: "Outdoor porches",
    image: {
      altText: "Outdoor porch on sunny day",
      src: `${CDN_URL}/amenities-container__porch.jpg`
    }
  },
  {
    content:
      "Waterbrooke's library offers a variety of books and magazines. The library offers a quiet place for families or friends to sit and visit. Our activities department also utilizes the library for small group and one-on-one activities.",
    title: "Library",
    image: {
      altText: "Library with two sitting chairs",
      src: `${CDN_URL}/amenities-container__library.jpg`
    }
  },
  {
    content:
      "We offer two rooms equipped with large, flat-screen TVs for our residents' enjoyment.",
    title: "Family Rooms",
    image: {
      altText: "Family room with large screen tv",
      src: `${CDN_URL}/amenities-container__family-room.jpg`
    }
  },
  {
    content:
      "We have a resident dog, named Patches, who loves to sit and enjoy your company.",
    title: "Friendly neighbors",
    image: {
      altText: "Two staff members with resident dog",
      src: `${CDN_URL}/amenities-container__dog.jpg`
    }
  },
  {
    content:
      "We utilize a handicap accessible vehicle for transportation to and from local medical appointments and for outings.",
    title: "Transportation",
    image: {
      altText: "Small concierge bus",
      src: `${CDN_URL}/amenities-container__bus.jpg`
    }
  },
  {
    content:
      "We pride ourselves on the cleanliness and care our dietary staff takes to ensure dining rooms are ready for a variety of uses, from preparing and serving meals to meetings and private parties.",
    title: "Dining Rooms",
    image: {
      altText: "Dining room with chairs and tables",
      src: `${CDN_URL}/amenities-container__dining.jpg`
    }
  },
  {
    content:
      "Our convenience store offers a wide variety of items that you may find at a local convenience or five-and-dime store. All proceeds go directly to our residents' activities funds.",
    title: "Convenience Store",
    image: {
      altText: "Convenience store with items",
      src: `${CDN_URL}/amenities-container__store.jpg`
    }
  },
  {
    content:
      "Our beauty/barber shop is open weekly for haircuts, styling, manicures, and pedicures.",
    title: "Beauty/Barber Shop",
    image: {
      altText: "Stylist at her station",
      src: `${CDN_URL}/amenities-container__salon.jpg`
    }
  },
  {
    content:
      "Waterbrooke has a dedicated hospice room to allow for a peaceful transition.",
    title: "Hospice Room"
  },
  {
    content:
      "Waterbrooke is easily navigated and accessible for individuals using wheelchairs and other assistive devices.",
    title: "Handicap Accessibility"
  }
];

export default amenities;

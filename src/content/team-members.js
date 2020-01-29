import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/leadership");

const teamMembers = [
  {
    imgSrc: `${CDN_URL}/dana_rabon.jpeg`,
    name: "Dana Rabon",
    title: "RPh Executive Director"
  },
  {
    imgSrc: `${CDN_URL}/rhonda_boyd_todd.jpeg`,
    name: "Rhonda Boyd Todd",
    title: "Administrator"
  },
  {
    imgSrc: `${CDN_URL}/morticia_butcher.jpeg`,
    name: "Morticia Butcher",
    title: "Resident Care Director"
  },
  {
    imgSrc: `${CDN_URL}/yolanda_thatch.jpeg`,
    name: "Yolanda Thatch",
    title: "Special Care Unit Director"
  },
  {
    imgSrc: `${CDN_URL}/marie_bell.jpeg`,
    name: "Marie Bell",
    title: "Transportation Director"
  },
  {
    imgSrc: `${CDN_URL}/audrey_clark.jpeg`,
    name: "Audrey Clark",
    title: "Admission/Marketing Director"
  },
  {
    imgSrc: `${CDN_URL}/brenda_helms.jpeg`,
    name: "Brenda Helms",
    title: "Human Resource Director"
  },
  {
    imgSrc: `${CDN_URL}/adela_pena.jpeg`,
    name: "Adela Pena",
    title: "Dietary & Environmental Service Director"
  },
  {
    imgSrc: `${CDN_URL}/jennifer_white.jpeg`,
    name: "Jennifer White",
    title: "Activity Director"
  }
];

export default teamMembers;

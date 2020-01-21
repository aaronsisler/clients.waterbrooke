import { getCdnUrl } from "../config";

const CDN_URL = getCdnUrl("/leadership");

const teamMembers = [
  {
    imgSrc: `${CDN_URL}/jennifer_white.png`,
    name: "Jennifer White",
    title: "Activity Director"
  },
  {
    imgSrc: `${CDN_URL}/dana_rabon.png`,
    name: "Dana Rabon",
    title: "RPh Executive Director"
  },
  {
    imgSrc: `${CDN_URL}/adela_pena.png`,
    name: "Adela Pena",
    title: "Dietary & Environmental Service Director"
  },
  {
    imgSrc: `${CDN_URL}/brenda_helms.png`,
    name: "Brenda Helms",
    title: "Human Resource Director"
  },
  {
    imgSrc: `${CDN_URL}/marie_bell.png`,
    name: "Marie Bell",
    title: "Transportation Director"
  },
  {
    imgSrc: `${CDN_URL}/morticia_butcher.png`,
    name: "Morticia Butcher",
    title: "Resident Care Director"
  },
  {
    imgSrc: `${CDN_URL}/rhonda_boyd_todd.png`,
    name: "Rhonda Boyd Todd",
    title: "Administrator"
  },
  {
    imgSrc: `${CDN_URL}/yolanda_thatch.png`,
    name: "Yolanda Thatch",
    title: "Special Care Unit Director"
  },
  {
    imgSrc: `${CDN_URL}/audrey_clark.png`,
    name: "Audrey Clark",
    title: "Admission/Marketing Director"
  }
];

export default teamMembers;

import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/leadership");

const teamMembers = [
  {
    imgSrc: `${CDN_URL}/dana_rabon.jpg`,
    name: "Dana Rabon",
    title: "RPh Executive Director"
  },
  {
    imgSrc: `${CDN_URL}/rhonda_boyd_todd.jpg`,
    name: "Rhonda Boyd Todd",
    title: "Administrator"
  },
  {
    imgSrc: `${CDN_URL}/morticia_butcher.jpg`,
    name: "Morticia Butcher",
    title: "Resident Care Director"
  },
  {
    imgSrc: `${CDN_URL}/yolanda_thatch.jpg`,
    name: "Yolanda Thatch",
    title: "Special Care Unit Director"
  },
  {
    imgSrc: `${CDN_URL}/glen_needham.jpg`,
    name: "Glen Needham",
    title: "Clinical Supervising RN"
  },
  {
    imgSrc: `${CDN_URL}/marie_bell.jpg`,
    name: "Marie Bell",
    title: "Transportation Director"
  },
  {
    imgSrc: `${CDN_URL}/audrey_clark.jpg`,
    name: "Audrey Clark",
    title: "Admission/Marketing Director"
  },
  {
    imgSrc: `${CDN_URL}/suzie_nixon.jpg`,
    name: "Suzie Nixon",
    title: "Human Resource Director"
  },
  {
    imgSrc: `${CDN_URL}/wes_newby.jpg`,
    name: "Wes Newby",
    title: "Dietary & Environmental Service Director"
  },
  {
    imgSrc: `${CDN_URL}/jennifer_white.jpg`,
    name: "Jennifer White",
    title: "Activity Director"
  }
];

export default teamMembers;

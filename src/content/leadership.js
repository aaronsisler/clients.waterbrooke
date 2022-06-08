import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/leadership");

const teamMembers = [
  {
    imgSrc: `${CDN_URL}/dana_rabon.jpg`,
    name: "Dana Rabon",
    title: "RPh Executive Director",
  },
  {
    imgSrc: `${CDN_URL}/rhonda_boyd_todd.jpg`,
    name: "Rhonda Boyd Todd",
    title: "Administrator",
  },
  {
    imgSrc: `${CDN_URL}/audrey_clark.jpg`,
    name: "Audrey Clark",
    title: "Asst. Administrator/Special Care Unit Director",
  },
  {
    imgSrc: `${CDN_URL}/marie_bell.jpg`,
    name: "Marie Bell",
    title: "Transportation Director",
  },
  {
    imgSrc: `${CDN_URL}/suzie_nixon.jpg`,
    name: "Suzie Nixon",
    title: "Human Resource Director",
  },
];

export default teamMembers;

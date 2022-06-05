import { getCdnUrl } from "../utils";

const CDN_URL = getCdnUrl("/shared");

const modelRoomImages = [
  {
    alt: "Model room with bed",
    src: `${CDN_URL}/shared__model-room-4.jpeg`,
  },
  {
    alt: "Double doors in model room",
    src: `${CDN_URL}/shared__model-room-1.jpeg`,
  },
  {
    alt: "Chair in model room",
    src: `${CDN_URL}/shared__model-room-3.jpeg`,
  },
];

export { modelRoomImages };

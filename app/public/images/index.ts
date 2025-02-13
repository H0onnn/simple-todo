import LOGO from "./kanban.svg";

const IMAGES = {
  LOGO,
} as const;

export type ImageType = keyof typeof IMAGES;
export default IMAGES;

import { StaticImageData } from "next/image";

export default interface Piece {
  slug: string;
  title: string;
  description: string;
  mainImage: StaticImageData;
  thumb: StaticImageData;
  alt: string;
  frameColor: string;
  type: "sculpture" | "painting";
}

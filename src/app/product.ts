import { Image } from "./image";

export interface Product {
  id: number,
  name: string,
  description: string,
  brandId: number,
  createDate: any,
  images: Image[]
}
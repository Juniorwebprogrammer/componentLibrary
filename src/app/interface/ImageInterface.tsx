import { StaticImageData } from "next/image";

export default interface ImageInterface {
    src: string  | StaticImageData;
    alt: string;
    width: number;
    height: number;
    quality?: number;
    priority?: boolean;
    loading?: 'eager' | 'lazy';
    loadingState: boolean;
    sizeLoading: number;
};
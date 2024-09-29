import { SxProps } from "@mui/material";

export default interface AvatarProps {
    alt: string;
    src: string;
    variant: "circular" | "rounded" | "square";
    sxAvatar?: SxProps;
};
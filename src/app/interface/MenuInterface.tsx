import { SxProps } from "@mui/material";

export default interface MenuInterface {
    color: 'inherit' | 'action' | 'disabled' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    onClick?: () => void;
    sxMenu?: SxProps;
};
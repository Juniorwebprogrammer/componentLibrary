import { SxProps } from "@mui/material";

export default interface SelectInterface {
    options: {
        label: string;
        value: string;
        startIcon?: React.ReactNode;
        endIcon?: React.ReactNode;
    } [];
    defaultValue: string;
    autoWidth: boolean;
    onValueChange?: (value: string) => void;
    width?: number;
    height?: number;
    sxSelect?: SxProps;
    sxStartIcon?: SxProps;
    sxEndIcon?: SxProps;
};
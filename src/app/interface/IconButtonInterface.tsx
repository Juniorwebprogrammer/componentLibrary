import { SxProps } from "@mui/material";

export default interface IconButtonInterface {
    color: 'inherit' | 'default' | 'primary' | 'secondary' | 'error' | 'info' | 'success' | 'warning';
    size: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
    disabled?: boolean;
    loading?: boolean;
    sizeLoading?: number;
    textLoading?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    sxIconButton?: SxProps;
};
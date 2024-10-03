import { SxProps } from "@mui/material";

export default interface ButtonInterface {
    variant: 'text' | 'contained' | 'outlined';
    color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
    size: 'small' | 'medium' | 'large';
    children?: React.ReactNode;
    onClick?: () => void;
    loading?: boolean;
    sizeLoading?: number;
    textLoading?: string;
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    fullWidth?: boolean;
    disabled?: boolean;
    sxButton?: SxProps;
};
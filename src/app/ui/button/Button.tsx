'use client';
import { Button, CircularProgress } from '@mui/material';

import ButtonInterface from '../../interface/ButtonInterface';

export default function ButtonComponent({
    variant,
    color,
    size,
    onClick,
    children,
    startIcon,
    endIcon,
    fullWidth,
    disabled,
    loading,
    sizeLoading,
    textLoading,
    sxButton,
}: ButtonInterface) {

    return (
        <Button 
            variant={variant} 
            color={color}
            size={size}
            onClick={onClick}
            startIcon={loading ? <CircularProgress size={sizeLoading} /> : startIcon}
            endIcon={endIcon}
            fullWidth={fullWidth}
            disabled={loading || disabled}
            sx={sxButton}
        >
            {loading ? textLoading : children}
        </Button>
    );
}
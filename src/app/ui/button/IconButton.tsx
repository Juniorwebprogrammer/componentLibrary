import { CircularProgress, IconButton } from "@mui/material"

import IconButtonInterface from "../../interface/IconButtonInterface"

export default function IconButtonComponent({
    color,
    size,
    disabled,
    loading,
    sizeLoading,
    startIcon,
    endIcon,
    children,
    onClick,
    sxIconButton
}: IconButtonInterface) {
    return (
        <IconButton
            color={color}
            size={size}
            disabled={loading || disabled}
            onClick={onClick}
            sx={sxIconButton}
        >
            {loading ? (
                 <CircularProgress size={sizeLoading} color="inherit" />
                ) : (
                    <>
                        {startIcon}
                        {children}
                        {endIcon}    
                    </>
                )}
        </IconButton>
    )
}
import { CircularProgress, IconButton } from "@mui/material"

import IconButtonInterface from "../../interface/IconButtonInterface"

export default function IconButtonComponent({
    color,
    size,
    disabled,
    loading,
    sizeLoading,
    textLoading,
    startIcon,
    endIcon,
    children,
    sxIconButton
}: IconButtonInterface) {
    return (
        <IconButton
            color={color}
            size={size}
            disabled={loading || disabled}
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
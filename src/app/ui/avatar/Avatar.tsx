import { Avatar as MuiAvatar, Grid2 } from "@mui/material";

import AvatarProps from "../../interface/AvatarInterface";

export default function CustomAvatar({
    alt,
    src,
    variant,
    sxAvatar
}: AvatarProps) {
    return (
        <Grid2 container>
            <MuiAvatar 
                alt={alt}
                src={src}
                variant={variant}
                sx={sxAvatar}
            />
        </Grid2>
    )
}
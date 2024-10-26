import Grid from "@mui/material/Grid2";

import NavigationProps from "../../interface/NavigationInterface";

export default function Navigation({
    columns,
    size,
    spacing,
    leftContent, 
    centerContent, 
    rightContent,
    backgroundColor, 
    sxContainer,
    sxItemLeftContainer,
    sxItemCenterContainer,
    sxItemRightContainer
}: NavigationProps) {
    return (
        <Grid container columns={columns} spacing={spacing} sx={{
            ...sxContainer,
            backgroundColor: backgroundColor
        }}>
            <Grid size={size} sx={sxItemLeftContainer}>
                {leftContent}
            </Grid>
            <Grid size={size} sx={sxItemCenterContainer}>
                {centerContent}
            </Grid>
            <Grid size={size} sx={sxItemRightContainer}>
                {rightContent}
            </Grid>
        </Grid>
    )
}
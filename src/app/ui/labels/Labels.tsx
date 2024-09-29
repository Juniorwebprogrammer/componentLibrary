import { Typography } from "@mui/material";
import LabelsInterface from "../../interface/LabelsInterface";

export default function Labels({
    variant,
    component = 'h1',
    color,
    fontSize,
    fontFamily,
    fontWeight,
    children,
    sxLabels
}: LabelsInterface) {
    return (
        <Typography 
            variant={variant} 
            component={component} 
            color={color} 
            fontSize={fontSize} 
            fontFamily={fontFamily}
            fontWeight={fontWeight}
            sx={sxLabels}
        >
            {children}
        </Typography>
    );
}
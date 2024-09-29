import { SxProps } from "@mui/material";

import { VariantOptions } from "../types/VariantOptions";
import { ColorOptions } from "../types/ColorOptions";

export default interface LabelsInterface {
    variant: VariantOptions,
    component?: React.ElementType,
    color?: ColorOptions,
    fontSize: number,
    fontFamily?: string,
    fontWeight?: number,
    children: React.ReactNode,
    sxLabels?: SxProps
}
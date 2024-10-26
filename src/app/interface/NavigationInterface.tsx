import { SxProps } from "@mui/material/styles";

// types

import { SizeOptions } from "../types/SizeOptions";
import { ColumnsOptions } from "../types/ColumnsOptions";

export default interface NavigationProps {
    columns: ColumnsOptions;
    size: SizeOptions;
    spacing: number;
    leftContent: React.ReactNode;
    centerContent: React.ReactNode;
    rightContent: React.ReactNode;
    backgroundColor?: string;
    sxContainer?: SxProps;
    sxItemLeftContainer?: SxProps;
    sxItemCenterContainer?: SxProps;
    sxItemRightContainer?: SxProps;
}
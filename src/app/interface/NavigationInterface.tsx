import { SxProps } from "@mui/material/styles";

// types

import { SizeOptions } from "@/app/types/SizeOptions";
import { ColumnsOptions } from "@/app/types/ColumnsOptions";

export default interface NavigationProps {
    columns: ColumnsOptions;
    size: SizeOptions;
    spacing: number;
    leftContent: React.ReactNode;
    centerContent: React.ReactNode;
    rightContent: React.ReactNode;
    sxContainer?: SxProps;
    sxItemLeftContainer?: SxProps;
    sxItemCenterContainer?: SxProps;
    sxItemRightContainer?: SxProps;
}
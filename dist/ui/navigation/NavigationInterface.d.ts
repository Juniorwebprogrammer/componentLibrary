import { SxProps } from "@mui/material/styles";
type SizeOptions = {
    sx?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
type ColumnsOptions = {
    sx?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
};
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
export {};

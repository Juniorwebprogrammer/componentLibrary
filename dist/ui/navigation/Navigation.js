"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Navigation;
var Grid2_1 = __importDefault(require("@mui/material/Grid2"));
function Navigation(_a) {
    var columns = _a.columns, size = _a.size, spacing = _a.spacing, leftContent = _a.leftContent, centerContent = _a.centerContent, rightContent = _a.rightContent, sxContainer = _a.sxContainer, sxItemLeftContainer = _a.sxItemLeftContainer, sxItemCenterContainer = _a.sxItemCenterContainer, sxItemRightContainer = _a.sxItemRightContainer;
    return (React.createElement(Grid2_1.default, { container: true, columns: columns, sx: sxContainer, spacing: spacing },
        React.createElement(Grid2_1.default, { size: size, sx: sxItemLeftContainer }, leftContent),
        React.createElement(Grid2_1.default, { size: size, sx: sxItemCenterContainer }, centerContent),
        React.createElement(Grid2_1.default, { size: size, sx: sxItemRightContainer }, rightContent)));
}

import { useState } from "react";
import { Close, Sort } from "@mui/icons-material";
import IconButtonComponent from "../button/IconButton";

import MenuInterface from "../../interface/MenuInterface";

export default function Menu({
    color,
    onClick,
    sxMenu
}: MenuInterface) {

    const [isSortVisible, setIsSortVisible] = useState(true);

    const handleClick = () => {
        setIsSortVisible(prev => !prev);
        if(onClick) {
            onClick();
        }
    }

    return(
        <IconButtonComponent
            color='default'
            size='medium'
            onClick={handleClick}
            children= {
                isSortVisible ? (
                    <Sort color={color} sx={sxMenu}/>
                ) : (
                    <Close color={color} sx={sxMenu}/>
                )
            }
        />
    )
}
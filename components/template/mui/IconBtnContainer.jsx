import { IconButton } from "@mui/material"
import IconContainer from "./IconContainer"
export default function IconBtnContainer({
    iconBtnProps
}) {
    return (
        <IconButton
        {...iconBtnProps}
        >
            <IconContainer icoProps={iconBtnProps.icoProps} />
        </IconButton>
    )
}
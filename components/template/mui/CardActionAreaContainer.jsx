import { CardActionArea } from "@mui/material";
export default function CardActionAreaContainer({
    children,
    cardActionAreaProps
}) {
    return (
        <CardActionArea
            {...cardActionAreaProps}
        >
            {children}
        </CardActionArea>
    )
}

import { CardContent } from "@mui/material";

export default function CardContentContainer({
    children,
    cardContentProps
}) {
    return (
        <CardContent
            {...cardContentProps}
        >
            {children}
        </CardContent>
    )
}

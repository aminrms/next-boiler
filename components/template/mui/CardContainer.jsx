import { Card } from "@mui/material";
export default function CardContainer({
    children,
    cardProps
}) {
    return (
        <Card
            {...cardProps}
        >
            {children}
        </Card>
    )
}

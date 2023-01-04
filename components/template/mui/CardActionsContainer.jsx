import { CardActions } from "@mui/material";

export default function CardActionsContainer({
    children,
    cardActionsProps
}) {
    return (
        <CardActions
            {...cardActionsProps}
        >
            {children}
        </CardActions>
    )
}

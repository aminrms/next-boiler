import { Fab } from "@mui/material";

export default function FabContainer({
    fabProps,
    children
}) {
    return (
        <Fab
            {...fabProps}
        >
            {children}
        </Fab>
    )
}

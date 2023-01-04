import { Box } from "@mui/material"
export default function BoxContainer({
    boxProps,
    children
}) {
    return (
        <Box
            {...boxProps}
        >
            {children}
        </Box>
    )
}

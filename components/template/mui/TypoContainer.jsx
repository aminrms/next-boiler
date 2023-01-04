import { Typography } from '@mui/material'
export default function TypoContainer({
    typoProps
}) {
    return (
        <Typography
            {...typoProps}
        >
            {typoProps.text}
        </Typography>
    )
}
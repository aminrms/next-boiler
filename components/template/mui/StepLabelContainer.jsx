import { StepLabel } from '@mui/material'
export default function StepLabelContainer({
    children,
    stepLabelProps
}) {
    return (
        <StepLabel
            {...stepLabelProps}
        >
            {children}
        </StepLabel>
    )
}

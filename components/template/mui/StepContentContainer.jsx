import { StepContent } from "@mui/material";

export default function StepContentContainer({
    stepContentProps,
    children
}) {
    return (
        <StepContent
            {...stepContentProps}
        >
            {children}
        </StepContent>
    )
}

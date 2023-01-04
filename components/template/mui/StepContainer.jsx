import { Step } from "@mui/material";

export default function StepContainer({
    children,
    stepProps
}) {
    return (
        <Step
            {...stepProps}
        >
            {children}
        </Step>
    )
}

import { Stepper } from "@mui/material";

export default function StepperContainer({
    children,
    stepperProps,
}) {
    return (
        <Stepper
            {...stepperProps}
        >
            {children}
        </Stepper>
    )
}

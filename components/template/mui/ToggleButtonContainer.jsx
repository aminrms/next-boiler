import { ToggleButton, ToggleButtonGroup } from "@mui/material";

export default function ToggleButtonContainer({
    toggleButtonProps
}) {
    return (
        <ToggleButtonGroup
            {...toggleButtonProps}
        >
            {
                toggleButtonProps?.data?.map((itm, idx) => (
                    <ToggleButton
                        key={idx}
                        {...toggleButtonProps.btn}
                        value={itm[toggleButtonProps?.btn?.value]}
                    >
                        {itm[toggleButtonProps?.btn?.label]}
                    </ToggleButton>
                ))
            }
        </ToggleButtonGroup>
    )
}

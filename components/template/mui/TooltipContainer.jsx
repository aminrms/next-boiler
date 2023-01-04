import { Tooltip } from '@mui/material'
import TypoContainer from "./TypoContainer"
export default function TooltipContainer({
    children,
    tooltipProps,
}) {
    return (
        <Tooltip
            {...tooltipProps}
            title={
                <TypoContainer
                    typoProps={{
                        variant: tooltipProps.size ?? 'subtitle1',
                        color: "common.white",
                        text: tooltipProps.title,
                    }}
                />
            }
        >
            <div>
                {children}
            </div>
        </Tooltip>
    )
}
import { Badge } from '@mui/material'
export default function BadgeContainer({
    children,
    badgeProps,
}) {
    return (
        <Badge
            {...badgeProps}
        >
            {children}
        </Badge>
    )
}
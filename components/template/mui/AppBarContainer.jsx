import { AppBar, Toolbar } from "@mui/material";

export default function AppBarContainer({
    appBarProps,
    children,
    toolbarProps
}) {
    return (
        <AppBar
            {...appBarProps}
        >
            <Toolbar
            {...toolbarProps}
            >
                {children}
            </Toolbar>
        </AppBar>
    )
}

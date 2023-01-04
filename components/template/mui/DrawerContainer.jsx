import { Drawer } from "@mui/material";

export default function DrawerContainer({
    drawerProps,
    children,
    drawerPaperProps
}) {
    return (
        <Drawer
            {...drawerProps}
            PaperProps={{
                square: false,
                sx: {
                    m: 1,
                    bgcolor: (theme) => theme.palette.background.default
                },
                ...drawerPaperProps,
                className: "responsive-overloader"
            }}
        >
            {children}
        </Drawer>
    )
}

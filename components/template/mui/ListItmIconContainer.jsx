import { ListItemIcon } from "@mui/material";
function ListItmIconContainer({
    listItmIcoProps,
    children
}) {
    return (
        <ListItemIcon
            {...listItmIcoProps}
        >
            {children}
        </ListItemIcon>
    );
}

export default ListItmIconContainer;
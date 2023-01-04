import { ListItemAvatar } from "@mui/material";

export default function ListItmAvatarContainer({
    listItmAvatarProps,
    children
}) {
  return (
      <ListItemAvatar
      {...listItmAvatarProps}
      >
          {children}
   </ListItemAvatar>
  )
}

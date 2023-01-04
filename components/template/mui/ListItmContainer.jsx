import { ListItem } from "@mui/material";
export default function ListItmContainer({ children, listItmProps }) {
  return (
    <ListItem
      {...listItmProps}
    >
      {children}
    </ListItem>
  )
}

import { List } from '@mui/material'
export default function ListContainer({listProps,children}) {
  return (
      <List
      {...listProps}
      >
          {children}
    </List>
  )
}

import { DialogActions } from "@mui/material";

export default function DialogActionsContainer({
    dialogActionsProps,
    children
}) {
  return (
      <DialogActions
      {...dialogActionsProps}
      >
          {children}
   </DialogActions>
  )
}

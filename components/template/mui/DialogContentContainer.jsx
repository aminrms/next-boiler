import { DialogContent } from "@mui/material";
export default function DialogContentContainer({
  dialogContentProps,
  children
}) {
  return (
    <DialogContent
      {...dialogContentProps}
    >
      {children}
    </DialogContent>
  )
}

import { DialogTitle } from "@mui/material";

export default function DialogTitleContainer({
    children,
    dialogTitleProps
}) {
  return (
      <DialogTitle
          {...dialogTitleProps}
      >
          {children}
    </DialogTitle>
  )
}

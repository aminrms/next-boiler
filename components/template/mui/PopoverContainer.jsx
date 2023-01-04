import { Popover } from "@mui/material";

export default function PopoverContainer({
    popoverProps,
    children
}) {
  return (
      <Popover
      {...popoverProps}
      >
          {children}
    </Popover>
  )
}

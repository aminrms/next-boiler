import { Dialog, Slide } from "@mui/material";
import { forwardRef } from "react"

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide timeout={2000} direction="up" ref={ref} {...props} />;
});

export default function DialogContainer({
  dialogProps,
  children
}) {
  return (
    <Dialog
      {...dialogProps}
      TransitionComponent={Transition}
      className="responsive-overloader"
    >
      {children}
    </Dialog>
  )
}
import * as icons from "@mui/icons-material"
export default function IconContainer({
    icoProps
}) {
    const Icon = icons[icoProps.ico]
  return (
      <Icon
      {...icoProps}
      />
  )
}

import { Link } from "@mui/material"
export default function LinkContainer({
    children,
    linkProps
}) {
  return (
      <Link
      {...linkProps}
      >
          {children}
      </Link>
  )
}

import { Backdrop } from "@mui/material";
import LoadingContainer from "./LoadingContainer";
import useThemeHook from "../../../utils/hooks/useThemeHook";
export default function BackDropContainer({backDropProps}) {
    const theme = useThemeHook()
  return (
      <Backdrop
          {...backDropProps}
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
          <LoadingContainer
              loaderProps={{
                  color: theme.palette.secondary.dark,
                  size: 15,
              }}
          />
    </Backdrop>
  )
}

import { SyncLoader } from "react-spinners"
import useThemeHook from "../../../utils/hooks/useThemeHook"
export default function LoadingContainer({
    loaderProps,
}) {
    const theme = useThemeHook()
    return (
            <SyncLoader
            {...loaderProps}
            color={loaderProps?.color ?? theme.palette.primary.main}
            size={loaderProps?.size ?? 15}
            />
  )
}

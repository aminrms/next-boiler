import { httpDrawerHandler } from "../../redux/slicers/settings";
export const errorHandler = (error, dispatch) => {
    let code = error?.response?.request?.status
    console.error("Error from HTTP Request")
    dispatch(httpDrawerHandler({
        open: true,
        code,
        error,
    }))
}
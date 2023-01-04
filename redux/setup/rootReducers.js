import { combineReducers } from "redux"
import settings from "../slicers/settings"

const appReducer = combineReducers({
    settings
})

export const rootReducers = (state, action) => {
    if (action.type === "auth/logout") {
        localStorage.clear();
        return appReducer(undefined, action)
    }
    return appReducer(state, action)
}
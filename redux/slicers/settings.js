import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AXIOS from "../../utils/handlers/http"
import { errorHandler } from "../../utils/handlers/errorHandler";

const initialState = {
    httpDrawer: {
        open: false,
        code: "",
        error: ""
    },
    testState: {
        loading: false,
        data: null
    }
}

export const testFunction = createAsyncThunk(
    'settings/testFunction',
    async(_, {
        getState,
        fulfillWithValue,
        rejectWithValue,
        dispatch
    }) => {
        try {
            const state = getState();
            const id = state?.auth?.user?.id
            const { data } = await AXIOS.get(`/test/${id}`)
            return fulfillWithValue(data)
        } catch (error) {
            errorHandler(error, dispatch)
            throw rejectWithValue(error)
        }
    }
)

const settings = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        httpDrawerHandler: (state, { payload }) => {
            state.httpDrawer = payload
        }
    },
    extraReducers: {
        [testFunction.pending]: (state, _) => {
            state.testState['loading'] = true
        },
        [testFunction.fulfilled]: (state, {payload}) => {
            state.testState = {
                loading: false,
                data: payload.data
            }
        },
        [testFunction.rejected]: (state, _) => {
            state.testState['loading'] = false
        },
    }
})

export const {
    httpDrawerHandler
} = settings.actions

export default settings.reducer
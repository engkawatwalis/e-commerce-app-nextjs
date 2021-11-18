import { createSlice } from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState:{
        deviceSize: 'mobile'
    },
    reducers:{
        setDeviceSize(state, action){

            state.deviceSize = action.payload.deviceSize;
        }
    }
})

export const DeviceActions = deviceSlice.actions;

export default deviceSlice;
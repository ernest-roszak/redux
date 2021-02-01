import {combineReducers } from "redux";

import counterReducer from "./Counter/redux";
import userReducer from "./Users/redux";

const storeReducer = combineReducers({
    counterInStore: counterReducer,
    users: userReducer
})

export default storeReducer;